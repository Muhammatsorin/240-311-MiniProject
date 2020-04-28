import React from "react"
import styled from "styled-components"
import { Popover, Divider } from 'antd'
import { Link } from "react-router-dom"
import { Firebaes } from "../components/Firebase/FirebaseAuth"
import { useEffect, useState } from 'react'

const MenuBar = () => {

    const [user, setUser] = useState("")

    const handleClick = () => {
        console.log("come to home page")
    }

    const Logout = () => {
        Firebaes.signOut()
    }

    const getUser = () => {
        Firebaes.onAuthStateChanged(response => {
            console.log(response.email)
            setUser(response.email)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    const hancleUserAcc = (
        <PopoverStyled>
            <div className="popover-list">
                <div className="account">
                    <Link to="/account">
                        <p>Account</p>
                    </Link>
                </div>
                <div className="logout">
                    <Link to="/">
                        <p onClick={Logout}>Log out</p>
                    </Link>
                </div>
            </div>
        </PopoverStyled>
    )

    const handleReview = (
        <PopoverStyled>
            <div className="review-popover-list">
                <div className="user-review">
                    <Link to="/review">
                        <p>Review</p>
                    </Link>
                </div>
                <div className="review-all">
                    <Link to="/review-all">
                        <p>All Review</p>
                    </Link>
                </div>
            </div>
        </PopoverStyled>
    )

    return (
        <StyledWrapper>
            <div className="text">
                <Link to="/">
                    <p onClick={handleClick}>PaiHaiSud</p>
                </Link>
            </div>
            <div className="menu-content">
                <div className="menu-list">
                    <div>
                        <Link to="travel-all">
                            <p>Travels</p>
                        </Link>
                    </div>
                    <div>
                        <Popover placement="bottom" content={handleReview}>
                            <p>Review</p>
                        </Popover>
                    </div>
                </div>
                <Divider type="vertical"
                    style={{
                        height: "100%",
                        width: "2px"
                    }} />
                <div className="user-account">
                    <Popover placement="bottom" content={hancleUserAcc} trigger="click">
                        <p>{user}</p>
                    </Popover>
                </div>
            </div>

        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(255,255,255);
    margin: 25px 0px 25px 0px;

    .text {
        display: flex;
        align-items: center;
        
        p {
            color: black;
            margin: 0;
            font-family: 'Charm';
            font-size: 50px;
            font-weight: 900;
            cursor: pointer;
        }
    }

    .menu-content {
        display: flex;
        align-items: center;
        height: 10vh;

        .menu-list {
            display: flex;
            justify-content: space-between;
            width: 200px;
            margin-right: 40px;

            p {
                font-family: 'Inknut Antiqua';
                font-size: 20px;
                font-weight: 900;
                margin: 0;
                cursor: pointer;
                color: rgb(255,69,0)
            }

            p:hover {
                color: rgb(128,128,128);
            }
        }

        .user-account {
            text-align: right;
            margin-left: 20px;
            
            p {
                color: rgb(128,128,128);
                margin: 0px;
                font-size: 20px;
                font-weight: 900;
                cursor: pointer;
            }
        }
    }
`

const PopoverStyled = styled.div`
    .popover-list {
        
        .account {
            width: 10vw;
            text-align: center;

            p {
                font-family: 'Inknut Antiqua';
                font-size: 15px;
                font-weight: 500;
                color: rgb(0,191,255)
            }

            p:hover {
                color: rgb(255,69,0);
                font-size: 18px;
                font-weight: 700;
                background: #EBFEFF;
            }
        }

        .logout {
            width: 10vw;
            text-align: center;
            
            p {
                font-family: 'Inknut Antiqua';
                font-size: 15px;
                font-weight: 500;
                color: rgb(0,191,255)
            }

            p:hover {
                color: rgb(255,69,0);
                font-size: 18px;
                font-weight: 700;
                background: #EBFEFF;
            }
        }
    }

    .review-popover-list {

        .user-review {
            width: 10vw;
            text-align: center;

            p {
                font-family: 'Inknut Antiqua';
                font-size: 15px;
                font-weight: 500;
                color: rgb(0,191,255)
            }

            p:hover {
                color: rgb(255,69,0);
                font-size: 18px;
                font-weight: 700;
                background: #EBFEFF;
            }
        }

        .review-all {
            width: 10vw;
            text-align: center;

            p {
                font-family: 'Inknut Antiqua';
                font-size: 15px;
                font-weight: 500;
                color: rgb(0,191,255)
            }

            p:hover {
                color: rgb(255,69,0);
                font-size: 18px;
                font-weight: 700;
                background: #EBFEFF;
            }
        }
    }

`
export default MenuBar