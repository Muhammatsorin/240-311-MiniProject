import React from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"

const Panare_beach = () => {

    const renderPanare_beach = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h1>หาดปะนาเระ</h1>
                    </div>
                    <div className="main-content">
                        <div className="img">
                            <img src="https://2.bp.blogspot.com/-5xNBmX0eRzk/Wb-rH67LKQI/AAAAAAAAAIE/7mcZIsWcId8UIO7O1FHs83Tn3tHfRJZswCLcBGAs/s1600/%25E0%25B8%25AB%25E0%25B8%25B2%25E0%25B8%2594%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%258A%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B8%2581%25E0%25B8%25A9%25E0%25B9%258C.jpg"
                                style={{
                                    width: "1000px",
                                    height: "600px"
                                }}
                            />
                        </div>
                        <div className="description">
                            <h3>ประวัติความเป็นมา</h3>
                            <p>
                                หาดปะนาเระตั้งอยู่ที่ หมู่ที่ 2 ตำบลปะนาเระ อำเภอปะนาเระ จังหวัดปัตตานี รหัสไปรษณีย์ 94130 เป็นหมู่บ้านชาวประมงหลายร้อยหลังคาเรือน บนหาดทรายมีเรือกอและ และเรือประมงนานาชนิดจอดเรียงรายอยู่ทั่วทั้งหาด หาดทรายไม่เหมาะแก่การเล่นน้ำ เพราะเป็นหมู่บ้านชาวประมงและที่จอดเรือ
                            </p>
                            <p>
                                อยู่ห่างจากตัวอำเภอ 3 กิโลเมตร ใช้เส้นทางเดียวกับหาดตะโละกาโปร์ เป็นหมู่บ้านชาวประมงหลายร้อยหลังคาเรือน บนหาดทรายมีเรือกอและ และเรือประมงนานาชนิดจอดเรียงรายทั่วทั้งหาดไม่เหมาะแก่การเล่นน้ำ
                            </p>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderPanare_beach()}
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

export default Panare_beach