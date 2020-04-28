import React from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"

const Pattani_Central_Mosque = () => {

    const render_page = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h1>มัสยิดกลางปัตตานี</h1>
                    </div>
                    <div className="main-content">
                        <div className="img">
                            <img src="https://1.bp.blogspot.com/-FHWzF9cgPn0/WmWTU2-4LMI/AAAAAAAAAEM/NdrXenvDbdEAztz0P18SWpYVzjI1s7s_ACLcBGAs/s1600/1413524670-IMG48831JP-o.jpg"
                                style={{
                                    width: "1000px",
                                    height: "600px"
                                }}
                            />
                        </div>
                        <div className="description">
                            <h3>ประวัติความเป็นมา</h3>
                            <p>
                                มัสยิดกลางจังหวัดปัตตานีก่อสร้างขึ้นในปี พ.ศ. 2497 โดยใช้พื้นที่บริเวณริมถนนหลวงสายปัตตานี-ยะลา ย่านตำบลอาเนาะรู กว้าง 3 ไร่ 55 ตารางวา
                                ตามแนวคิดของรัฐบาลในสมัยนั้นที่ต้องการให้เกิดสันติสุขขึ้นในพื้นที่ห่างไกลที่มักมีความรุนแรงเกิดขึ้น ทั้งจากสภาพความเป็นอยู่ที่ไม่พัฒนาและความแตกต่างทางศาสนา
                                โดยพลตำรวจเอกเผ่า ศรียานนท์ รัฐมนตรีว่าการกระทรวงมหาดไทยเดินทางมาวางศิลาฤกษ์เมื่อวันที่ 6 กรกฎาคม พ.ศ. 2500 และใช้เวลาก่อสร้างนาน 9 ปี
                                เมื่อแล้วเสร็จจอมพลสฤษดิ์ ธนะรัชต์ นายกรัฐมนตรีได้เดินทางมาทำพิธีเปิดอย่างเป็นทางการเมื่อวันที่ 25 พฤษภาคม 2506 ให้ชื่อว่า “มัสยิดกลางจังหวัดปัตตานี”
                                และมอบเป็นของขวัญแก่ประชาชนชาวมุสลิมในพื้นที่ หลังจากนั้นมีการบูรณะซ่อมแซมและต่อเติมเมื่อคราวใช้ต้อนรับเสด็จพระบาทสมเด็จพระเจ้าอยู่หัว พร้อมด้วยสมเด็จพระนางเจ้าฯ
                                พระบรมราชินีนาถเมื่อวันที่ 21 ตุลาคม 2536 ทรงมีพระราชกระแสรับสั่งกับนายสัมพันธ์ ทองสมัคร รัฐมนตรีว่าการกระทรวงศึกษาธิการให้บูรณะปรับปรุงอาคารของมัสยิด
                                กระทรวงศึกษาธิการจึงได้กำหนดให้เป็นโครงการเฉลิมพระเกียรติในวโรกาสที่พระบาทสมเด็จพระเจ้าอยู่หัว ทรงครองศิริราชสมบัติเป็นปีที่ 50 ใน พ.ศ. 2539
                                ส่งผลให้ตัวอาคารขยายและต่อเติมออกทั้ง 2 ข้าง และยังสร้างหออะซานเพิ่มอีก 2 หอ ในเวลาต่อมา
                            </p>
                            <p>
                                คติความเชื่อในการสร้างมัสยิดกลาง หรือ ญะมีอะห์ (อาหรับ: الجميعة‎) แพร่มาจากประเทศในแถบตะวันออกกลาง ซึ่งมีขึ้นเพื่อให้ผู้นับถือศาสนาจากมัสยิดและชุมชนต่างๆ หลายแห่งมารวมตัวกัน
                                เพื่อทำละหมาดร่วมกัน หรือฟังคำอบรมสั่งสอนก่อนละหมาด (คุฏบะฮ์) นอกจากนี้ยังเป็นโอกาสที่ชาวมุสลิมจะได้ร่วมพบปะกันนอกเหนือไปจากชาวมุสลิมในชุมชนของตัวเอง
                            </p>
                            <p>
                                มัสยิดแห่งนี้ออกแบบโดย นายประสิทธิผล ม่วงเขียว สถาปนิกกรมศาสนา รูปทรงภายนอกของมัสยิดมีต้นแบบมาจากทัชมาฮาล มียอดโดมสีเขียวขนาดใหญ่กลางอาคารคอนกรีตเสริมเหล็กสองชั้น
                                และโดมขนาดเล็กลงไปล้อมรอบ 4 ด้าน ด้านข้างมีหออะซาน 2 หอ และมีสระน้ำเบื้องหน้าส่องสะท้อนแสงเงาของมัสยิดอย่างงดงาม ส่วนภายในสร้างเป็นห้องโถง มีระเบียงอยู่สองข้าง มีมิมบัรทรงสูงและแคบตั้งอยู่
                                มีหินอ่อนประดับประดาอย่างงดงาม ภายหลังการบูรณะ ปัจจุบันตัวอาคารของมัสยิดขยายออกไปทั้ง 2 ข้าง มีหออะซานเพิ่มเป็น 4 หอ และขยายสระน้ำให้กว้างขึ้น
                            </p>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {render_page()}
        </div>
    )
}

const StyledWrapper = styled.div`
    margin: 0;

    .title {
        margin-top: 50px;
        margin-bottom: 50px;
        text-align: center;

        h1 {
            font-family: 'Mitr';
            font-size: 40px;
            font-weight: 900;
        }
    }

    .main-content {
        margin-bottom: 100px;
        margin-left: 100px;
        margin-right: 100px;

        .img {
            display: flex;
            justify-content: center;
        }

        .description {
            margin-top: 50px;

            h3 {
                font-family: 'Mitr';
                font-weight: 900;
            }

            p {
                font-family: 'Mitr';
                text-indent: 3em;
            }
        }
    }
`
export default Pattani_Central_Mosque