import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result?.products?.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [count]);

  return (
    <div className="load-more-wrapper">
      {loading && <div>Loading Data! Please Wait!</div>}
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <button
        disabled={count == 5 ? true : false}
        onClick={() => setCount(count + 1)}
        className="load-more-btn"
      >
        Load More Products
      </button>
    </div>
  );
}
