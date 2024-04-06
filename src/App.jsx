import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import NoPage from './pages/NoPage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productinfo" element={<ProductInfo />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App
