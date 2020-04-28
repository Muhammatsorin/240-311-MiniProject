import React from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"

const Sky_Walk = () => {

    const renderSky_Walk = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h1>Sky Walk</h1>
                    </div>
                    <div className="main-content">
                        <div className="img">
                            <img src="https://f.ptcdn.info/606/054/000/ozbacth50P8Jmz3YvIe-o.jpg"
                                style={{
                                    width: "1000px",
                                    height: "600px"
                                }}
                            />
                        </div>
                        <div className="description">
                            <h3>ประวัติความเป็นมา</h3>
                            <p>
                                สกายวอล์ค ปัตตานี ตั้งอยู่ที่อำเภอเมือง จังหวัดปัตตานี ภายในพื้นที่ของสวนสมเด็จสวนสมเด็จพระศรีนครินทร์  หรือ สวนแม่ ลูก สถานที่พักผ่อนหย่อนใจและออกกำลังกายของชาวปัตตานี
                                โดยบริเวณทางเข้าสวน  ได้จัดทำเป็นเส้นทางเดินลอยฟ้าเหนือป่าชายเลนที่มีความสูง 12 เมตร ประมาณตึก 5  ชั้น สกายวอล์ค แห่งนี้สามารถชมวิวทิวทัศน์แบบพาโนรามา
                                ชมเมืองปัตตานี วิถีชีวิตชาวประมง รวมถึงชมความงดงามของพระอาทิตย์ขึ้นและพระอาทิตย์ตกอีกด้วย
                            </p>
                            <p>
                                สะพานแห่งนี้ มีความยาว 400 เมตร ทอดยาวเหนือป่านชายเลน  ลักษณะเป็นสะพานโครงสร้างเหล็ก พื้นทางเดินเป็นเหล็กตาข่ายที่รองรับน้ำหนักได้มาก มีบันไดขึ้น-ลง 2 จุด มีจุดพัก 5 จุด ในเส้นทาง
                                เมื่อขึ้นไปเดินบนสกายวอล์คจะได้สัมผัสกับวิวทิวทัศน์ของผืนป่าชายเลนบริเวณสวนแม่ ลูก และวิวทิวทัศน์ของท้องทะเลอ่าวปัตตานี และแหลมตาชี ทางฝั่งทิศตะวันตก
                                ส่วนเมื่อมองไปทางฝั่งทิศตะวันออกจะเห็นวิวทิวทัศน์ของเขาทรายขาวหรือเขารังเกียบ
                            </p>
                            <p>
                                บรรยากาศบนสะพานลมพัดเย็นสบาย วิวที่มองเห็นจากพื้นตาข่ายเพิ่มความตื่นเต้นให้นักท่องเที่ยวอีกด้วย สำหรับคนที่กลัวความสูง อาจจะมีขาสั่นนิดหน่อย เพราะพื้นข้างล่างเป็นตาข่ายเหล็กมองเห็นวิวผ่านช่องเล็กๆ
                                แนะนำว่าถ้าใครจะมาเดินเล่นมาในช่วงเวลาเช้า หรือไม่ก็เป็นช่วงบ่ายแก่ๆ ถึงเย็น เพราะแดดจะไม่ร้อนมาก
                            </p>
                            <p>
                                ได้เห็นทัศนียภาพที่สวยงามสบายตา แถมความตื่นเต้นมานิดหน่อย  ใครมาเที่ยวปัตตานี้ต้องไม่พลาดมาเดินเล่น  สกายวอล์ค อีกหนึ่งแลนด์มาร์คที่น่าสนใจของปัตตานี ที่ได้มองเห็นวิวที่แปลกตา ไม่เหมือนที่แห่งใด
                            </p>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderSky_Walk()}
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

export default Sky_Walk