import React, { useState, useEffect } from "react"
import MainLayout from "../Layout/MainLayout"
import "antd/dist/antd.css"
import styled from "styled-components"
import { Input, Select, Button, Divider, Radio, message } from 'antd'
import { firestore } from "../../index"

const ReviewPage = () => {

    const { Option } = Select

    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [satisfaction, setsatisfaction] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    const [review, setReview] = useState()

    useEffect(() => {
        retriveData()
    }, [])

    const retriveData = () => {
        firestore.collection("review").onSnapshot((response) => {
            const result = response.docs.map(d => {
                const { id, email, location, description, satisfaction, imgUrl } = d.data()
                return { id, email, location, description, satisfaction, imgUrl }
            })
            console.log(result)
            setReview(result)
        })
    }

    const createReview = () => {
        const id = (review.length === 0) ? 1 : review[review.length - 1].id + 1
        firestore.collection("review").doc(id + "").set({ id, email, location, description, satisfaction, imgUrl })
        message.success("Review completed")
    }

    const onSelect = (value) => {
        setLocation(value)
    }

    const onSelectFocus = (e) => {
        setsatisfaction(e.target.value)
    }

    const renderReviewPage = () => {
        return (
            <MainLayout>
                <StyledWrapper>
                    <div className="title">
                        <h1>Review</h1>
                    </div>
                    <div className="review-form">
                        <div className="form-content">
                            <div className="input-email">
                                <p>Email :</p>
                                <Input
                                    style={{
                                        width: "400px",
                                        marginLeft: "20px"
                                    }}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-location">
                                <p>location :</p>
                                <Select onChange={onSelect}
                                    allowClear
                                    style={{
                                        width: 250,
                                        marginLeft: "20px"
                                    }}
                                >
                                    <Option
                                        value="Pattani Central Mosque"
                                        key="1"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>มัสยิดกลางปัตตานี</p>
                                    </Option>
                                    <Option
                                        value="Sai Khao"
                                        key="2"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>น้ำตกทรายขาว</p>
                                    </Option>
                                    <Option
                                        value="Krue Sae Mosque"
                                        key="3"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>มัสยิดกรือเซะ</p>
                                    </Option>
                                    <Option
                                        value="Lim Ko Niao Shrine"
                                        key="4"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>ศาลเจ้าแม่ลิ้มกอเหนี่ยว</p>
                                    </Option>
                                    <Option
                                        value="Talo Capo Beach"
                                        key="5"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>หาดตะโละกาโปร์</p>
                                    </Option>
                                    <Option
                                        value="Sky Walk"
                                        key="6"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>Sky Walk</p>
                                    </Option>
                                    <Option
                                        value="Panare Beach"
                                        key="7"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>หาดปะนาเระ</p>
                                    </Option>
                                    <Option
                                        value="Yarang Ancient Town"
                                        key="8"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>เมืองโบราณยะรัง </p>
                                    </Option>
                                    <Option
                                        value="Chang Hai Temple"
                                        key="9"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>วัดช้างให้ (วัดราษฎร์บูรณะ)</p>
                                    </Option>
                                    <Option
                                        value="Kae Kae Beach"
                                        key="10"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>หาดแฆแฆ</p>
                                    </Option>
                                    <Option
                                        value="Somdet Phra Srinagarindra Park"
                                        key="11"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>สวนสมเด็จพระศรีนครินทร์</p>
                                    </Option>
                                    <Option
                                        value="Wasukri Beach"
                                        key="12"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>หาดวาสุกรี</p>
                                    </Option>
                                    <Option
                                        value="Laem Tachie"
                                        key="13"
                                        style={{ fontFamily: "Mitr" }}
                                    >
                                        <p>ปลายสุดแหลมตาชี</p>
                                    </Option>
                                </Select>
                            </div>
                            <div className="input-textarea">
                                <p>Description :</p>
                                <Input.TextArea
                                    style={{
                                        marginLeft: "20px",
                                        width: "500px",
                                        height: "200px"
                                    }}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="input-rate">
                                <p>Satisfaction :</p>
                                <div className="radio-caption">
                                    <Radio.Group onChange={onSelectFocus}>
                                        <Radio.Button
                                            value="like"
                                            style={{
                                                width: "100px",
                                            }}
                                        >
                                            <div className="like-button">
                                                <img src="https://image.flaticon.com/icons/png/128/889/889221.png"
                                                    style={{
                                                        width: "20px",
                                                        height: "15px"
                                                    }}
                                                />
                                                <span>LIKE</span>
                                            </div>
                                        </Radio.Button>
                                        <Radio.Button
                                            value="un-like"
                                            style={{
                                                width: "100px",
                                            }}
                                        >
                                            <div className="like-button">
                                                <img src="https://img.icons8.com/color/2x/thumbs-down.png"
                                                    style={{
                                                        width: "20px",
                                                        height: "15px"
                                                    }}
                                                />
                                                <span>UNLIKE</span>
                                            </div>
                                        </Radio.Button>
                                        <Radio.Button
                                            value="love"
                                            style={{
                                                width: "100px",
                                            }}
                                        >
                                            <div className="like-button">
                                                <img src="https://image.flaticon.com/icons/png/128/2107/2107845.png"
                                                    style={{
                                                        width: "20px",
                                                        height: "15px"
                                                    }}
                                                />
                                                <span>LOVE</span>
                                            </div>
                                        </Radio.Button>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="input-img-url">
                                <p>Image URL :</p>
                                <Input
                                    style={{
                                        width: "400px",
                                        marginLeft: "20px"
                                    }}
                                    onChange={e => setImgUrl(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className="review-button">
                        <div>
                            <Button>
                                <p onClick={createReview}>REVIEW</p>
                            </Button>
                        </div>
                    </div>
                </StyledWrapper>
            </MainLayout>
        )
    }

    return (
        <div>
            {renderReviewPage()}
        </div>
    )
}

const StyledWrapper = styled.div`
    margin: 0;

    .title {
        text-align: center;
        margin-top: 20px;

        h1 {
            font-family: 'Mitr';
            font-size: 40px;
            font-weight: 900;
            color: rgb(30,144,255);
        }
    }

    .review-form {
        display: flex;
        justify-content: center;

        .form-content {

            .input-email {
                display: flex;
                align-items: center;
                margin-top: 30px;

                p {
                    margin: 0;
                    width: 100px;
                    font-family: 'Mitr';
                }
            }

            .input-location {
                display: flex;
                align-items: center;
                margin-top: 30px;

                p {
                    margin: 0;
                    width: 100px;
                    font-family: 'Mitr';
                }
            }

            .input-textarea {
                display: flex;
                margin-top: 30px;

                p {
                    margin: 0;
                    width: 100px;
                    font-family: 'Mitr';
                }
            }

            .input-rate {
                display: flex;
                margin-top: 30px;
                align-items: center;

                p {
                    margin: 6px 0px 0px 0px;
                    width: 100px;
                    font-family: 'Mitr';
                }

                .radio-caption {
                    margin-left: 20px;

                    .like-button {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        span {
                            margin: 0;
                            margin-left: 10px;
                            font-family: 'Mitr';
                            font-weight: 900;
                        }
                    }

                }
            }

            .input-img-url {
                display: flex;
                margin-top: 30px;
                align-items: center;

                p {
                    margin: 6px 0px 0px 0px;
                    width: 100px;
                    font-family: 'Mitr';
                }
            }
        }
    }

    .review-button {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 200px;

        Button {
            border: none;
            width: 200px;
            height: 50px;
            background: #ff5f6d; 
            background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371); 
            background: linear-gradient(to right, #ff5f6d, #ffc371);

            p {
                margin: 0;
                font-family: 'Mitr';
                font-weight: 900;
            }
        }

        Button:hover {
            color: white;
            width: 250px;
        }
    }
`

export default ReviewPage