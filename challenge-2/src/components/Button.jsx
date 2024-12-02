import PropTypes from "prop-types";

export default function Button({ handleDelete, id }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDelete(id);
      }}
      type="button"
    >
      Delete quote
    </button>
  );
}
