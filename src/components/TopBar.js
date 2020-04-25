import React from "react"
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Button, Popover , Divider} from 'antd'
import { Link } from "react-router-dom";
import { Firebaes } from "../index"

const TopBar = () => {

    const handleClick = () => {
        console.log("come to home page")
    }

    const Logout = () => {
        Firebaes.signOut()
    }

    const hancleClickUserAcc = (
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

    return (
        <StyledWrapper>
            <div className="text">
                <p onClick={handleClick}>PaiHaiSud</p>
            </div>
            <div className="user-account">
                <Popover content={hancleClickUserAcc} trigger="click">
                    <p>sorin@gmail.com</p>
                </Popover>
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
    background: rgb(255,69,0);

    .user-account {
        text-align: center;
        width: 20vw;

        Popover {
            width: 20vw;
        }
        
        p {
            color: white;
            margin: 0px;
            font-size: 20px;
            font-weight: 900;
            cursor: pointer;
        }
    }

    .text {
        display: flex;
        align-items: center;
        
        p {
            color: white;
            margin: 0;
            font-family: 'Charm';
            font-size: 40px;
            font-weight: 900;
            padding-left: 80px;
            cursor: pointer;
        }
    }
`

const PopoverStyled = styled.div`
    .popover-list {
        
        .account {
            width: 10vw;
            text-align: center;

            p {
                font-size: 15px;
                font-weight: 500;
                color: rgb(139,69,19);
            }

            p:hover {
                color: rgb(139,69,19);
                font-size: 18px;
                font-weight: 700;
                text-shadow:5px 5px 10px rgb(139,69,19);
            }
        }

        .logout {
            width: 10vw;
            text-align: center;
            
            p {
                font-size: 15px;
                font-weight: 500;
                color: rgb(139,69,19);
                cursor: pointer;
            }

            p:hover {
                color: rgb(139,69,19);
                font-size: 18px;
                font-weight: 700;
                text-shadow:5px 5px 10px rgb(139,69,19);
            }
        }
    }
`
export default TopBar