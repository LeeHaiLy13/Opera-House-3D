import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import styles from './BookTicket.module.css';

export default function BookTicket() {
  return (
    <section className={styles.container}>
      <h3>Đặt vé</h3>
      <p><i>Chúng tôi sẽ liên hệ bạn trong vòng 48 tiếng kể từ thời điểm nhận thông tin</i></p>
      <Form className={styles.form}>
        <Form.Group controlId="name">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
        <div className={styles.contact_detail}>
          <Form.Group controlId="phonenumber">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"></Form.Control>
          </Form.Group>
        </div>
        <div className={styles.book_detail}>
          <Form.Group controlId="show">
            <Form.Label>Vở diễn</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Số lượng vé</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
        </div>
        <Form.Group controlId="note">
          <Form.Label>Ghi chú</Form.Label>
          <Form.Control as="textarea" rows={"5"}></Form.Control>
        </Form.Group>
        <Button className={styles.button} type="submit">Gửi</Button>
      </Form>
    </section>
  )
}
