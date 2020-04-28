import React from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"

const Yarang_Ancient_page = () => {

    const renderYarang_Ancient_page = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h1>เมืองโบราณยะรัง</h1>
                    </div>
                    <div className="main-content">
                        <div className="img">
                            <img src="https://pattani.mots.go.th/images/article/news369/n20180323100915_3763.jpg"
                                style={{
                                    width: "1000px",
                                    height: "600px"
                                }}
                            />
                        </div>
                        <div className="description">
                            <h3>ประวัติความเป็นมา</h3>
                            <p>
                                เมืองโบราณยะรัง อายุ 1,000 ปี ที่ตั้ง หมู่ 3 ตำบลยะรัง อำเภอยะรัง จังหวัดปัตตานี สภาพทางภูมิศาสตร์ เมืองโบราณยะรัง มีผังเมืองเป็นรูปวงรีขนาดใหญ่ในพื้นที่ประมาณ 9 ตารางกิโลเมตร
                                เป็นเมืองที่มีการสร้างทับซ้อนกันถึง 3 เมือง ขยายตัวเชื่อมต่อกัน ประกอบไปด้วย -เมืองโบราณบ้านวัด มีศูนย์กลางเป็นลานจัตุรัสกลางเมือง ล้อมรอบด้วยคูน้ำและมีซากเนินดินโบราณสถานกระจายอยู่โดยรอบกว่า 25 แห่ง
                                โดยเฉพาะอย่างยิ่งทางทิศตะวันตกและทางทิศเหนือในบริเวณพื้นที่บ้านจาเละ -เมืองโบราณบ้านจาเละ มีศูนย์กลางอยู่ที่สระน้ำ โอบล้อมด้วยคูเมืองรูปสี่เหลี่ยมถัดจากกลุ่มโบราณสถานบ้านวัด
                                ขึ้นไปทางทิศเหนือประมาณ 1 กิโลเมตร -เมืองโบราณบ้านปราแว เป็นเมืองคูน้ำ คันดินขนาดเล็กที่มีผังเมืองเป็นรูปสี่เหลี่ยมด้านไม่เท่ามีป้อมดินทั้ง 4 มุมเมือง
                                และมีคลองส่งน้ำต่อเชื่อมกับคูเมืองโบราณบ้านจาเละสี่มุมเมืองด้านทิศเหนือทั้ง 2 ด้าน นอกจากร่องรอยของคูน้ำ คันดินคูเมืองโบราณทั้ง 3 แห่งแล้วภายในกลุ่มเมืองโบราณนี้
                                ยังปรากฎซากโบราณสถานเนินดินกระจัดกระจายอยู่ทั่วไปไม่น้อยกว่า 30 แห่ง การเดินทางไปสู่แหล่งเมืองโบราณสามารถใช้เส้นทางสิโรรส (ทางหลวงหมายเลข 410 )
                                จากจังหวัดปัตตานีลงไปทางจังหวัดยะลาประมาณ 15 กิโลเมตร จะมีทางแยกซ้ายมือสายยะรัง-มายอ (ทางหลวงหมายเลข 4061) ประมาณ 1.2 กิโลเมตร
                                เข้าสู่เขตเมืองโบราณและเลี้ยวซ้ายขึ้นไปทางทิศเหนือประมาณ 400 เมตร ถึงเขตโบราณสถานบ้านจาเละ
                            </p>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderYarang_Ancient_page()}
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

export default Yarang_Ancient_page