import Card from "../card/Card";
import "./List.scss";

const List = () => {
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
  return (
    <div className="list">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
