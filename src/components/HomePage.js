import React from 'react'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Carousel, Divider } from 'antd'
import MainLayout from './Layout/MainLayout'
import Toptravel from "./TopTravel"

const HomePage = () => {
    return (
        <MainLayout>
            <StyledWrapper>
                <div className="main-content">
                    <Divider
                        style={{
                            height: "5px",
                            margin: 0
                        }}
                    />
                    <div className="main-title">
                        <div className="main-title-img">
                            <img src="http://www.paaktai.com/admin/../files/com_longtai/2019-07_35f7b3326cd2420.JPG" title="Thank you for the picture from ล่องใต้ชายแดน"
                                style={{
                                    width: "100%",
                                    position: "relative"
                                }}
                            />
                        </div>
                        <div className="main-title-content">
                            <h3>PATTANI</h3>
                            <p>has more beautiful things than you think</p>
                        </div>
                    </div>
                    <Divider
                        style={{
                            marginTop: "70px"
                        }}
                    />
                    <div className="carousel">
                        <div className="carousel-title">
                            <h1>Interesting Things</h1>
                        </div>
                        <div className="carousel-content">
                            <Carousel autoplay>
                                <div className="items">
                                    <img src="https://www.sixaugust.com/wp-content/uploads/2019/07/Sixaugust-1024x681.jpg"
                                        style={{
                                            width: "100%",
                                        }}
                                    />
                                    <div className="text-caption">
                                        <h3>There are beautiful beaches suitable for relaxation</h3>
                                    </div>
                                </div>
                                <div className="items">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/OAT_6396.jpg"
                                        style={{
                                            width: "100%"
                                        }}
                                    />
                                    <div className="text-caption">
                                        <h3>There are many historic sites to see</h3>
                                    </div>
                                </div>
                                <div className="items">
                                    <img src="https://2.bp.blogspot.com/-76WobO48_bw/WIbK4Bz9TZI/AAAAAAAADJo/cpk79rE_cCkWIvEDkVbYnQNYgbcxCYmjwCEw/s1600/intertidal-mangrove-forest.jpg"
                                        style={{
                                            width: "100%"
                                        }}
                                    />
                                    <div className="text-caption">
                                        <h3>There are abundant forests</h3>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <Divider />
                    <div className="travel-inspiration">
                        <h1>Travel inspiration</h1>
                        <div className="travel-inspiration-logo">
                            <div className="logo-caption">
                                <img src="https://image.flaticon.com/icons/png/128/2822/premium/2822323.png"
                                    style={{
                                        width: "100px",
                                    }}
                                />
                                <p>Adventure</p>
                            </div>
                            <div className="logo-caption">
                                <img src="https://image.flaticon.com/icons/png/128/437/437491.png"
                                    style={{
                                        width: "100px",
                                    }}
                                />
                                <p>Family</p>
                            </div>
                            <div className="logo-caption">
                                <img src="https://image.flaticon.com/icons/png/128/1530/1530831.png"
                                    style={{
                                        width: "100px",
                                    }}
                                />
                                <p>Romance</p>
                            </div>
                            <div className="logo-caption">
                                <img src="https://image.flaticon.com/icons/png/128/366/366943.png"
                                    style={{
                                        width: "100px",
                                    }}
                                />
                                <p>Beachs</p>
                            </div>
                            <div className="logo-caption">
                                <img src="https://image.flaticon.com/icons/png/128/2314/premium/2314694.png"
                                    style={{
                                        width: "100px",
                                    }}
                                />
                                <p>History</p>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <Toptravel />
                    <Divider />
                </div>
            </StyledWrapper>
        </MainLayout>

    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 100%;

    .main-content {

        .main-title {
            padding-top: 50px;
            height: 100vh;

            .main-title-content {
                h3 {
                    position: absolute;
                    top: 52%;
                    left: 30%;
                    transform: translate(-50%, -50%);
                    font-family: 'Girassol';
                    font-size: 150px;
                    font-weight: 900;
                }

                p {
                    position: absolute;
                    top: 65%;
                    left: 30%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-family: 'Inknut Antiqua';
                    font-size: 25px;
                    font-weight: 900;
                    color: black;
                }
            }
        }
        
        .carousel {
            margin-top: 10px;

            .ant-carousel {
                width: 1000px;
            }
            
            .ant-carousel .slick-slide {
                text-align: center;
                height: 600px;
                background: red;
                overflow: hidden;
            }

            .carousel-title {
                h1 {
                    font-family: 'Inknut Antiqua';
                    font-size: 40px;
                    font-weight: 900;
                    color: rgb(30,144,255);
                }
            }

            .carousel-content {
                display: flex;
                justify-content: center;

                .items {
                    position: relative;

                    .text-caption {
                        position: absolute;
                        z-index: 1;
                        top: 5%;
                        left: 0%;
                        background: white;
                        opacity: 0.8;
                        width: 500px;
                        height: 50px;
                        display: flex;
                        justify-content: center;

                        h3 {
                            margin: 0;
                            font-family: 'Inknut Antiqua';
                            font-weight: 900;
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }
        }

        .travel-inspiration {
            margin-top: 10px;

            h1 {
                font-family: 'Inknut Antiqua';
                font-size: 40px;
                font-weight: 900;
                color: rgb(30,144,255);
            }

            .travel-inspiration-logo {
                display: flex;
                justify-content: space-between;
                margin: 10px 200px 0px 200px;
                
                .logo-caption {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    cursor: pointer;

                    p {
                        margin: 10px 0px 0px 0px;
                        font-family: 'Inknut Antiqua';
                        font-weight: 900;
                    }
                }

                .logo-caption:hover {
                    
                    p {
                        color: rgb(0,191,255)
                   }
                } 
            }
        }
    }
`

export default HomePage