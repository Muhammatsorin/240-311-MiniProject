import React from 'react'
import 'antd/dist/antd.css'
import { Button } from "antd"
import styled from 'styled-components'

const HomePage = () => {
    return (
        <StyledWrpper>
            <div className="container">
                <section>
                    <h1>Content</h1>
                </section>
                <footer>
                    <h1>Footer</h1>
                </footer>
            </div>
        </StyledWrpper>
    )
}

const StyledWrpper = styled.div`

    height: 100vh;
    width: 100vw;

    section {
        height: 100vh;
        margin-left: 200px;
        margin-right: 200px;
        background: white;
    }

    footer {
        margin-left: 200px;
        margin-right: 200px;
        height: 15vh;
        background: red;
    }
    
`

export default HomePage