import React, { useState, useEffect } from 'react';
import { firestore } from "../index"
import styled from 'styled-components'

const Example = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("location").onSnapshot((snapshot) => {
      const result = snapshot.docs.map(d => {
        const { id , name , subDistric} = d.data()
        return {id , name , subDistric}
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
            <p>LOCATION 1 : {user[0].id} : {user[0].name} : {user[0].subDistric}</p>
          </div>
          <br />
          <p>LOCATION 2 : {user[1].id} : {user[1].name} : {user[1].subDistric}</p>
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