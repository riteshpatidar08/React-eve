import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [product, setProduct] = useState([]);
  console.log(product);

  //empty dependency
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((data) => {
      console.log(data.data);
      setProduct(data.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 m-10 p-10">
      {product.map((product) => (
        <div className="h-96 w-96  shadow-md">
          <img className="w-full" src={product.image} />
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
