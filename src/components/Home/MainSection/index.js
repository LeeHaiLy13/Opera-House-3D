import React from 'react'
import styles from "./index.module.css"
import Model from "./image12.png"

function MainSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Mô hình nhà hát lớn TP.HCM</h2>
      {/* <img className={styles.image} src={Model} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh"/> */}
      <img className={styles.image} src={"https://media.gody.vn//images/ho-chi-minh/nha-hat-thanh-pho/10-2016/20161021024545-nha-hat-tp-gody%20(8).jpg"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh"/>
    </section>
  )
}

export default MainSection