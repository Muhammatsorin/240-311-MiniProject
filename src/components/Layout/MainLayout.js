import React from "react"
import styled from 'styled-components'
import Topbar from '../TopBar'
import MenuBar from "../MenuBar"
import Footer from "../Footer"
import "antd/dist/antd.css"
import {Divider} from "antd"

const MainLayout = (props) => {
    return (
        <StyledWrapper>
            <div className="top-bar">
                <Topbar />
            </div>
            <div className="content">
                <MenuBar />
                <Divider
                        style={{
                            height: "5px",
                            margin: 0
                        }}
                    />
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