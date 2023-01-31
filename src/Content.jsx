import ItemList from "./ItemList";

function Content({ items, handleCheckBox, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </>
  );
}

export default Content;
