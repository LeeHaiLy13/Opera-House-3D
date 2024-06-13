import React from 'react'
import styles from "./index.module.css"

const GeneralRegulations = () => {
    return(
        <div className={styles.container}>
            <h1>QUY ĐỊNH CHUNG</h1>
      <div className={styles.timeline1}> 
      
      <div>
         
           <ul>
              <li className={styles.text}>Trang phục lịch sự khi vào nhà hát lớn.</li>
              <li className={styles.text}>Vé không kèm trẻ em, chương trình không dành cho trẻ em dưới 6 tuổi.</li>
              <li className={styles.text}>Tổ chức các hoạt động văn hoá nghệ thuật chất lượng cao phù hợp với chức năng, nhiệm vụ.</li>
              <li className={styles.text}>Không hút thuốc lá, không mang quà bánh và kẹo cao su vào nhà hát lớn</li>
              <li className={styles.text}>Không sử dụng điện thoại để ghi âm, ghi hình, quay phim khi chưa được sự đồng ý của ban quản lý.</li>
              <li className={styles.text}>Yêu cầu chuyển điện thoại sang chế độ im lặng, hoặc rung khi chương trình bắt đầu biểu diễn.</li>
              <li className={styles.text}>Sau khi chương trình biểu diễn mở màn 15 phút, nhà hát sẽ đóng cửa ra vào.</li>
              <li className={styles.text}>Vui lòng giữ im lặng khi xem biểu diễn.</li>
          </ul>
      </div>
      </div>
      </div>
    );
  };
  export default GeneralRegulations;
