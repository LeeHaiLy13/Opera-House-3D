import React from 'react'
import styles from "./index.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function WelcomeSection() {
  return (
    <Carousel data-bs-theme="dark" className={styles.carouselContainer}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.luneproduction.com/content/images/thumbs/0002390_0_image.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className={styles.caption}>
            <h3>Nhà hát lớn TP Hồ Chí Minh</h3>
            <p>Nơi giao thoa giữa vẻ đẹp kiến trúc và nghệ thuật trình diễn</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.portcoast.com.vn/public/images/articles/20201025-the-digitization-of-the-over-120-year-old-saigon-opera-house/the-digitization-of-the-over-120-year-old-saigon-opera-house-001.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className={styles.caption}>
            <h3>Nhà hát lớn TP Hồ Chí Minh</h3>
            <p>Nơi giao thoa giữa vẻ đẹp kiến trúc và nghệ thuật trình diễn</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.luneproduction.com/content/images/thumbs/0002396_0_image.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className={styles.caption}>
            <h3>Nhà hát lớn TP Hồ Chí Minh</h3>
            <p>Nơi giao thoa giữa vẻ đẹp kiến trúc và nghệ thuật trình diễn</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.luneproduction.com/content/images/thumbs/0002384_0_image.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className={styles.caption}>
            <h3>Nhà hát lớn TP Hồ Chí Minh</h3>
            <p>Nơi giao thoa giữa vẻ đẹp kiến trúc và nghệ thuật trình diễn</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.portcoast.com.vn/public/images/projects/saigon-opera-house/saigon-opera-house-058.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className={styles.caption}>
            <h3>Nhà hát lớn TP Hồ Chí Minh</h3>
            <p>Nơi giao thoa giữa vẻ đẹp kiến trúc và nghệ thuật trình diễn</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default WelcomeSection