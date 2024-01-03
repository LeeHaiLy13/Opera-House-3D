import React from 'react'
import styles from "./index.module.css"
import Model from "./image12.png"

function MainSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Vẻ đẹp của nhà hát lớn TP.HCM</h2>
      {/* <img className={styles.image} src={Model} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh"/> */}
      <img className={`${styles.image} ${styles.thumbnail}`} src={"https://media.gody.vn//images/ho-chi-minh/nha-hat-thanh-pho/10-2016/20161021024541-nha-hat-tp-gody%20(5).jpg"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh"/>
      <img className={`${styles.image} ${styles.thumbnail}`} src={"https://media.gody.vn//images/ho-chi-minh/nha-hat-thanh-pho/10-2016/20161021024545-nha-hat-tp-gody%20(8).jpg"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh"/>
      <img className={`${styles.image} ${styles.thumbnail}`} src={"https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1602831320943-73MWS5A9ZV9L95XY6HAU/c7992afc4dbaa4e4fdab.jpg?format=1500w"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh"/>
      <img className={`${styles.image} ${styles.thumbnail}`} src={"https://gody.vn/public/Media_User/yoshi_mori445316/12-2018/nha-hat-thanh-pho/130703338-20181206111510-nha-hat-thanh-pho.jpg"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh"/>
    </section>
  )
}

export default MainSection