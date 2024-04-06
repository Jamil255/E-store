import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import NoPage from './pages/NoPage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
import ScrollTop from './Components/scrollTop/ScrollTop'
import CartPage from './pages/cart/CartPage.jsx'
import AllProduct from './pages/AllProduct/AllProduct.jsx'
import Login from './pages/registration/Login.jsx'
import Signup from './pages/registration/Signup.jsx'
import UserDashboard from './pages/user/UserDashboard.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
const App = () => {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productinfo" element={<ProductInfo />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  )
}

export default App
