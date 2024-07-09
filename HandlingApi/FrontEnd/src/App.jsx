import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

//  Edge Case=> Error, loading,race condition , debouncing
function App() {
  const [search, setSearch] = useState("bed");
  const [product, loading, error] = customReactQuery(
    `/api/products?search=${search}`,
    search
  );

  if (error) return <h1>Something went wrong</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        autoFocus
      />
      <h1>Handling API in React</h1>
      <h1>Number of product {product.length}</h1>
    </>
  );
}

export default App;

const customReactQuery = (urlPath, search) => {
  const [product, setNewProduct] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(urlPath, {
          signal: controller.signal,
        });
        console.log(response.data);
        setNewProduct(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();
    //cleanup function
    return () => {
      controller.abort();
    };
  }, [search]);

  return [product, loading, error];
};
