const ShoppingCart = ({ items }) => {
  const Display = ({ itemName }) => <li>{itemName}</li>;
  return (
    <ul className="shopping-cart">
      {items.map((itemName, i) => (
        <Display itemName={itemName} key={i} />
      ))}
    </ul>
  );
};

export default ShoppingCart;
