import React from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"

const Chang_Hai_Temple_Page = () => {

    const renderChang_Hai_Temple_Page = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h1>วัดราษฎร์บูรณะ (วัดช้างให้)</h1>
                    </div>
                    <div className="main-content">
                        <div className="img">
                            <img src="https://www.thailandtourismdirectory.go.th/th/file/get/file/201711143dd724068ebfa26bd423499cac3b5955105136.jpg"
                                style={{
                                    width: "1000px",
                                    height: "600px"
                                }}
                            />
                        </div>
                        <div className="description">
                            <h3>ประวัติความเป็นมา</h3>
                            <p>
                                วัดช้างให้ ตั้งอยู่ที่ตำบลควนโนรี อำเภอโคกโพธ์ิ เป็นวัดเก่าแก่สร้างมาแล้วกว่า 300 ปี ตามตำนานกล่าวว่า พระยาแก้มดำเจ้าเมืองไทรบุรี ต้องการหาชัยภูมิสำหรับสร้างเมืองใหม่ให้กับน้องสาว
                                จึงได้เสี่ยงอธิฐาน ปล่อยช้างให้ออกเดินทางไปในป่า โดยมีเจ้าเมืองและไพร่พลเดินติดตามไป จนมาถึงวันหนึ่ง ช้างได้หยุดอยู่ ณ ที่แห่งหนึ่ง แล้วร้องขึ้นสามครั้ง พระยาแก้มดำจึงได้ถือเป็นนิมิตที่ดี
                                จะใช้บริเวณนั้นสร้างเมือง แต่น้องสาวไม่ชอบ พระยาแก้มคำจึงให้สร้างวัด ณ บริเวณดังกล่าวแทน แล้วให้ชื่อว่า วัดช้างให้ แล้วนิมนต์พระภิกษุรูปหนึ่ง ที่ชาวบ้านเรียกว่า ท่านลังกา หรือ สมเด็จพะโคะ หรือ
                                หลวงพ่อทวดเหยียบน้ำทะเลจืด มาเป็นเจ้าอาวาสองค์แรก ท่านได้เดินธุดงค์ไปมา ระหว่างเมืองไทรบุรีกับวัดช้างให้ และได้สั่งลูกศิษย์ไว้ว่า ถ้าท่านมรณะภาพ ขอให้นำศพไปทำการฌาปนกิจ ณ วัดช้างให้
                                ซึ่งเมื่อท่านมรณะภาพที่เมืองไทรบุรี ลูกศิษย์ก็ได้นำศพท่านมา ทำการฌาปนกิจที่วัดช้างให้ อัฐิของท่านส่วนหนึ่งฝังไว้ที่วัดช้างให้ อีกส่วนหนึ่งนำกลับไปเมืองไทรบุรี ต่อมาได้สร้างสถูปบรรจุอัฐิของท่านไว้ที่วัดช้างให้
                            </p>
                            <p>
                                เมื่อปี พ.ศ. 2480 พระครูมนูญเจ้าอาวาสวัดพลานุภาพ เจ้าคณะตำบลทุ่งพลา ให้พระช่วงมาเป็นเจ้าอาวาสวัดช้างให้ ท่านได้ชักชวนชาวบ้านมาแผ้วถางป่า สร้างกุฎิ ศาลาการเปรียญ
                                พร้อมเสนาสนะอื่น ๆ จึงได้ชื่อว่า วัดราษฎร์บูรณะ เจ้าอาวาสองค์ต่อ ๆ มาก็ได้บูรณะเพิ่มเติมวัดช้างให้ มาตามลำดับจนถึงปัจจุบัน วัดช้างให้ได้รับพระราชทานวิสุงคามสีมา เมื่อปี พ.ศ. 2500
                                และผูกพันธสีมา เมื่อปี พ.ศ. 2501
                            </p>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderChang_Hai_Temple_Page()}
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

export default Chang_Hai_Temple_Page