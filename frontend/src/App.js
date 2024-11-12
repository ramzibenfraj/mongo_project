import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import "./App.min.css";
const ProductAdmin = lazy(() => import("./views/product/ProductAdmin"));
const CatEdit = lazy(() => import("./views/admin/Category"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <TopMenu />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Routes>
            <Route exact path="/" element={< ProductAdmin/>}/> 
            <Route exact path="/products" element={< ProductAdmin/>}/>
            <Route exact path="/categoryedit" element={<CatEdit/>}/>
            <Route exact path="/product/detail/:id" element={<ProductDetailView/>} />
            <Route exact path="/500" element={<InternalServerErrorView/>} />
            <Route path="*" element={<NotFoundView/>} />
          </Routes>
        </Suspense>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
