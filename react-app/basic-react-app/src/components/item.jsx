const AddItems = ({ submitHandler, newItem, handleAdd }) => {
  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Add and Item: " type="text" onchange={newItem} />
      <button type="button" onClick={handleAdd}>
        Add Item
      </button>
    </form>
  );
};

export default AddItems;
