import React, { useState, useEffect } from "react"
import MainLayout from "../Layout/MainLayout"
import styled from "styled-components"
import "antd/dist/antd.css"
import { Divider , Button } from "antd"
import { firestore } from "../../index"

const Review_All = () => {

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

    const deleteReview = (id) => {
        firestore.collection("review").doc(id + "").delete()
      }

    const renderReview_All = () => {
        if (review) {
            return (
                review.map((review , index) => {
                    return (
                        <StyledWrapper key={index}>
                            <div className="main-content">
                                <div className="content">
                                    <img src={review.imgUrl}
                                        style={{
                                            width: "300px"
                                        }}
                                    />
                                </div>
                                <div className="divider">
                                    <Divider type="vertical"
                                        style={{
                                            height: "30vh",
                                        }}
                                    />
                                </div>
                                <div className="description">
                                    <p>Email : {review.email}</p>
                                    <p>Location : {review.location} </p>
                                    <p>Description : {review.description}</p>
                                    <p>Feeling : {review.satisfaction}</p>
                                </div>
                                <div className="button">
                                    <Button>
                                        <p onClick={ () => deleteReview(review.id)}>Delete</p>
                                    </Button>
                                </div>
                            </div>
                            <Divider />
                        </StyledWrapper>
                    )
                })
            )
        }
    }

    return (
        <MainLayout>
            <StyledWrapper>
                <div className="content-wrapper">
                    <div className="title">
                        <h1>Review List</h1>
                    </div>
                </div>
            </StyledWrapper>
            {renderReview_All()}
        </MainLayout>
    )
}

const StyledWrapper = styled.div`
    margin: 0;

        .title {
            margin-top: 20px;
            margin-bottom: 50px;
            text-align: center;
    
            h1 {
                font-family: 'Mitr';
                font-size: 40px;
                font-weight: 900;
                color: rgb(30,144,255);
            }
        }
    
        .main-content {
            margin-left: 100px;
            margin-right: 100px;
            margin-top: 20px;
            display: flex;
            align-items: center;
    
            .content {
                margin-right: 50px;
            }
    
            .description {
                margin-left: 50px;
                width: 500px;
    
                p {
                    font-family: 'Mitr';
                    font-weight: 900;
                }
            }

            .button {

                Button {
                    background: #ff5f6d; 
                    background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371); 
                    background: linear-gradient(to right, #ff5f6d, #ffc371);
                    width: 100px;
                }
                
                p {
                    font-family: 'Mitr';
                    font-weight: 900;
                }
            }
        }
`

export default Review_All