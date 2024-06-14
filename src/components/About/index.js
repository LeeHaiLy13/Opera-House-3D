import React, { useState } from 'react';
import styles from './index.module.css';
import DevelopmentProcess from './Content/DevelopmentProcess'
import Mandates from './Content/Mandates'
import TheApparatusWorks from './Content/TheApparatusWorks'
import GeneralRegulations from './Content/GeneralRegulations'
import Device from './Content/Device'



const AboutUs = () => {
  const [selectedComponent, setSelectedComponent] = useState(DevelopmentProcess);
  const [selectedDataTitle, setSelectedDataTitle] = useState("history");


  const items = [
    {
      title: "LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN",
      dataTitle: "history",
    },
    {
      title: "CHỨC NĂNG & NHIỆM VỤ",
      dataTitle: "function",
    },
    {
      title: "BỘ MÁY HOẠT ĐỘNG",
      dataTitle: "machine",
    },
    {
      title: "QUY ĐỊNH CHUNG",
      dataTitle: "regulation",
    },
    {
      title: "TRANG THIẾT BỊ",
      dataTitle: "equipment",
    },
  ];
  const handleItemClick = (dataTitle) => {
    setSelectedComponent(getCorrespondingComponent(dataTitle));
    setSelectedDataTitle(dataTitle);
  };

  const ListComponent = ({ items }) => {
    return (
      <div className={styles.container}>
      <div className={styles.list_component}>
        {items.map((item, index) => (
          <li
            key={index}
            data-title={item.dataTitle}
            onClick={() => handleItemClick(item.dataTitle)}
            className={`${item.dataTitle === selectedDataTitle ? "selected" : ""}`}
          >
            {item.title}
          </li>
        ))}
      </div>
      </div>
    );
  };




  const getCorrespondingComponent = (title) => {
    switch (title) {
      case "history":
        return DevelopmentProcess;
      case "function":
        return Mandates;
      case "machine":
        return TheApparatusWorks;
      case "regulation":
        return GeneralRegulations;
      case "equipment":
        return Device;
      default:
        return DevelopmentProcess;
    }
  };

return (

    <section> 
      <div className='container'>
        <div className="row">
          <div className="col-sm-3">
            <ListComponent items={items} />
          </div>

          <div className="col-md-9" >
            {selectedComponent}
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default AboutUs;