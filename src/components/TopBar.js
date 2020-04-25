import React from "react"
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Button, Popover , Divider} from 'antd'
import { Link } from "react-router-dom";
import { Firebaes } from "../index"

const TopBar = () => {
    return (
        <StyledWrapper>
            <p>Try changing the atmosphere to see the outside world. New things are waiting for us</p>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 10vh;
    background: #ff5f6d; 
    background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371); 
    background: linear-gradient(to right, #ff5f6d, #ffc371);
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        font-family: 'Nova Round';
        font-size: 25px;
        font-weight: 900;
        color: black;
    }
`
export default TopBar