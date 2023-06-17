import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make the API call using axios.post()
    axios.post('your-api-endpoint', formData)
      .then((response) => {
        // Handle the response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  const handleChange = (event) => {
    // Update the form data state on input change
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;


