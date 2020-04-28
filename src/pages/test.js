import React, { useState, useEffect } from 'react';
import { firestore } from "../index"
import styled from 'styled-components'

const Example = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("review").onSnapshot((snapshot) => {
      const result = snapshot.docs.map(d => {
        const { id, email , location , description , satisfaction } = d.data()
        return { id, email , location , description , satisfaction }
      })
      setUser(result)
    })
  }

  const renderData = () => {
    console.log(user)
    if (user && user.length) {
      return(
        <Styledwrapper>
          <div>
            <p>LOCATION 1 : {user[0].email} : {user[0].location} : {user[0].description}</p>
          </div>
        </Styledwrapper>
      )
    }
  }

  return (
    <div>
      <h1>55555</h1>
      <div>{renderData()}</div>
    </div>
  )
}

const Styledwrapper = styled.div`
  margin: 0
`
export default Example