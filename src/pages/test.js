import React, { useState, useEffect } from 'react';
import MainLayout from "../components/Layout/MainLayout"
import { firestore } from "../index"

const Example = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection("location").onSnapshot((snapshot) => {
      console.log(snapshot.docs)
      const result = snapshot.docs.map(d => {
        console.log("d :", d.data())
        const { id , name } = d.data()
        return {id , name}
      })
      setUser(result)
    })
  }

  const renderData = () => {
    if (user && user.length) {
      return user.map( (user , index) => {
        return(
        <div key={index}>
          {user.id} : {user.name}
        </div>
        )
      })
    }
  }

  return (
    <div>
      <h1>55555</h1>
      <div>{renderData()}</div>
    </div>
  )
}
export default Example