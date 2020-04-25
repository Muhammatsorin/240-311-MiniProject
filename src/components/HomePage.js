import React from 'react'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import Topbar from "./TopBar"
import Footer from "./Footer"
import { Carousel , Divider } from 'antd'
import Menubar from './MenuBar'

const HomePage = () => {
    return (
        <StyledWrapper>
            <Topbar />
            <div className="main-content">
                <Menubar />
                <Divider 
                    style={{
                        height: "2px",
                        margin: 0,
                    }}
                />
                <div className="main-title">
                    <div className="main-title-img">
                        <img src="http://www.paaktai.com/admin/../files/com_longtai/2019-07_35f7b3326cd2420.JPG" 
                            style={{
                                width:"100%" , 
                                position: "relative"
                            }} 
                        />
                    </div>
                    <div className="main-title-content">
                        <h3>PATTANI</h3>
                        <p>has more beautiful things than you think</p>
                    </div>
                </div>
                <div className="main-menu">
                    MENUBAR
                </div>
                <div className="carousel">
                    <Carousel>
                        <div className="sea-content">
                            <img src="https://www.sixaugust.com/wp-content/uploads/2019/07/Sixaugust-1024x681.jpg" />
                            <h3>1</h3>
                        </div>
                        <div className="forest-content">
                            <h3>2</h3>
                        </div>
                        <div className="archaeological site-content">
                            <h3>3</h3>
                        </div>
                    </Carousel>
                </div>
            </div>
            <Footer />
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 100%;

    .main-content {
        margin-left: 100px;
        margin-right: 100px;

        .main-title {
            padding-top: 30px;
            height: 100vh;

            .main-title-content {
                h3 {
                    position: absolute;
                    top: 45%;
                    left: 30%;
                    transform: translate(-50%, -50%);
                    font-family: 'Girassol';
                    font-size: 150px;
                    font-weight: 900;
                }

                p {
                    position: absolute;
                    top: 57%;
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
            
            .ant-carousel .slick-slide {
                text-align: center;
                height: 80vh;
                line-height: 160px;
                background: red;
                overflow: hidden;
            }
              
            .ant-carousel .slick-slide h3 {
                color: #fff;
            }
        }
    }
`

export default HomePage