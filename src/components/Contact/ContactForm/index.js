import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styles from "./index.module.css";

function ContactForm() {
  const slides = document.querySelectorAll('#slide-banner img');
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

setInterval(changeSlide, 3000);

  return (
    <section >

      <div className={styles.banner} >
       <p className={styles.text_banner} ></p>
      </div>

   <div class="row">
   <div class=" col-sm-6 col-sm-6">
   
    <div className={styles.text_LH}>
    <h2>LIÊN HỆ VỚI NHÀ HÁT LỚN SÀI GÒN</h2>
    <p>Địa Chỉ: 07 Công Trường Lam Sơn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh</p>
    <p>Mail: nhahatthanhpho@gmail.com</p>
    <p>Liên Hệ: 0888888888</p>
    </div>
  </div>

  <div class="col-sm-6 col-sm-6">
     <div className={styles.text_LH}>
    <h2>GỬI NỘI DUNG LIÊN HỆ</h2>
    <p><i>Chúng tôi sẽ liên hệ với bạn trong vòng 48 tiếng.</i></p>
    <Form className={styles.form}>
      <Form.Group controlId="name">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>
      <div>
        <Form.Group controlId="number">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"></Form.Control>
        </Form.Group>

      </div>
      <Form.Group controlId="content">
        <Form.Label>Nội dung</Form.Label>
        <Form.Control as="textarea" rows={"5"}></Form.Control>
      </Form.Group>
      <Button className={styles.button} type="submit">Gửi</Button>
    </Form>
  </div>
  </div>
 
</div>


    </section>
  )
}

export default ContactForm