import React from 'react'
import styles from "./index.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { address } from '../../constants'
function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.detail}>
        <h5>Nhà hát lớn Thành phố <br></br> Hồ Chí Minh</h5>
        <p>
          {address}<br></br>
          Liên hệ: 0864xxx868<br></br>
          Email: saigonoperahouse@gmail.com
        </p>
      </div>
      <div className={styles.detail}>
        <h5>Thông tin</h5>
        <p>Trang Chủ</p>
        <p>Về chúng tôi</p>
      </div>

      <div className={styles.detail}>
        <h5>Mô hình</h5>
        <p>Mô hình 3D</p>
      </div>

      <div className={styles.detail}>
        <h5>Hoạt động</h5>
        <p>Các buổi biểu diễn</p>
        <p>Sự kiện</p>
        <p>Lịch sử hoạt động</p>
      </div>

      <div className={styles.detail}>
        <h5>Follow us</h5>
        <span className={styles.brands}>
          <span><FontAwesomeIcon icon={faFacebook} color={"white"} /></span> &nbsp;
          <p>Saigon Opera House</p>
        </span>
      </div>
    </section>
  )
}

export default Footer