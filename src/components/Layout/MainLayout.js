import React from "react"
import styled from 'styled-components'
import Topbar from '../TopBar'
import MenuBar from "../MenuBar"

const MainLayout = (props) => {
    return (
        <StyledWrapper>
            <Topbar />
            <div className="section-container">
                <div className="menu-bar">
                    <MenuBar />
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 100vh;

    .section-container {
        display: flex;

        .menu-bar {
            position: fixed;
            top: 10vh;
            height: 100%;
            width: 15vw;
        }

        .content {
            position: fixed;
            left: 15vw;
            height: 100%;
            width: 100%;
            overflow-y: auto;
            background: rgb(245,245,245);
        }


    }


`

export default MainLayout ;