import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Data from "./data";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setItems(data);
    };

    getData();
  }, []);

  const fetchData = async () => {
    // const dataFromServer = await getData();
    // setItems([...items,...dataFromServer])
  };
  return (
    <>
      <div class="row justify-content-center">
        <h1 class="text-center">Fresh Stock</h1>
      </div>
      <div className="App">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {items.map((item) => {
            return (
              <>
                <Data key={item.id} item={item} />
              </>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
