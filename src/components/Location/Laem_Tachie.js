import React from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"

const LeamTachie = () => {

    const renderLeamTachie = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h1>ปลายสุดแหลมตาชี</h1>
                    </div>
                    <div className="main-content">
                        <div className="img">
                            <img src="https://mpics.mgronline.com/pics/Images/559000006204901.JPEG"
                                style={{
                                    width: "1000px",
                                    height: "600px"
                                }}
                            />
                        </div>
                        <div className="description">
                            <h3>ประวัติความเป็นมา</h3>
                            <p>
                                แหลมตาชี หรือแหลมโพธิ์ เป็นหาดทรายขาวยื่นต่อจากหาดตะโละกาโปร์ไปในทะเลอ่าวไทยทางทิศเหนือยาว 11 กม. เป็นป่าสนทะเล หาดทรายขาวสะอาด
                                เหมาะสำหรับตากอากาศและเล่นน้ำทะเล อยู่ในเขตตำบลตะโละกาโปร์ การเดินทางไปแหลมตาชีไปได้ 2 ทาง คือ ทางน้ำ นั่งเรือจากปากแม่น้ำปัตตานีตรงไปยังแหลมตาชีเลย
                                ใช้เวลาประมาณชั่วโมงเศษ นั่งเรือจากท่าด่านอำเภอยะหริ่ง ออกมาตามคลองยามู จนถึงทะเลในไปจนถึงแหลมตาชี ทางบก จากอำเภอยะหริ่ง ข้ามคลองยามูมาตามสะพานไม้
                                มีถนนตัดเข้าไปประมาณ 10 กม. จนถึงหมู่บ้านที่ 2 ตำบลตะโละกาโปร์ และนั่งเรือหางยาวต่อไปจนถึงปลายแหลม แหลมตาซีหรือแหลมโพธิ์มีหาดทรายขาวสะอาด ทรายสวยมาก
                                แหลมยื่นลงไปในทะเลอ่าวไทยยาว 11 กิโลเมตร
                            </p>
                            <h3>สถานที่ตั้ง</h3>
                            <p>
                                อยู่ที่ตำบลตะโละกาโปร์ต่อเนื่องมาถึงตำบลแหลมโพธิ อำเภอยะหริ่ง แหลมนี้เกิดจากการก่อตัวของสันทรายที่ยื่นออกไปในทะเล ในลักษณะสันดอนจะงอย ทำให้เกิดอ่าวปัตตานีด้านในของแหลม
                                มีความยาวประมาณ 16 กิโลเมตร ปกติปลายแหลมจะงอยเพิ่มออกไปทุกปี ปีละประมาณ 20-40 เมตร ชายฝั่งมีการเปลี่ยนแปลงอยู่เสมอ เนื่องจากคลื่นลมและกระแสน้ำ ด้านนอกของแหลมเป็นหาดทราย
                                ตลอดแนวจนถึงปลายแหลม ภูมิทัศน์สวยงาม ส่วนด้านในที่ติดกับอ่าวเป็นที่ตั้งชุมชนหลายแห่ง ประชากรส่วนใหญ่ประกอบอาชีพการประมง
                            </p>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderLeamTachie()}
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

export default LeamTachie