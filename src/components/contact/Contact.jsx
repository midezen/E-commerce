import "./Contact.scss";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Google,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail" />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <div className="icon">
            <Facebook />
          </div>
          <div className="icon">
            <Instagram />
          </div>
          <div className="icon">
            <Twitter />
          </div>
          <div className="icon">
            <Google />
          </div>
          <div className="icon">
            <Pinterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
