import React from "react"
import styled from "styled-components"
import 'antd/dist/antd.css'
import { Divider } from 'antd'

const Footer = () => {
    return (
        <StyledWrapper>
            <div className="footer-content">
                <div className="top-content">
                    <div className="left-content">
                        <img src="https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.0-9/s960x960/79372403_2398050467125941_8214264320993787904_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeGp6NxQgTRhpDItjwFdp6NHtiDYmRHDTXO2INiZEcNNc9ZzgMcubWoWNJGHxfuk6j4a9hCwDHuX8eDSUPO0wU5z&_nc_ohc=ilcQY95fmnYAX8fon9s&_nc_ht=scontent.fhdy2-1.fna&_nc_tp=7&oh=5ae204a3e9772558949a4bdd82581b88&oe=5ECBB0A6"
                            style={{
                                width: "180px",
                                borderRadius: "50%"
                            }}
                        />
                    </div>
                    <div className="right-content">
                        <p>CREATE BY :</p>
                        <p>Muhammatsorin  Hawae  5935512045</p>
                        <p>Computer Engineering PSU Phuket</p>
                        <p>CONTACT :</p>
                        <div className="contact-logo">
                            <a href="https://web.facebook.com/sorin.hawae" target="_blank">
                                <img src="https://image.flaticon.com/icons/png/128/1384/1384053.png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "10px",
                                        cursor: "pointer"
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <Divider
                    style={{
                        margin: "20px 0px 0px 0px"
                    }}
                />
                <div className="buttom-content">
                    <div className="buttom-content-left">
                        <a href="https://www.phuket.psu.ac.th/" target="_blank">
                            <img src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/05/Logo-PSU-EH-01-1024x724.png"
                                style={{
                                    width: "150px",
                                    cursor: "pointer"
                                }}
                            />
                        </a>

                    </div>
                    <div className="buttom-content-right">
                        <a href="https://www.computing.psu.ac.th/th/" target="_blank">
                            <img src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU_CoC_ENG.png"
                                style={{
                                    width: "150px",
                                    cursor: "pointer"
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>

        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 50vh;
    background: #ff5f6d; 
    background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371); 
    background: linear-gradient(to right, #ff5f6d, #ffc371);
    display: flex;
    align-items: center;
    justify-content: center;

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 550px;

        .top-content {
            margin-top: 20px;
            width: 500px;
            display: flex;
            justify-content: space-between;
            
            .left-content {

            }

            .right-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: 'Inknut Antiqua';
                font-weight: 900;
            }
        }

        .buttom-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 400px;
        }

        
    }


`
export default Footer