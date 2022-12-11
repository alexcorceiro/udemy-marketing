import ProductsPageComponent from "./components/ProductsPageComponent";
import axios from "axios";

const fetchProducts = async(abctrl) => {
  const { data } = await axios.get("/api/products/admin",{
    signal: abctrl.signal,
  })
  return data;
}

const deleteProducts = async(productId) => {
  const { data } = await axios.delete(`/api/products/admin/${productId}`)
  return data
}

const AdminProductPage = () => {
  return<ProductsPageComponent fetchProducts={fetchProducts} deleteProducts={deleteProducts}/>
};


export default AdminProductPage;