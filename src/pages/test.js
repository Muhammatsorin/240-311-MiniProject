import React, { useState, useEffect } from 'react';
import { firestore } from "../index"
import styled from 'styled-components'
import "antd/dist/antd.css"
import { Button } from "antd"

const Example = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("review").onSnapshot((snapshot) => {
      const result = snapshot.docs.map(d => {
        const { id, email, location, description, satisfaction } = d.data()
        return { id, email, location, description, satisfaction }
      })
      setUser(result)
    })
  }

  const deleteReview = (id) => {
    firestore.collection("review").doc(id + "").delete()
  }

  const renderData = () => {
    console.log(user)
    if (user && user.length) {
      return (
        user.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.id} : {user.location}</p>
              <Button onClick={ () => deleteReview(user.id)}>DELETE</Button>
            </div>
          )
        })
      )
    }
    else {
      return (
        <div>NO DATA</div>
      )
    }
  }

  return (
    <Styledwrapper>
      <div className="test">
        <h1>55555</h1>
        <div>{renderData()}</div>
      </div>
    </Styledwrapper>

  )
}

const Styledwrapper = styled.div`
  margin: 0


`
export default Example