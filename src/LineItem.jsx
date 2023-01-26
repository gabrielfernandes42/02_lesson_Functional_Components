import { FaTrashAlt } from "react-icons/fa";

function LineItem({ item, handleCheckBox, handleDelete }) {
  return (
    <li className="item">
      <input
        onChange={() => handleCheckBox(item.id)}
        type="checkbox"
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheckBox(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
      />
    </li>
  );
}

export default LineItem;
