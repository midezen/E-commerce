import {
  KeyboardArrowDown,
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./Navbar.scss";
import en from "../../img/en.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={en} alt="" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link to="/products/1" className="link">
              Men
            </Link>
          </div>
          <div className="item">
            <Link to="/products/2" className="link">
              Women
            </Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">
              Children
            </Link>
          </div>
          <div className="item">
            <Link to="/products/4" className="link">
              Accessories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">
            MIDESTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              About
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              Contact
            </Link>
          </div>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon">
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
