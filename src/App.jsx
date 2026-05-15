import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'
import Admin from './pages/Admin'
import EditProduct from './pages/EditProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/products' element={<ProductList />} />      
          <Route path='/admin' element={<Admin />} >
              <Route path='new' element={<AddProduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
          </Route>
           
          


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
