import React from 'react'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import Topbar from "./TopBar"
import Footer from "./Footer"

const HomePage = () => {
    return (
        <StyledWrapper>
            <Topbar />
            <Footer />
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 100%;
`

export default HomePage