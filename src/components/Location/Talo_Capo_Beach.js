import React from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"

const Tako_Capo_Beach = () => {

    const renderTako_Capo_Beach = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                <div className="title">
                        <h1>หาดตะโละกาโปร์</h1>
                    </div>
                    <div className="main-content">
                        <div className="img">
                            <img src="https://www.innnews.co.th/wp-content/uploads/2019/12/3-10.jpg"
                                style={{
                                    width: "1000px",
                                    height: "600px"
                                }}
                            />
                        </div>
                        <div className="description">
                            <h3>ประวัติความเป็นมา</h3>
                            <p>
                            ตะโละกาโปร์ เป็นภาษามลายูพื้นเมือง คำว่า "ตะโละ" แปลว่า อ่าว คำว่า "กาโปร์" แปลว่า ปูน รวมความหมายแปลว่า อ่าวปูน ในสมัยก่อนกล่าวกันว่า 
                            บริเวณพื้นที่ตรงนี้ เป็นที่เก็บเปลือกหอย และนำเปลือกหอยเหล่านี้มาเผาไฟจนสุก และกลายเป็นปูนขาว นำมากินกับหมาก ปัจจุบันสันนิษฐานว่า เป็นเปลือกหอยขาว 
                            หรือหอยแครง เพราะว่าหอยขาว เป็นหอยประจำอ่าว มีมาก ชาวประมงจะเก็บมากินเนื้อ และเป็นสินค้าออกของอำเภอยะหริ่ง เปลือกหอยจะมีหินปูนฯ จึงเรียกตำบลนี้ว่า ตำบลตะโละกาโปร์
                            </p>
                            <p>
                            หาดตะโละกาโปร์ ตั้งอยู่ในเขตอำเภอยะหริ่ง ห่างจากที่ว่าการอำเภอยะหริ่ง ประมาณ 4 กิโลเมตร เป็นชายหาดที่มีความสวยงาม หาดตะโละกาโปร์ ปัตตานี ตั้งอยู่ใกล้หมู่บ้านชาวประมงที่ใช้เรือกอและออกไปหาปลา
                             เรือกอนั้นเป็นเรือประมงพื้นบ้านที่มีลวดลายสวยงาม ผสมผสานลายมลายูลายชวาและลายไทยที่โดดเด่นเป็นลายกนก ลายบัวคว่ำบัวหงาย ลายหัวนกในวรรณคดี แต่งแต้มด้วยสีสันสดฉุดฉาดสวยงาม 
                             นับเป็นเอกลักษณ์อย่างหนึ่งที่หาชมได้ยาก นอกจากนี้ชายหาดตะโละกาโปร์ ปัตตานียังเป็นชายหาดที่สวยงามหากมาตรงจังหวะพระอาทิตย์กำลังอัสดง ชายหาดจะกลายเป็นสีทองสวยงามสุดๆ
                            </p>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderTako_Capo_Beach()}
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
export default Tako_Capo_Beach