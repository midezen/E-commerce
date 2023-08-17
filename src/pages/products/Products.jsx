import { useParams } from "react-router-dom";
import List from "../../components/list/List";
import "./Products.scss";
import { useState } from "react";

const Products = () => {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("");
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value="hat" />
            <label htmlFor="1">Hat</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value="t-shirt" />
            <label htmlFor="2">T-shirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value="coat" />
            <label htmlFor="3">Coat</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value="jacket" />
            <label htmlFor="4">Jacket</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value="hoodie" />
            <label htmlFor="5">Hoodie</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value="bag" />
            <label htmlFor="6">Bag</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="7" value="shoe" />
            <label htmlFor="7">Shoe</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="8" value="belt" />
            <label htmlFor="8">Shirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="9" value="belt" />
            <label htmlFor="9">Belt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="10" value="jean" />
            <label htmlFor="10">Jean</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="11" value="trouser" />
            <label htmlFor="11">Trouser</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="12" value="wrist watch" />
            <label htmlFor="12">Wrist Watch</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="asc">Price (lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="catImg"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
