import React from "react"
import styled from "styled-components"
import MainLayout from "../Layout/MainLayout"

const Lim_Ko_Niao = () => {

    const renderLim_Ko_Niao = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h3>ศาลเจ้าแม่ลิ้มกอเหนี่ยว</h3>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderLim_Ko_Niao()}
        </div>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
`

export default Lim_Ko_Niao