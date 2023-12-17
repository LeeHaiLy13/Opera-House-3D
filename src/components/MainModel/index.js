import React, { useEffect, useState, useRef } from 'react'
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import esriRequest from "@arcgis/core/request";
import styles from "./index.module.css";
import { getAllBodyCom } from '../../apis/bodyCom';
import { getAllPrisms } from '../../apis/prism';

function MainModel() {
  const modelRef = useRef();
  let geoJsonLayer = useRef([]);
  const [dataJson, setDataJson] = useState();
  const [dataGeoJson, setDataGeoJson] = useState();

  useEffect(() => {
    getDataJson();
    getDataGeoJson();
  }, [])

  async function getDataJson() {
    let response = await getAllBodyCom();
    setDataJson(response?.data);
  }

  async function getDataGeoJson() {
    let response = await getAllPrisms();
    setDataGeoJson(response?.data);
  }

  async function createMap(Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) {

    var createGraphic = function (data) {
      return new Graphic({
        geometry: data,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate,
      });
    };

    const json_options = {
      query: {
        f: "json"
      },
      responseType: "json"
    };

    if (dataJson) {
      const dataJsonBlob = new Blob([JSON.stringify(dataJson)], {
        type: "application/json"
      });
      const dataJsonUrl = URL.createObjectURL(dataJsonBlob);

      esriRequest(dataJsonUrl, json_options).then(function (response) {
        var graphicsLayer = new GraphicsLayer();
        response.data?.allBodyCom.forEach(function (data) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });
    }

    dataGeoJson?.allPrism.map(item => {
      const itemGeoJsonBlob = new Blob([JSON.stringify(item)], {
        type: "application/json"
      });
      const url = URL.createObjectURL(itemGeoJsonBlob);
      const itemLayer = new GeoJSONLayer({
        url
      });

      itemLayer.renderer = {
        type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              size: item?.features[0]?.properties?.height,
              material: {
                color: item?.features[0]?.properties?.color,
              },
            },
          ],
        },
      };
      geoJsonLayer.current.push(itemLayer)
    });

    const map = await new Map({
      basemap: "topo-vector",
      ground: "world-elevation",
      layers: geoJsonLayer.current //end layers
    });

    const view = new SceneView({
      container: modelRef.current,
      map: map,
      camera: {
        position: [106.70117749271675, 10.776408362678433, 60],
        heading: 90,
        tilt: 80,
      },
    });
    view.popup.defaultPopupTemplateEnabled = true;
  }

  async function createModel() {
    createMap(Map, SceneView, GeoJSONLayer, SceneLayer,
      GraphicsLayer, Graphic, esriRequest);
  }

  createModel()

  return (
    <section className={styles.container}>
      <div ref={modelRef} style={{ height: "700px" }}></div>
    </section>
  )
}

export default MainModel