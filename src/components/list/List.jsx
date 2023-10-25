import { useEffect } from "react";
import Card from "../card/Card";
import "./List.scss";

const List = ({ maxPrice, sort, checkedValues }) => {
  const data = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1614514160450-ea1a397d0f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGxvbmclMjBzbGVldmUlMjBncmFwaGljJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1671438118257-cefa6c86fd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvbmclMjBzbGVldmUlMjBUJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 500,
      subCat: "t-shirt",
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1619603364904-c0498317e145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1578102718171-ec1f91680562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      price: 600,
      subCat: "coat",
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxza2lydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 700,
      subCat: "skirt",
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1580845371542-5cffbfa77bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hat",
      isNew: false,
      oldPrice: 19,
      price: 800,
      subCat: "hat",
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1614514160450-ea1a397d0f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGxvbmclMjBzbGVldmUlMjBncmFwaGljJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1671438118257-cefa6c86fd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvbmclMjBzbGVldmUlMjBUJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 900,
      subCat: "t-shirt",
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1619603364904-c0498317e145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1578102718171-ec1f91680562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      price: 1000,
      subCat: "coat",
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxza2lydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 400,
      subCat: "skirt",
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1580845371542-5cffbfa77bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hat",
      isNew: false,
      oldPrice: 19,
      price: 300,
      subCat: "hat",
    },
  ];

  const sortedData = data.sort((a, b) => {
    if (sort === "asc") {
      return a.price - b.price;
    } else if (sort === "desc") {
      return b.price - a.price;
    } else {
    }
  });

  const filteredData = sortedData.filter((product) =>
    checkedValues.length !== 0
      ? product.price <= maxPrice && checkedValues.includes(product.subCat)
      : product.price <= maxPrice
  );

  useEffect(() => {
    console.log(checkedValues);
  }, [checkedValues]);

  return (
    <div className="list">
      {filteredData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
