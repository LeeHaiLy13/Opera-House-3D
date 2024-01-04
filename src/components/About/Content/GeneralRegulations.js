import React from 'react'
import styles from "./index.module.css"

const GeneralRegulations = () => {
    return(
        <div className={styles.container}>
            <h1>QUY ĐỊNH CHUNG</h1>
      <div className={styles.timeline1}> 
      
      <div>
          <p className={styles.text_header}>1. Quy định đối với khán giả :</p>
           <ul>
              <li>Trang phục lịch sự khi vào nhà hát lớn.</li>
              <li>Vé không kèm trẻ em, chương trình không dành cho trẻ em dưới 6 tuổi.</li>
              <li>Tổ chức các hoạt động văn hoá nghệ thuật chất lượng cao phù hợp với chức năng, nhiệm vụ.</li>
              <li>Không hút thuốc lá, không mang quà bánh và kẹo cao su vào nhà hát lớn</li>
              <li>Không sử dụng điện thoại để ghi âm, ghi hình, quay phim khi chưa được sự đồng ý của ban quản lý.</li>
              <li>Yêu cầu chuyển điện thoại sang chế độ im lặng, hoặc rung khi chương trình bắt đầu biểu diễn.</li>
              <li>Sau khi chương trình biểu diễn mở màn 15 phút, nhà hát sẽ đóng cửa ra vào.</li>
              <li>Vui lòng giữ im lặng khi xem biểu diễn.</li>
          </ul>
          <p className={styles.text_header}>2. Các biển báo hướng dẫn khán giả khi đến nhà hát :</p>
          <p>Phòng gửi đồ </p>
          <p>Phòng y tế</p>
          <p>Xin chân thành cảm ơn!</p>
      </div>
      </div>
      </div>
    );
  };
  export default GeneralRegulations;
