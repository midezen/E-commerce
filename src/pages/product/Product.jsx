import { useEffect, useState } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import { AddShoppingCart, FavoriteBorder, Balance } from "@mui/icons-material";

const Product = () => {
  const data = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1614514160450-ea1a397d0f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGxvbmclMjBzbGVldmUlMjBncmFwaGljJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1671438118257-cefa6c86fd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvbmclMjBzbGVldmUlMjBUJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1619603364904-c0498317e145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1578102718171-ec1f91680562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxza2lydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1580845371542-5cffbfa77bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1614514160450-ea1a397d0f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGxvbmclMjBzbGVldmUlMjBncmFwaGljJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1671438118257-cefa6c86fd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvbmclMjBzbGVldmUlMjBUJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1619603364904-c0498317e145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1578102718171-ec1f91680562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxza2lydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1580845371542-5cffbfa77bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hat",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  const [item, setItem] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const params = parseInt(useParams().id);
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    const matchedData = data.find((object) => parseInt(object.id) === params);
    setItem([matchedData]);
    item.map((thisItem) => setSelectedImg(thisItem.img));
  }, []);

  return (
    <>
      {item.map((thisItem) => (
        <div className="product">
          <div className="left">
            <div className="images">
              <img
                src={thisItem.img}
                alt=""
                onClick={() => setSelectedImg(thisItem.img)}
              />
              <img
                src={thisItem.img2}
                alt=""
                onClick={() => setSelectedImg(thisItem.img2)}
              />{" "}
            </div>

            <div className="mainImg">
              <img src={selectedImg ? selectedImg : thisItem.img} alt="" />
            </div>
          </div>

          <div className="right">
            <h1>{thisItem.title}</h1>
            <span className="price">${thisItem.price}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <div className="quantity">
              <button
                onClick={() =>
                  quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCart /> ADD TO CART
            </button>

            <div className="links">
              <div className="item">
                <FavoriteBorder /> ADD TO WISH LIST
              </div>
              <div className="item">
                <Balance /> ADD TO CAMPARE
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
