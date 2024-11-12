import { useState, useEffect, lazy } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";


const ProductDetailView = (props) => {
  const location = useLocation();
  const { product } = location.state || {};
  // Utilisez les données du produit récupérées
  console.log(product);
  const [productData, setProductData] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const productId = id;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/produit/produits/${productId}`
        );
        const products = response.data;
        const firstKey = Object.keys(products)[0];
        setProductData(products[firstKey]);
        console.log(products[firstKey]);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, []);
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const itemToAdd = productData; 
    //const quantit = 1; // The quantity you want to add
    dispatch(addToCart({ item: itemToAdd, quantity }));
  };
  console.log(quantity);

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <img
                src={productData && productData.img}
                className="img-fluid mb-3"
                alt=""
              />
              <img
                src={productData && productData.img}
                className="border border-secondary me-2"
                width="75"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <h1 className="h5 d-inline me-2">
                {productData && productData.name}
              </h1>
              {productData && productData.isNewPro && (
              <span className="badge bg-success me-2">New</span>
            )}
              {productData && productData.isHot && <span className="badge bg-danger me-2">Hot</span>}
              <div className="mb-3">
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />|{" "}
                <span className="text-muted small">
                  42 ratings and 4 reviews
                </span>
              </div>
              <dl className="row small mb-3">
                <dt className="col-sm-3">Availability</dt>
                <dd className="col-sm-9">In stock</dd>
                <dt className="col-sm-3">Sold by</dt>
                <dd className="col-sm-9">Authorised Store</dd>
                <dd className="col-sm-9">

                </dd>
                <dd className="col-sm-9"> {productData && productData.description}</dd>
              </dl>

              <div className="mb-3">
                
                <span className="fw-bold h5 me-2">
                  {productData && productData.price - 100} DT
                </span>
                <del className="small text-muted me-2">
                  {productData && productData.price} DT
                </del>
                <span className="rounded p-1 bg-warning  me-2 small">
                  -100 DT
                </span>
              </div>
              <div className="mb-3">
                <div className="d-inline float-start me-2">
                  <div className="input-group input-group-sm mw-140">
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                      onClick={decreaseQuantity}
                    >
                      <i className="bi bi-dash-lg"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                      onClick={increaseQuantity}
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <Link to="/cart">
                </Link>


              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
