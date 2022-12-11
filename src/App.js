import {BrowserRouter, Routes, Route} from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ProtectedRoutesComponents from "./components/ProtectedRoutesComponents";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailPage from "./pages/admin/AdminOrderDetailPage";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import UserCartDetailPage from "./pages/user/UserCartDetailPage";
import UserOdersPage from "./pages/user/UserOdersPage";
import UserOrderDetailPage from "./pages/user/UserOrderDetailPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import RoutesWithChatComponents from "./components/user/RoutesWithUserChatComponent";
import ScrollToTop from "./utils/ScrollToTop";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000'


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <HeaderComponent/>
     <Routes>
     <Route element={<RoutesWithChatComponents/>}>
     <Route path="/" element={<HomePage/>} />
     <Route path="/product-list" element={<ProductListPage/>}/>
     <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
     <Route path="/cart" element={<CartPage/>} />
     <Route path="/login" element={<LoginPage/>} />
     <Route path="/register" element={<RegisterPage/>}/>
     <Route path="*" element="erreur 404"/> 
     </Route>

     <Route element={<ProtectedRoutesComponents admin={false}/>}>
     <Route path="/user" element={<UserProfilePage/>}/>
     <Route path="/user/my-orders" element={<UserOdersPage/>}/>
     <Route path="/user/cart-details" element={<UserCartDetailPage/>}/>
     <Route path="/user/order-details" element={<UserOrderDetailPage/>}/>
     </Route>

     <Route element={<ProtectedRoutesComponents admin={true}/>}>
      <Route path="/admin/users" element={<AdminUserPage/>}/>
      <Route path="/admin/edit-user" element={<AdminEditUserPage/>} />
      <Route path="/admin/products" element={<AdminProductPage/>}/>
      <Route path="/admin/create-new-product" element={<AdminCreateProductPage/>}/>
      <Route path="/admin/edit-product" element={<AdminEditProductPage/>}/>
      <Route path="/admin/orders" element={<AdminOrderPage/>}/>
      <Route path="/admin/order-details/:id" element={<AdminOrderDetailPage/>}/>
      <Route path="/admin/chats" element={<AdminChatsPage/>} />
      <Route path="/admin/analytics" element={<AdminAnalyticsPage/>}/>
     </Route> 
     </Routes>
     <FooterComponent/>
    </BrowserRouter>
  );
}


export default App;