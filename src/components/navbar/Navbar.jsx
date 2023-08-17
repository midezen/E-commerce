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
import { useState } from "react";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
            <Link to="/products/men" className="link">
              Men
            </Link>
          </div>
          <div className="item">
            <Link to="/products/women" className="link">
              Women
            </Link>
          </div>
          <div className="item">
            <Link to="/products/children" className="link">
              Children
            </Link>
          </div>
          <div className="item">
            <Link to="/products/accessories" className="link">
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
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
