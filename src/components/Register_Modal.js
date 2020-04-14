import React from "react"
import { useState } from "react"
import 'antd/dist/antd.css'
import styled from "styled-components"
import ReactModal from "react-modal"

const Register_Modal = () => {

    const [modalisOpen, setModalisOpen] = useState(false)

    ReactModal.setAppElement("#root")

    return (
        <StyledWrapper>
            <div className="p-register">
                <p onClick={() => setModalisOpen(true)}>Register</p>
            </div>
            <ReactModal
                isOpen={modalisOpen}
                onRequestClose={() => setModalisOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)'
                    },
                    content: {
                        position: 'absolute',
                        top: '50px',
                        left: '500px',
                        right: '500px',
                        bottom: '50px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '50px'
                    }
                }}
            >
                <ModalStyled>
                    <div className="modal-title">
                        <h1>Register</h1>
                    </div>
                </ModalStyled>
            </ReactModal>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;

    .p-register {
        padding-left: 60px;
        cursor: pointer;
        color: black;
    }

    .p-register:hover {
        color: white;
    }
`

const ModalStyled = styled.div`

    .modal-title {
        text-align: center;

        h1 {
            color: rgb(255,69,0);
            font-family: 'Fredoka One';
            font-size: 30px;
        }
    }
    
`
export default Register_Modal