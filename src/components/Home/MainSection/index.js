import React from 'react'
import styles from "./index.module.css"
import Model from "./image12.png"

function MainSection() {
  return (
    <section className={styles.container}>
      <div className={styles.model}>
        <h2 className={styles.title}>Mô hình Nhà hát lớn TP.HCM</h2>
        <div className={styles.container2}>
          <div className='row justify-content-between'>
            <div className='col-5'>
              <img className={`${styles.image} ${styles.thumbnail}`} src={Model} alt="Mô hình nhà hát lớn thành phố Hồ Chí Minh" />
            </div>
            <div className='col-6'>
              <p className={styles.textDeco}>
                Nhà hát Thành phố Hồ Chí Minh (thường được gọi ngắn gọn là Nhà hát Thành phố hoặc Nhà hát Lớn) được xây dựng vào năm 1898 bởi kiến trúc sư người Pháp Eugene Ferret theo lối kiến trúc hào nhoáng của thời Đệ tam cộng hoà Pháp. Nhà hát được xây cao hơn mặt đường hai mét, với hệ thống hai lớp cửa cách âm ngăn tiếng ồn đường phố vào bên trong. Được xây với cấu trúc đối xứng, nhà hát nằm ngay trên trục trung tâm thành phố, kết nối ga tàu điện ngầm, và từ đây ta có thể phóng tầm mắt nhìn thẳng ra bùng binh chợ Bến Thành. Mái vòm với điêu khắc nổi đặc trưng khiến nhà hát trông xa tựa như một ‘Khải Hoàn Môn’ lộng lẫy. Kiến trúc nhà hát thu hút từ những bức tượng chạm trổ tinh tế, đèn chùm pha lê rực rỡ, cho đến sàn đá granit sáng bóng đại sảnh. Khán phòng hình ô voan ngăn tiếng vang, có sức chứa 468 khách, đảm bảo chất lượng âm thanh và tầm nhìn từ mọi ghế về sân khấu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.artGallery}>
        <h2 className={styles.title}>Vẻ đẹp của Nhà hát lớn TP.HCM</h2>

        <div className={styles.container2}>
          <div className='row justify-content-between'>
            <div className='col-5'>
              <img className={`${styles.image} ${styles.thumbnail}`} src={"https://media.gody.vn//images/ho-chi-minh/nha-hat-thanh-pho/10-2016/20161021024541-nha-hat-tp-gody%20(5).jpg"} alt="Vẻ đẹp nhà hát lớn thành phố Hồ Chí Minh" />
            </div>
            <div className='col-6'>
              <p className={styles.textDeco}>
                Nhà hát Thành phố Hồ Chí Minh - với lịch sử phát triển hàng trăm năm - được xem như “cái nôi nghệ thuật” tại địa phương, nơi có các chương trình biểu diễn quy mô lớn. Ngày nay, Nhà hát Lớn Sài Gòn còn là toạ độ “sống ảo” được nhiều  trẻ tuổi yêu mến.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className='row justify-content-between'>
            <div className='col-6'>
              <p className={styles.textDeco}>
                Bên trong, không gian được thiết kế tiên tiến với hệ thống ánh sáng và âm thanh hiện đại, tạo ra trải nghiệm sống động. Với hai tầng lầu ngoài tầng trệt, Nhà hát này có khả năng chứa đến 1.800 chỗ ngồi.
                Sau nhiều biến cố lịch sử, Nhà hát TP HCM đã có những tổn thất. Đến năm 1998, công trình này đã trải qua quá trình tái xây dựng với nguyên tắc tôn trọng và bảo tồn phong cách kiến trúc ban đầu. Công việc phục chế các họa tiết trang trí như tượng nữ thần nghệ thuật, dây hoa,… đã đem lại sự tái hiện chân thực của chúng, giữ nguyên vẻ đẹp gần 100 năm trước đây.
              </p>
            </div>
            <div className='col-5'>
              <img className={`${styles.image} ${styles.thumbnail}`} src={"https://sacotravel.com/wp-content/uploads/2024/01/nha-hat-lon-thanh-pho-3.jpg"} alt="Vẻ đẹp nhà hát lớn thành phố Hồ Chí Minh" />
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className='row justify-content-between'>
            <div className='col-5'>
              <img className={`${styles.image} ${styles.thumbnail}`} src={"https://www.portcoast.com.vn/public/images/projects/saigon-opera-house/saigon-opera-house-058.jpg"} alt="Vẻ đẹp nhà hát lớn thành phố Hồ Chí Minh" />
            </div>
            <div className='col-6'>
              <p className={styles.textDeco}>
              Về đêm, tòa nhà được lên đèn tạo nên dáng vẻ sang trọng, thanh lịch, thu hút các tín đồ du lịch, văn hóa tề tựu về đây khám phá. Đặc biệt, view Lam Trường Công Sơn rộng lớn phía trước cũng là nét tô điểm cho không gian nhà hát thêm phần ấn tượng.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapShow}>
        <h2 className={styles.title}>Vị trí của Nhà hát lớn TP.HCM</h2>
        <iframe
          className={styles.thumbnail}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4522159703647!2d106.70059047477837!3d10.776635189372167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4649e7ca29%3A0x55f531b6120cae3b!2zTmjDoCBow6F0IFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1704365527700!5m2!1svi!2s"
          width="640"
          height="480"
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