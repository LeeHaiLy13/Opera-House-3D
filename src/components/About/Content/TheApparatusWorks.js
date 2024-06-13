import React from 'react'
import styles from "./index.module.css"

const TheApparatusWorks = () => {
    return(
        <div className={styles.container}>
              <h1>BỘ MÁY HOẠT ĐỘNG</h1>
        <div className={styles.timeline}> 
      
        <div className={styles.timeline2}>
            <p className={styles.text_header}>1. Ban Giám đốc: Bao gồm Giám đốc và các Phó Giám đốc</p>
            <p className={styles.text_header}>2. Các phòng ban bao gồm</p>
            <ul>
                <li className={styles.text} >
                    Trung tâm Tổ chức Biểu diễn Nghệ thuật và Sự kiện Văn hóa
                    <ul>
                        <li>Bộ phận Tổ chức Biểu diễn Nghệ thuật và Sự kiện Văn hóa</li>
                        <li>Bộ phận Tổ chức hoạt động</li>
                    </ul>
                </li >
                <li className={styles.text}>Phòng Hành chính tổng hợp</li>
                <li className={styles.text}>Phòng Kỹ thuật</li>
                <li className={styles.text}>Phòng Bảo vệ</li>
            </ul>
        </div>

        <div className={styles.timeline2} >
            <p className={styles.text_header} >Giám đốc: Bà Nguyễn Thị Minh Nguyệt</p>
            <ul>
                <li className={styles.text}>Tổng đài: 02439330113, máy lẻ 219</li>
                <li className={styles.text}>Máy trực tiếp: 02439330114</li>
                <li className={styles.text}>FAX: 02439330114, 0243933011</li>
                <li className={styles.text}>Di động: 091 353 595</li>
                <li className={styles.text}>Email: nguyet_khanhbin@yahoo.com.</li>
            </ul>

            <p className={styles.text_header}>Phó giám đốc: Ông Đỗ Mạnh Hà – Phụ trách kỹ thuật</p>
            <ul>
                <li className={styles.text}>Tổng đài: 02439330113, máy lẻ 203</li>
                <li className={styles.text}>Di động: 096 666 9566</li>
                <li className={styles.text}>Email: manhha911@yahoo.com</li>
            </ul>

            <p className={styles.text_header}>Phó giám đốc: Ông Chu Anh Hùng – Phụ trách tổ chức & truyền thông</p>
            <ul>
                <li className={styles.text}>Tổng đài: (024) 39330113, máy lẻ 203</li>
                <li className={styles.text}>Máy trực tiếp: (024) 38248030</li>
                <li className={styles.text}>Di động: 098 3255556</li>
                <li className={styles.text}>Email: hungchutp@gmail.com</li>
            </ul>
            </div>
            
            <p className={styles.text_header}>Các phòng chức năng:</p>

            <div className={styles.timeline2}>
           
            <p className={styles.text_header}>1. Trung tâm Tổ chức Biểu diễn Nghệ thuật và Sự kiện Văn hóa</p>
            <ul>
                <li className={styles.text}>Tổng đài: 02439330113, máy lẻ 219</li>
                <li className={styles.text}>Máy trực tiếp: 02439330114</li>
                <li className={styles.text}>FAX: 02439330114, 0243933011</li>
                <li className={styles.text}>Di động: 091 353 595</li>
                <li className={styles.text}>Email: nguyet_khanhbin@yahoo.com.</li>
            </ul>
             
            <p className={styles.text_header}>Giám đốc: Bà Nguyễn Thị Minh Nguyệt</p>
            <ul>
                <li className={styles.text}>
                    Ban giám đốc
                    <ul>
                        <li className={styles.text}>Giám đốc: Ông Chu Anh Hùng
                             <ul>
                                <li> className={styles.text}Tổng đài: (024) 39330113, máy lẻ 203</li>
                                <li className={styles.text}>Máy trực tiếp: (024) 38248030</li>
                                <li className={styles.text}>Di động: 098 3255556</li>
                                <li className={styles.text}>Email: hungchutp@gmail.com</li>
                             </ul>

                        </li>
                        <li className={styles.text}>Phó giám đốc: Bà Nguyễn Thu Phương
                            
                        </li>
                    </ul>
                </li>
                <li className={styles.text}>Bộ phận Tổ chức Biểu diễn Nghệ thuật và Sự kiện Văn hóa
                    <ul>
                        <li className={styles.text}>Tổng đài: (024) 39330113, máy lẻ 218</li>
                    </ul>
                </li>
                
            </ul>
            </div>
             <div className={styles.timeline2}>
            <p className={styles.text_header}>2. Hành chính tổng hợp:</p>
            <ul> 
                <li className={styles.text}>Trưởng phòng: Ông Nguyễn Văn Thắng
                    <ul>      
                <li className={styles.text}>Tổng đài: (024) 39330113, máy lẻ 210</li>
                <li className={styles.text}>Máy trực tiếp: (024) 39330131</li>
                <li className={styles.text}>Di động: 0913565763.</li>
                    </ul>
                </li>
                
            </ul>
            </div>
            <div className={styles.timeline2}>
            <p className={styles.text_header}>3. Kỹ thuật:</p>
            <ul> 
                <li className={styles.text}>Phó trưởng phòng:
                    <ul>      
                <li className={styles.text}>Vũ Hoàng Hải: 0977377311.</li>
                <li className={styles.text}>Hoàng Việt: 0983229800</li>
                    </ul>
                </li>
                <li className={styles.text}>Email: haiopera75@gmail.com – viet.proaudio@gmail.com</li>
                <li className={styles.text}>FAX: (024)39330116</li>
            </ul>
            </div>
            <div className={styles.timeline2}>
            <p className={styles.text_header} >4. Bảo vệ:</p>
            </div>
            </div>
        </div>
       
       
        );
    };
    export default TheApparatusWorks;