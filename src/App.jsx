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
import ProductDetail from './Components/admin/ProductDetail.jsx'
import UpdateProductPage from './pages/admin/UpdateProductPage.jsx'
import { Toaster } from 'react-hot-toast'
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser.jsx'
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin.jsx'
import AddProductPage from './pages/admin/AddProductPage.jsx'
import CategoryPage from './pages/category/CategoryPage.jsx'
const App = () => {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/category/:categoryname" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          }
        />
        <Route
          path="/addproduct"
          element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          }
        />
        <Route
          path="/updateproduct/:id"
          element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          }
        />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
