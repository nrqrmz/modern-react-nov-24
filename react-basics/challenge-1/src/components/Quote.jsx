import PropTypes from 'prop-types';

export default function Quote({ quote, author }) {
  return (
    <div>
      <h2>{quote}</h2>
      <p>{author}</p>
    </div>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}
