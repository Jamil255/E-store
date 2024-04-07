import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/FirebaseConfig'
import MyContext from "./myContext"
function MyState({ children }) {
  const [loading, setLoading] = useState(false)

  const [getAllProduct, setGetAllProduct] = useState([])

  const getAllProductFunction = async () => {
    setLoading(true)
    try {
        const q = query(collection(db, 'products'),
            orderBy('time'))
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = []
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id })
        })
        setGetAllProduct(productArray)
        setLoading(false)
      })
      return () => data
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllProductFunction()
  }, [])
  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyState
