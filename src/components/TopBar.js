import React from "react"
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Button } from 'antd'
import { Link } from "react-router-dom";

const TopBar = () => {

    const handleClick = () => {
        console.log("come to home page")
    }

    const imageURL = "https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.0-9/205140_565708726776825_1043781829_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeFt0y4tDDDRhaBNozivAnSHbLAfZ6W30MBssB9npbfQwIukn5DJFEqjgRbuJL43MASHkV3Y00i75VQxOpahYkIv&_nc_ohc=uux_8hjg20cAX9YsUCV&_nc_ht=scontent.fhdy2-1.fna&oh=151c6cbbe0efa463951386817a67f8d9&oe=5EB525EB"
    return (
        <StyledWrapper>
            <div className="text">
                <Link to="/home" onClick={handleClick}>
                    <img src={imageURL}
                        style={{
                            height: 50,
                            margin: 0,
                            marginLeft: "20px",
                            borderRadius: "50%"
                        }} />
                </Link>

                <p>Students Data Recording System</p>
            </div>
            <div>
                <Button>Log out</Button>
            </div>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(139,69,19);

    button {
        width: 100px;
        font-size: 15px;
        font-weight: 500;
        margin-right: 50px;
    }

    .text {
        display: flex;
        
        p {
            color: white;
            margin: 0;
            font-size: 30px;
            font-weight: 900;
            margin-left: 30px;
        }
    }

`

export default TopBar