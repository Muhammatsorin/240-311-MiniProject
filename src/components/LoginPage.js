import React from "react"
import 'antd/dist/antd.css'
import styled from 'styled-components'
import SignIn_Modal from "./SignIn_Modal";
import Register_Modal from "./Register_Modal";

const LoginPage = () => {

    const imgUrl = "https://f.ptcdn.info/443/057/000/p8ar497m3SgajakY33y-o.jpg"

    return (
        <StyledWrpper>
            <div className="img-url">
                <img src={imgUrl} />
            </div>
            <div className="content">
                <div className="pattani-my-home-town">
                    <h1 className="h1-pattani">PATTANI</h1>
                    <h1 className="h1-my-home-town">MY HOME TOWN</h1>
                </div>
                <p className="under-line">
                    __________________________________________________
                </p>
                <div className="button-link-home">
                    <SignIn_Modal />
                    <p className="between">|</p>
                    <Register_Modal />
                </div>
            </div>
        </StyledWrpper>
    )
}

const StyledWrpper = styled.div`
    height: 100%;
    width: 100%;

    .img-url {
        img {
            width: 100vw;
            height: 100vh;
            position: relative;
        }
    }
    
    .content {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        
        .pattani-my-home-town {
            text-align: center;
            
            .h1-pattani {
                font-family: 'Girassol';
                font-size: 150px;
                font-weight: 900;
                color: black;
                margin: 0;
            }

            .h1-my-home-town {
                font-family: 'Girassol';
                font-size: 100px;
                font-weight: 900;
                color: black;
                margin: 0;
            }
        }

        .under-line {
            font-size: 30px;
            font-weight: 900;
        }

        .button-link-home {
            display: flex;
            justify-content: center;
            margin: 0;
            padding-top: 50px;
            font-family: 'Fredoka One';
            font-size: 30px;
            font-weight: 900;
            
            .between {
                color: black;
            }
        }
    }
`
export default LoginPage