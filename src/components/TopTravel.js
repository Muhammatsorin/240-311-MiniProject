import React from "react"
import styled from "styled-components"
import { firestore } from "../index"
import 'antd/dist/antd.css'
import { Divider , Button } from 'antd'

const TopTravel = () => {
    return (
        <StyledWrapper>
            <div className="title">
                <h1>Top Travel</h1>
            </div>
            <div className="content">
                <div className="left-content">
                    <img src="http://pattaniheritagecity.psu.ac.th/wp-content/uploads/2019/01/DSC_2381.jpg" title="Thank for the picture from pattaniheritagecity.psu.ac.th"
                        style={{
                            width: "400px" ,
                            height: "300px"
                        }}
                    />
                    <div className="text-left">
                        <h3>มัสยิดกลางปัตตานี</h3>
                        <p>ที่ตั้ง :</p>
                        <p>ตำบล :</p>
                        <p>อำเภอ :</p>
                        <p>จังหวัด :</p>
                        <p>รหัสไปรษณีย์ :</p>
                    </div>
                </div>
                <div>
                    <Divider type="vertical" 
                        style={{
                            height: "100%"
                        }}
                    />
                </div>
                <div className="right-content">
                    <div className="top-right-content">
                        <img src="http://www.pattani2018.pattani.go.th/image/ratioalpha/?file=files/com_travel/2018-03_8b0639832ae81bf.jpg&width=1020&height=433&defaultImage=images/nopic.jpg" 
                            style={{
                                width: "200px" ,
                                height: "100px"
                            }}
                        />
                        <h3>สกาย วอล์ก</h3>
                    </div>
                    <Divider />
                    <div className="buttom-right-content">
                        <img src="http://www.pattani2018.pattani.go.th/image/ratioalpha/?file=files/com_travel/2018-03_95fae419268eba5.jpg&width=1020&height=433&defaultImage=images/nopic.jpg" 
                            style={{
                                width: "200px" ,
                                height: "100px"
                            }}
                        />
                        <h3>อุทยานแห่งชาติน้ำตกทรายขาว</h3>
                    </div>
                </div>
            </div>
            <div className="see-all">
                <div className="text">
                    <Button>
                        <p>See All</p>
                    </Button>
                </div>
            </div>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;

    .title {
        margin-top: 10px;

        h1 {
            font-family: 'Inknut Antiqua';
            font-size: 40px;
            font-weight: 900;
            color: rgb(30,144,255);
        }
    }

    .content {
        margin: 0;
        display: flex;
        margin-left: 50px;
        margin-right: 50px;

        .left-content {
            display: flex;
            align-items: center;
            width: 700px;

            h3 {
                font-family: 'Mitr';
                font-size: 20px;
                margin-left: 20px;
                cursor: pointer;
            }

            h3:hover {
                color: rgb(30,144,255);
            }

            p {
                font-family: 'Mitr';
                margin-left: 20px;
            }
        }

        .right-content {
            width: 500px;

            .top-right-content {
                display: flex;
                align-items: center;

                h3 {
                    font-family: 'Mitr';
                    font-size: 20px;
                    margin-left: 20px;
                    cursor: pointer;
                }

                h3:hover {
                    color: rgb(30,144,255);
                }
            }

            .buttom-right-content {
                display: flex;
                align-items: center;

                h3 {
                    font-family: 'Mitr';
                    font-size: 20px;
                    margin-left: 20px;
                    cursor: pointer;
                }

                h3:hover {
                    color: rgb(30,144,255);
                }
            }
        }
    }

    .see-all {
        display: flex;
        justify-content: center;
        margin-top: 50px;

        h3 {
            margin: 0;
        }
        
        .text {
            
            display: flex;
            justify-content: center;

            p {
                font-family: 'Inknut Antiqua';
                font-weight: 900;
            }
            
            Button {
                width: 150px;
                border: none;
                background: #ff5f6d; 
                background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371); 
                background: linear-gradient(to right, #ff5f6d, #ffc371);
            }

            Button:hover {
                color: white;
                border: none;
                width: 200px;
                background: #ff5f6d; 
                background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371); 
                background: linear-gradient(to right, #ff5f6d, #ffc371);
            }
        }
    }
`
export default TopTravel