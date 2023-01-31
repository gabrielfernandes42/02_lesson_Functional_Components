import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Add Item"
        required
        autoFocus
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
