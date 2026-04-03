import React from "react";

function CartItem({ cart, setCart }) {
const increase = (id) => {
setCart(cart.map(item =>
item.id === id ? { ...item, quantity: item.quantity + 1 } : item
));
};

const decrease = (id) => {
setCart(cart.map(item =>
item.id === id && item.quantity > 1
? { ...item, quantity: item.quantity - 1 }
: item
));
};

const remove = (id) => {
setCart(cart.filter(item => item.id !== id));
};

const totalAmount = cart.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

return ( <div> <h1>Shopping Cart</h1>

```
  {cart.map(item => (
    <div key={item.id}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>

      <button onClick={() => increase(item.id)}>+</button>
      <button onClick={() => decrease(item.id)}>-</button>
      <button onClick={() => remove(item.id)}>Delete</button>
    </div>
  ))}

  <h2>Total Amount: ${totalAmount}</h2>

  <button onClick={() => alert("Coming Soon")}>
    Checkout
  </button>

  <button onClick={() => window.location.href = "/products"}>
    Continue Shopping
  </button>
</div>
```

);
}

export default CartItem;
