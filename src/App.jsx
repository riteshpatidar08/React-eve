
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
    <div className="">
     <select >
      {product.map((product)=>(
        <option>{product.title}</option>
      ))}
     </select>
    </div>
  );
}

export default App;
