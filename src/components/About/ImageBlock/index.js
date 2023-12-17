import React from 'react'

function ImageBlock(props) {
  return (
    <div>
        <img src={props.url} alt="" width={"380px"} height="280px"></img>
    </div>
  )
}

export default ImageBlock