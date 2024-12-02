import PropTypes from "prop-types";
import Button from "./Button";

export default function Quote({
  quote,
  handleDelete,
  isHighlighted,
  handleHighlight,
}) {
  return (
    <div
      onClick={() => {
        console.log("event triggered");

        handleHighlight(quote);
      }}
      style={{
        ...styles.card,
        ...(isHighlighted ? styles.highlightedCard : {}),
      }}
    >
      <h3 style={styles.quoteText}>"{quote.quote}"</h3>
      <p style={styles.authorText}>- {quote.author}</p>
      <Button handleDelete={handleDelete} id={quote} />
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "300px",
    margin: "1rem",
  },
  highlightedCard: {
    transform: "scale(1.1)", // Agranda la quote destacada
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fffbe6", // Color de fondo diferente
  },
  quoteText: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    marginBottom: "0.5rem",
  },
  authorText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#555",
  },
};

Quote.propTypes = {
  quote: PropTypes.object,
};
