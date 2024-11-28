import PropTypes from 'prop-types';

export default function Footer({ dymamicText }) {
  return (
    <footer>
      <hr />
      <div className="footer">
        <p>Footer!</p>
        <p>{dymamicText}</p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  dymamicText: PropTypes.string.isRequired
}
