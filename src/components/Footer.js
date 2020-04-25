import React from "react"
import styled from "styled-components"

const Footer = () => {
    return (
        <StyledWrapper>
            <h1>FOOTER</h1>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 30vh;
    background: #ff5f6d; 
    background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371); 
    background: linear-gradient(to right, #ff5f6d, #ffc371);
`
export default Footer