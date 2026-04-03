import React, { useState } from "react";

const plants = {
Indoor: [
{ id: 1, name: "Plant 1", price: 10, image: "img1" },
{ id: 2, name: "Plant 2", price: 15, image: "img2" },
{ id: 3, name: "Plant 3", price: 20, image: "img3" },
{ id: 4, name: "Plant 4", price: 25, image: "img4" },
{ id: 5, name: "Plant 5", price: 30, image: "img5" },
{ id: 6, name: "Plant 6", price: 35, image: "img6" }
],
Succulents: [
{ id: 7, name: "Plant 7", price: 12, image: "img7" },
{ id: 8, name: "Plant 8", price: 18, image: "img8" },
{ id: 9, name: "Plant 9", price: 22, image: "img9" },
{ id: 10, name: "Plant 10", price: 28, image: "img10" },
{ id: 11, name: "Plant 11", price: 32, image: "img11" },
{ id: 12, name: "Plant 12", price: 36, image: "img12" }
],
Herbs: [
{ id: 13, name: "Plant 13", price: 5, image: "img13" },
{ id: 14, name: "Plant 14", price: 6, image: "img14" },
{ id: 15, name: "Plant 15", price: 7, image: "img15" },
{ id: 16, name: "Plant 16", price: 8, image: "img16" },
{ id: 17, name: "Plant 17", price: 9, image: "img17" },
{ id: 18, name: "Plant 18", price: 10, image: "img18" }
]
};

function ProductList() {
const [cart, setCart] = useState([]);

const addToCart = (plant) => {
setCart([...cart, plant]);
};

return ( <div> <nav> <a>Home</a> <a>Plants</a> <a>Cart ({cart.length})</a> </nav>

```
  {Object.keys(plants).map((category) => (
    <div key={category}>
      <h2>{category}</h2>
      {plants[category].map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button
            onClick={() => addToCart(plant)}
            disabled={cart.find((item) => item.id === plant.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  ))}
</div>
```

);
}

export default ProductList;
