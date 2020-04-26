import React from "react"
import { useState, useEffect } from "react"
import 'antd/dist/antd.css'
import styled from "styled-components"
import ReactModal from "react-modal"
import { Input, Button, Divider, Form, Checkbox , message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Firebaes } from "../components/Firebase/FirebaseAuth"

const Register_Modal = () => {

    const [form] = Form.useForm()

    const [modalisOpen, setModalisOpen] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")

    const onChecked = () => {
        if (password !== conPassword) {
            message.error("password and password does not match !!")
        }
        else {
            if (email && password && conPassword != " ") {
                onSubmit()
            }
            else {
                console.log("Incomplete information !!")
            }
        }
    }

    const onSubmit = () => {
        Firebaes.createUserWithEmailAndPassword(email , password).then( (response) => {
            console.log(response)
            message.success("Submit Successful")
        }).catch((err) => {
            console.log(err)
            message.error("Submit Unsuccessful")
        })
    }

    const onReset = () => {
        form.resetFields()
      }
    

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
                    <div className="modal-content">
                        <div className="register-form">
                            <Form
                                name="modal-form"
                                className="modal-login-form"
                                initialValues={{ remember: true }}
                            >
                                <p>Email</p>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email !' }]}
                                >
                                    <Input
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                        placeholder="Email"
                                        onChange={ e => setEmail(e.target.value)}
                                    />
                                </Form.Item>
                                <p>Password</p>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password !' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                        onChange={ e => setPassword(e.target.value) }
                                    />
                                </Form.Item>
                                <p>Confirm Password</p>
                                <Form.Item
                                    name="conPassword"
                                    rules={[{ required: true, message: 'Please input your Confirm Password !' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={ e => setConPassword(e.target.value)}
                                    />
                                </Form.Item>
                                <Divider />
                                <div className="button-submit-cancel-wrapper">
                                    <Form.Item>
                                        <div className="button-submit">
                                            <Button type="primary" htmlType="submit" className="register-form-button">
                                                <p onClick={onChecked}>Submit</p>
                                            </Button>
                                        </div>
                                    </Form.Item>
                                    <Form.Item>
                                        <div className="button-cancel">
                                            <Button type="primary" htmlType="button" onClick={onReset}>
                                                <p>Cancel</p>
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
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

    .modal-content {
        padding: 20px 30px 0px 30px;

        .register-form {
            
            p {
                margin-bottom: 10px;
                font-family: 'Fredoka One';
            }

            .modal-login-form {
                .button-submit-cancel-wrapper {
                    display: flex;
                    justify-content: center;
                }

                .button-submit-cancel-wrapper {
                    padding-top: 30px;

                    Button {
                        color: white;
                        background: rgb(255,69,0);
                        border: none;
                    }

                    .button-submit {
                        padding-right: 30px;
                    }

                    .button-cancel {
                        padding-left: 30px;
                    }
                }
            }
        }
    }
`
export default Register_Modal