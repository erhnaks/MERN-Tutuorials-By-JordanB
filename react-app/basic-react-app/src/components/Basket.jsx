import { useState, React } from "react";
import AddItems from "./item";
import ShoppingCart from "./ShoppingCart";

const Basket = () => {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  const newItem = ({ target }) => {
    setItemName(target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  const handleAdd = () => {
    setItemName((items) => [...items, itemName]);
  };

  return (
    <React.Fragment>
      <AddItems
        submitHandler={submitForm}
        newItem={newItem}
        handleAdd={handleAdd}
      />
      <ShoppingCart items={items} />
    </React.Fragment>
  );
};

export default Basket;
