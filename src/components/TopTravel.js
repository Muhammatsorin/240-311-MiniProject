import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { firestore } from "../index"
import 'antd/dist/antd.css'
import { Divider, Button } from 'antd'
import { Link } from "react-router-dom"

const TopTravel = () => {

    const [location, setLocation] = useState()

    useEffect(() => {
        retriveData()
    }, [])

    const retriveData = () => {
        firestore.collection("location").onSnapshot((response) => {
            const result = response.docs.map(d => {
                const { id, name, subDistric, distric, province, postalCode } = d.data()
                return { id, name, subDistric, distric, province, postalCode }
            })
            setLocation(result)
        })
    }

    const renderData = () => {
        console.log(location)
        if (location) {
            return (
                <StyledWrapper>
                    <div className="title">
                        <h1>Top Travel</h1>
                    </div>
                    <div className="content">
                        <div className="left-content">
                            <img src="http://pattaniheritagecity.psu.ac.th/wp-content/uploads/2019/01/DSC_2381.jpg" title="Thank for the picture from pattaniheritagecity.psu.ac.th"
                                style={{
                                    width: "400px",
                                    height: "300px"
                                }}
                            />
                            <div className="text-left">
                                <Link to="/pattani_central_mosque">
                                    <h3>มัสยิดกลางปัตตานี</h3>
                                </Link>
                                <div className="location-content">
                                    <p>ตำแหน่งที่ตั้ง</p>
                                    <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            marginTop: "10px",
                                            marginLeft: "10px"
                                        }}
                                    />
                                </div>
                                <p>ตำบล : {location[0].subDistric}</p>
                                <p>อำเภอ : {location[0].distric}</p>
                                <p>จังหวัด : {location[0].province}</p>
                                <p>รหัสไปรษณีย์ : {location[0].postalCode}</p>
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
                                <img src="http://img.painaidii.com/images/20180530_37799_1527654836_916588.jpg"
                                    style={{
                                        width: "200px",
                                    }}
                                />
                                <div>
                                    <Link to="/sky_walk">
                                        <h3>สกาย วอล์ก</h3>
                                    </Link>
                                    <p>Pattani Adventure Park ( ทางเดินชมธรรมชาติ )</p>
                                </div>
                            </div>
                            <Divider />
                            <div className="buttom-right-content">
                                <img src="https://lh4.googleusercontent.com/proxy/KXFrTo_YMnDlC8TUuPfC9bnT1_OVnYCsmnUhxNoaaMUTU4ceKm3RmKiJXny0dLlRCY0pUEyDBS_Y_pQOv2Y5kwBSKOKhv8fmWi8rqp9kEg7oC2MKXQ=s0-d"
                                    style={{
                                        width: "200px",
                                    }}
                                />
                                <div>
                                    <Link to="/sai_khao">
                                        <h3>อุทยานแห่งชาติน้ำตกทรายขาว</h3>
                                    </Link>
                                    <p>ป่าต้นน้ำของ 3 จังหวัดชายแดนภาคใต้</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="see-all">
                        <div className="text">
                            <Link to="/travel-all">
                                <Button>
                                    <p>See All</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </StyledWrapper>
            )
        }
    }

    return (
        <div>
            {renderData()}
        </div>
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
                margin: 10px 0px 0px 20px;
            }

            .location-content {
                display: flex;
                align-items: center;
            }
        }

        .right-content {
            width: 600px;

            .top-right-content {
                display: flex;
                align-items: center;
                margin-left: 20px;

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

            .buttom-right-content {
                display: flex;
                align-items: center;
                margin-left: 20px;

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