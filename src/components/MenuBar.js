import React from "react"
import styled from "styled-components"
import { Divider  , Button , Avatar } from 'antd'
import { UserOutlined , FormOutlined , TableOutlined , FacebookOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom"

const MenuBar = () => {
    return (
        <StyledWrapper>
            <div className="profile">
                <div className="avatar">
                    <Avatar size={80} icon={<UserOutlined />} />
                </div>
                <div className="user-info">
                    <p>ADMIN</p>
                </div>
                <div className="button">
                    <Link to="profile">
                        <Button>
                            <p>PROFILE</p>
                        </Button>
                    </Link>
                </div>
            </div>
            <Divider style={{margin: 0}}/>
            <div className="menu">
                <p>MENU</p>
                <div className="record-information">
                    <Link to="/record">
                        <div className="record-wrapper">
                            <FormOutlined />
                            <span>Record</span>
                        </div>
                    </Link>
                </div>
                <div className="table-information">
                    <Link to="table">
                        <div className="table-wrapper">
                            <TableOutlined />
                            <span>Table</span>
                        </div>
                    </Link>
                </div>
                <div className="show-information">
                     <Link to="show">
                        <div className="show-wrapper">
                            <UserOutlined />
                            <span>Show</span>
                        </div>
                     </Link>
                </div>
            </div>
            <Divider style={{margin: 0}}/>
            <div className="contact">
                <p>CONTACT</p>
                <div className="facebook-contact">
                    <a href="https://web.facebook.com/396315647049468/posts/httpwwwdarunsatacth/943119175702443/?_rdc=1&_rdr" target="_blank">
                        <div className="facebook-wrapper">
                            <FacebookOutlined />
                            <span>Facebook</span>
                        </div>
                    </a>
                </div>
            </div>
        </StyledWrapper>
    )
}

const StyledWrapper =  styled.div`
    margin: 0;
    height: 100%;

    .profile {
        height: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .avatar {
            padding-top: 15px;
        }

        .user-info {
            font-weight: 900;
        }

        .button {
            padding-bottom: 15px;

            p {
                font-weight: 900;
            }
        }

    }

    .menu {
        padding-top: 10px;

        p {
            font-weight: 900;
            margin-left: 20px;
        }

        .record-information {
            .record-wrapper {
                display: flex;
                align-items: center;
                height: 5vh;
                color: black;
                padding-left: 20px;

                span {
                    padding-left: 10px;
                    font-weight: 500;
                }

                :hover {
                    color: rgb(139,69,19);
                }
            }
        }

        .table-information {
            .table-wrapper {
                display: flex;
                align-items: center;
                height: 5vh;
                color: black;
                padding-left: 20px;

                span {
                    padding-left: 10px;
                    font-weight: 500;
                }

                :hover {
                    color: rgb(139,69,19);
                }
            }
        }

        .show-information {
            .show-wrapper {
                display: flex;
                align-items: center;
                height: 5vh;
                color: black;
                padding-left: 20px;

                span {
                    padding-left: 10px;
                    font-weight: 500;
                }

                :hover {
                    color: rgb(139,69,19);
                }
            }
        }
    }

    .contact {
        padding-top: 10px;

        p {
            font-weight: 900;
            margin-left: 20px;
        }

        .facebook-contact {
            .facebook-wrapper {
                display: flex;
                align-items: center;
                height: 5vh;
                color: black;
                padding-left: 20px;

                span {
                    padding-left: 10px;
                    font-weight: 500;
                }

                :hover {
                    color: rgb(139,69,19);
                }
            }
        }
    }
`
export default MenuBar