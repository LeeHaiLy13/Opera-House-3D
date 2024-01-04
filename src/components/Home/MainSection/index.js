import React from 'react'
import styles from "./index.module.css"
import Model from "./image12.png"

function MainSection() {
  return (
    <section className={styles.container}>
      <div className={styles.artGallery}>
        <h2 className={styles.title}>Vẻ đẹp của nhà hát lớn TP.HCM</h2>
        {/* <img className={styles.image} src={Model} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh"/> */}
        <img className={`${styles.image} ${styles.thumbnail}`} src={"https://media.gody.vn//images/ho-chi-minh/nha-hat-thanh-pho/10-2016/20161021024541-nha-hat-tp-gody%20(5).jpg"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh" />
        <img className={`${styles.image} ${styles.thumbnail}`} src={"https://media.gody.vn//images/ho-chi-minh/nha-hat-thanh-pho/10-2016/20161021024545-nha-hat-tp-gody%20(8).jpg"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh" />
        <img className={`${styles.image} ${styles.thumbnail}`} src={"https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1602831320943-73MWS5A9ZV9L95XY6HAU/c7992afc4dbaa4e4fdab.jpg?format=1500w"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh" />
        <img className={`${styles.image} ${styles.thumbnail}`} src={"https://gody.vn/public/Media_User/yoshi_mori445316/12-2018/nha-hat-thanh-pho/130703338-20181206111510-nha-hat-thanh-pho.jpg"} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh" />
      </div>
      <div className={styles.mapShow}>
        <h2 className={styles.title}>Vị trí của Nhà hát lớn TP.HCM</h2>
        <iframe
          className={styles.thumbnail}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4522159703647!2d106.70059047477837!3d10.776635189372167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4649e7ca29%3A0x55f531b6120cae3b!2zTmjDoCBow6F0IFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1704365527700!5m2!1svi!2s"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Nhà hát lớn TP.HCM"
        ></iframe>
      </div>
    </section>
  )
}

export default MainSection