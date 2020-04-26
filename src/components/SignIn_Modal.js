import React, { useState } from "react"
import 'antd/dist/antd.css'
import styled from "styled-components"
import ReactModal from "react-modal"
import { Form, Input, Button, Checkbox, Divider , message } from 'antd';
import { LockOutlined , MailOutlined } from '@ant-design/icons';
import { Firebaes } from "../components/Firebase/FirebaseAuth"

const SignIn_Modal = () => {

    const [modalisOpen, setModalisOpen] = useState(false)

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const onLogin = () => {
        Firebaes.signInWithEmailAndPassword(email , password).then( (response) => {
            console.log(response)
            
        }).catch( (err) => {
            console.log(err)
            message.error("Login Faild !! Please check your information again")
        })
    }

    ReactModal.setAppElement("#root")

    return (
        <StyledWrapper>
            <div className="p-sign-in">
                <p onClick={() => setModalisOpen(true)}>Sign in</p>
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
                        top: '100px',
                        left: '500px',
                        right: '500px',
                        bottom: '100px',
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
                        <h1>Log in</h1>
                    </div>
                    <div className="modal-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Email' }]}
                            >
                                <Input 
                                    prefix={<MailOutlined className="site-form-item-icon" />} 
                                    placeholder="Email"
                                    onChange={ e => setEmail(e.target.value) } 
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    onChange={ e => setPassword(e.target.value) }
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    <p onClick={onLogin}>Log in</p>
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Divider />
                    <div className="signin-with-facebook">
                        <p>Sign in with</p>
                    </div>
                </ModalStyled>
            </ReactModal>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;

    .p-sign-in {
        padding-right: 60px;
        cursor: pointer;
        color: black;
    }

    .p-sign-in:hover {
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

    .modal-content {
        text-align: center;
        padding: 20px 60px 0px 60px;

        .ant-row ant-form-item {
            text-align: center;
        }

        .login-form-forgot {
            padding-left: 30px;
        }

        .login-form-button {
            background: rgb(255,69,0);
            border: none;
            width: 100px;

            p {
                font-family: 'Fredoka One';
            }
        }
    }

    .signin-with-facebook {
        padding-top: 10px;
        text-align: center;
        
        p {
            font-family: 'Fredoka One';
        }
    }

`
export default SignIn_Modal