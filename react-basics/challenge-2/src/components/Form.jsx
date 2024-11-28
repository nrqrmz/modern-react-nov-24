import { useState } from 'react';
import Proptypes from 'prop-types';

export default function Form({ handleAdd }) {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.quote || !formData.author) {
      alert('Completa los campos faltantes')
      return
    }

    handleAdd(formData)

    setFormData({
      quote: '',
      author: ''
    })
  }

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    setFormData(
      {
        ...formData,
        [name]: value
      }
    )
  }


  return (
    <>
      <h3>Create a new Quote</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quote">Quote: </label>
        <input
          type="text"
          id="quote"
          name="quote"
          placeholder="Veni vidi vici"
          onChange={handleChange}
          value={formData.quote}
        />

        <label htmlFor="author">Author: </label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Julius Caesar"
          onChange={handleChange}
          value={formData.author}
        />

        <button type="submit">Add quote</button>
      </form>
    </>
  );
}

Form.propTypes = {
  handleAdd: Proptypes.func.isRequired
}
