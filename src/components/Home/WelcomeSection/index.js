import React from 'react'
import styles from "./index.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomeSection() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.layer}></div>
        <div className={styles.info}>
          <h1>Nhà hát lớn TP Hồ Chí Minh</h1>
          <p>Nơi giao thoa giữa vẻ đẹp kiến trúc và nghệ thuật trình diễn</p>
        </div>
      </section>
    </>
  )
}

export default WelcomeSection