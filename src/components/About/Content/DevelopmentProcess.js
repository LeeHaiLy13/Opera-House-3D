import React from 'react';
import styles from "./index.module.css"

const items = [
    {
      title: "1863 - 1898",
      content: "Năm 1863, chính quyền Pháp mời một đoàn hát sang biểu diễn tại Sài Gòn để giải trí cho lính viễn chinh Pháp. Sau đó, một nhà hát tạm được lập ở vị trí Khách sạn Caravelle ngày nay. Năm 1898, Nhà hát lớn được khởi công ngay cạnh nhà hát cũ. Đến ngày 1 tháng 1 năm 1900 thì khánh thành.",
    },
    {
      title: "1900 - 1943",
      content: "Nhà hát trở thành một khu trung tâm giải trí dành riêng cho những nhân vật sang trọng. Tuy nhiên, sau thời gian đầu hoạt động sôi nổi, nhà hát chỉ còn sinh hoạt cầm chừng với các buổi ca hát, hòa nhạc và cải lương.",
    },
    {
      title: "1943 - 1944",
      content: "Năm 1943, phần trang trí, điêu khắc ở mặt tiền nhà hát bị xóa bỏ nhằm trẻ trung hóa phong cách kiến trúc. Tuy nhiên, vào năm 1944, nhà hát bị phi cơ Đồng Minh oanh tạc, làm hư hại nặng, phải ngưng hoạt động.",
    },
    {
      title: "1945 - 1975",
      content: "Sau khi Pháp tái chiếm Đông Dương, do hoàn cảnh chiến tranh, nhà hát không được tu bổ nhiều. Năm 1954, nơi đây được sử dụng làm nơi ở tạm trú cho các thường dân Pháp từ miền Bắc di cư vào Nam theo Hiệp định Genève năm 1954. Năm 1955, nhà hát được tu bổ cải tạo nhưng lại được sử dụng với chức năng tòa Trụ sở Quốc hội (sau gọi là nhà Hạ nghị viện) của chính quyền Việt Nam Cộng hòa.",
    },
    {
      title: "1975 - 2020",
      content: "Sau năm 1975, Nhà hát được trả lại chức năng ban đầu là tổ chức biểu diễn nghệ thuật. Năm 1998, nhân dịp 300 năm khai sinh Thành phố Sài Gòn, chính quyền thành phố đã cho tu bổ lớn với phương châm bảo tồn phong cách kiến trúc ban đầu. Hội đồng nhân dân Thành phố Hồ Chí Minh đã phê chuẩn một dự án tân trang nhà hát vào tháng 11 năm 2007, kinh phí trù liệu là 1,6 tỷ đồng. Dự án hoàn tất cuối năm 2009.",
    },
  ];
  
  const DevelopmentProcess = () => {
    return (
      <div className={styles.container}>
         <h1>LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN</h1>
      <div className={styles.timeline1}>
       
        {items.map((item) => (
          <div class="row" key={item.id}>
            <div className={styles.content} ></div>
            <div class="col-sm-2" >{item.title}</div>
            <div class="col-sm-10 ">
              <div className={styles.timeline2}>

                {item.content}
                
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    
    );
  };  


export default DevelopmentProcess;