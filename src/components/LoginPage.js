import React from "react"
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, createFromIconfontCN } from '@ant-design/icons';
import { Link } from "react-router-dom";

const LoginPage = () => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    }

    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    })

    return (
        <StyledWrpper>
            <div className="picture-container">
                <div className="img">
                    <p>Darunsat Witya School</p>
                </div>
            </div>
            <div className="login-container">
                <div className="login">
                    <div className="title">
                        <h2>Log in</h2>
                    </div>
                    <br />
                    <div className="form-login">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <br />
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    <Link to="/home">Log in</Link>
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <br />
                    <br />
                    <div className="login-authen">
                        <p>Or Sign Up Using</p>
                        <IconFont type="icon-facebook" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="sign-up">
                        <p>Sign Up</p>
                    </div>
                </div>
            </div>
        </StyledWrpper>
    )
}

const StyledWrpper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;

    .picture-container {
        height: 100vh;
        width: 60vw;
        background-image: url("https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.0-9/54433005_496103590922930_461535313022418944_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_eui2=AeGt4GAbgamCESljW0d75h2wyDhjUgqJqpTIOGNSComqlIoxqsGLFXsqOTn3VPFS83pEOhMamzuMJCWPKKmHRK9r&_nc_ohc=0ryBRQ6JqHcAX9zy6Rz&_nc_ht=scontent.fhdy2-1.fna&oh=451bd0d9c8b68b0fb9570119bcd2d6e4&oe=5EB41153");
        position: relative;
        background-position: center;
        background-size: cover;
        opacity: 0.8;


        p {
            position: absolute;
            top: 85%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: black;
            text-shadow: 5px 5px 10px black;
            font-size: 50px;
            font-weight: 900;
        }
    }

    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to top, rgb(255,255,255), rgb(139,69,19));
        height: 100vh;
        width: 40vw;

        .login {
            width: 400px;
            height: 600px;
            background: white;
            border: 2px solid white;
            border-radius: 5px;
            text-align: center;
    
            .title {
                padding-top: 30px;
                    
                h2 {
                    font-size: 30px;
                    font-weight: 700;
                }
            }
    
            .form-login {
                margin-left: 60px;
                margin-right: 60px;
    
                .login-form-button {
                    width: 100px;
                    color: white;
                    font-weight: 900;
                    background: rgb(139,69,19);
                    border: none;
                }
            }
    
            .login-authen {
    
            }
    
            .sign-up {
                font-size: 20px;
                cursor: pointer;
            }
        }
    }

`
export default LoginPage