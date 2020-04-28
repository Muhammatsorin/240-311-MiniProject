import React from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"

const KaeKae_Beach_Page = () => {

    const renderKaeKae_Beach = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h1>หาดแฆแฆ</h1>
                    </div>
                    <div className="main-content">
                        <div className="img">
                            <img src="https://www.paaktai.com/tmp/944be3095c0b3f7e8e7ab31f9de6d5dc.jpg"
                                style={{
                                    width: "1000px",
                                    height: "600px"
                                }}
                            />
                        </div>
                        <div className="description">
                            <h3>ประวัติความเป็นมา</h3>
                            <p>
                                หาดแฆแฆ ชายหาดสวยงามและน่าเที่ยวที่สุดแห่งหนึ่งของปัตตานี อยู่ห่างจากตัวจังหวัด 43 กิโลเมตรจุดเด่นของหาดแฆแฆคือเป็นชายหาดที่มีโขดหินแกรนิตขนาดใหญ่
                                ลักษณะแปลกตาสวยงามบนเนินเขา คำว่า “แฆแฆ” เป็นภาษามลายู แปลว่า เสียงดังอึกทึกครึกโครม ในอดีตเรือพ่อค้าจากอินโดนีเซียมาทำการค้าที่เมืองปัตตานี จะขึ้นฝั่งที่นี่
                                เพราะมีแหลมยื่นไปในทะเลสะดวกต่อการจอดเทียบเรือ แต่เมื่อเรือเข้าใกล้ชายฝั่งปรากฏว่าน้ำตื้นเทียบฝั่งไม่ได้ ชาวเรือจึงส่งเสียงดังโหวกเหวกเพื่อเรียกให้ชาวบ้านมาช่วย
                                เรื่องราวนั้นจึงเป็นตำนานที่มาของหาดแฆแฆ ต่อมาชายหาดแห่งนี้ยังมีเสียงดังอึกทึกครึกโครมตลอดเวลาจากนักท่องเที่ยวที่มาเที่ยวพักผ่อนกันอย่างไม่ขาดสาย เป็นแหล่งสร้างรายได้ให้ประชาชนในพื้นที่
                            </p>
                            <p>
                                บริเวณหาดแฆแฆยังมีเนินเขา ข้างบนเป็นศาลาพักผ่อน และเป็นจุดชมทิวทัศน์ที่มีความสวยงามอีกแห่งหนึ่งของอำเภอปะนาเระ ชายหาดโค้งเว้ามีความยาวเป็นระยะทางไกล
                                ทรายมีสีทองละเอียดตัดกับน้ำทะเลสีครามในวันฟ้าใส นอกจากนั้นยังมีโขดหินขนาดใหญ่รูปร่างแปลกตาจำนวนมากที่เกิดขึ้นเอง
                                Fจึงมีลักษณะคล้ายสวนหินธรรมชาติเป็นที่สะสุดตาของนักท่องเที่ยวที่มาเยือนและไม่พลาดที่จะถ่ายรูปกับบริเวณโขดหินแห่งนี้
                            </p>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderKaeKae_Beach()}
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

export default KaeKae_Beach_Page