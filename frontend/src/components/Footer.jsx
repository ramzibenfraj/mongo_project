import { Link } from "react-router-dom";
import { FaApple, FaWindows, FaAndroid, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaGift, FaBriefcase, FaAd } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-gradient text-white py-3">
        <div className="row align-items-center text-center">
          <div className="col-md-9">
            <span className="fw-bold">Connect with us on social networks!</span>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <Link to="/" title="Apple"><FaApple className="text-light fs-5 mx-2 hover-icon" /></Link>
            <Link to="/" title="Windows"><FaWindows className="text-light fs-5 mx-2 hover-icon" /></Link>
            <Link to="/" title="Android"><FaAndroid className="text-light fs-5 mx-2 hover-icon" /></Link>
            <span className="px-2">|</span>
            <Link to="/" title="Twitter"><FaTwitter className="text-info fs-5 mx-2 hover-icon" /></Link>
            <Link to="https://www.facebook.com/ramzi.benfraj.77" title="Facebook"><FaFacebook className="text-primary fs-5 mx-2 hover-icon" /></Link>
            <Link to="https://www.instagram.com/ramzi_benfraj/" title="Instagram"><FaInstagram className="text-danger fs-5 mx-2 hover-icon" /></Link>
            <Link to="/" title="Youtube"><FaYoutube className="text-danger fs-5 mx-2 hover-icon" /></Link>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-light py-5">
        <div className="row">
          <div className="col-md-3">
            <h6 className="fw-bold">ShopTech</h6>
            <hr className="bg-light" />
            <p className="small">
              Welcome to ShopTech - Your Destination for Technology and Electronic Products! Discover the latest tech trends here.
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Products</h6>
            <hr className="bg-light" />
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Xiaomi</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">Mobiles</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">Huawei</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">iPhone</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">Samsung</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Policy</h6>
            <hr className="bg-light" />
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Return Policy</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">Terms of Use</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">Security</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">Privacy</Link></li>
              <li><Link to="/" className="text-light text-decoration-none">EPR Compliance</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Contact Us</h6>
            <hr className="bg-light" />
            <address className="small">
              <strong>Address:</strong><br />
              Nabeul, Tunis<br />
              <abbr title="Phone">P:</abbr> (216) 20-851-813
            </address>
            <p className="small"><i className="bi bi-envelope"></i> ShopTec@email.com</p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary text-white text-center py-3">
        <div className="row">
          <div className="col-md-2">
            <Link to="/" className="text-white text-decoration-none"><FaBriefcase className="text-warning me-1" /> Partner with us</Link>
          </div>
          <div className="col-md-2">
            <Link to="/" className="text-white text-decoration-none"><FaAd className="text-info me-1" /> Advertise</Link>
          </div>
          <div className="col-md-2">
            <Link to="/" className="text-white text-decoration-none"><FaGift className="me-1" /> Gift</Link>
          </div>
          <div className="col-md-3">
            <span>© 2024-{new Date().getFullYear()} ShopTec.com</span>
          </div>
          <div className="col-md-3">
            <img src="../../images/payment/american_express.webp" width="32" alt="American Express" className="me-2" />
            <img src="../../images/payment/maestro.webp" width="32" alt="Maestro" className="me-2" />
            <img src="../../images/payment/netbanking.webp" width="32" alt="Net Banking" className="me-2" />
            <img src="../../images/payment/paypal.webp" width="32" alt="Paypal" className="me-2" />
            <img src="../../images/payment/rupay.webp" width="32" alt="Rupay" className="me-2" />
            <img src="../../images/payment/upi.webp" width="32" alt="UPI" className="me-2" />
            <img src="../../images/payment/visa.webp" width="32" alt="Visa" className="me-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
