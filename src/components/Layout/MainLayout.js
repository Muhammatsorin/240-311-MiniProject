import React from "react"
import styled from 'styled-components'
import Topbar from '../TopBar'
import MenuBar from "../MenuBar"
import Footer from "../Footer"

const MainLayout = (props) => {
    return (
        <StyledWrapper>
            <div className="top-bar">
                <Topbar />
            </div>
            <div className="content">
                <MenuBar />
                {props.children}
            </div>
            <Footer />
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 100vh;

    .content {
        margin-left: 100px;
        margin-right: 100px;
    }
`

export default MainLayout ;