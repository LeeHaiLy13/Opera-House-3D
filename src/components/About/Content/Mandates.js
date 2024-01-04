import React from 'react'
import styles from "./index.module.css"

const Mandates = () => {
  return(
    <div className={styles.container}>
            <h1>CHỨC NĂNG & NHIỆM VỤ</h1>
    <div className={styles.timeline1}> 

    <div>
        <p className={styles.text_header}>1. Tên giao dịch quốc tế: SaiGon Opera House</p>
        <p className={styles.text_header}>2. Chức năng, nhiệm vụ</p>
        <ul>
            <li>Tổ chức các hoạt động văn hoá , nghệ thuật phục vụ nhiệm vụ chính trị, xã hội quan trọng của Đảng và Nhà nước.</li>
            <li>Tổ chức các hoạt động văn hoá , nghệ thuật, hội nghị , hội thảo, họp báo chiêu đãi quốc gia và quốc tế theo kế hoạch của Bộ Văn hoá thể thao và du lịch.</li>
            <li>Tổ chức các hoạt động văn hoá nghệ thuật chất lượng cao phù hợp với chức năng, nhiệm vụ.</li>
            <li>Quan hệ và hợp tác với các tổ chức trong nước và quốc tế có liên quan để trao đổi nghiệp vụ và tổ chức các hoạt động văn hoá nghệ thuật theo sự phân công của Bộ và theo qui định của pháp luật.</li>
            <li>Tổ chức các hoạt động dịch vụ phù hợp với chức năng và nhiệm vụ của Nhà Hát Lớn Hà nội và theo qui định của pháp luật.</li>
        </ul>
    </div>
    </div>
    </div>
  );
};
export default Mandates;