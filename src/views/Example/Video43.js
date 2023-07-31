import React, { useMemo, useRef, useState } from "react";

function Video43(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleAdd = () => {
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);
    setName("");
    setPrice("");

    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        type="text"
        value={name}
        placeholder="Enter name..."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter price..."
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      <p>Total: {total}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

Video43.propTypes = {};

export default Video43;
