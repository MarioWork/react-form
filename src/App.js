import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isMinor: false,
    employment: "",
    favColor: ""
  });


  function handleChange(event) {

    const { name, value, type, checked } = event.target
    setData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        placeholder='Comments'
        name="comments"
        onChange={handleChange}
        value={formData.comments}
      />
      <div className='checkbox--container'>
        <input
          type="checkbox"
          name="isMinor"
          id="isMinor"
          checked={formData.isMinor}
          onChange={handleChange}
        />
        <label htmlFor='isMinor'>Are you under 18?</label>
      </div>
      <fieldset>
        <legend>Current employment status</legend>

        <div>
          <input
            type="radio"
            id="unemployed"
            name='employment'
            onChange={handleChange}
            checked={formData.employment === "unemployed"}
            value="unemployed"
          />

          <label htmlFor='unemployed'>unemployed</label>
        </div>

        <div>
          <input
            type="radio"
            id="part-time"
            name='employment'
            onChange={handleChange}
            checked={formData.employment === "part-time"}
            value="part-time"
          />

          <label htmlFor='part-time'>Part-time</label>
        </div>

        <div>
          <input
            type="radio"
            id="full-time"
            name='employment'
            onChange={handleChange}
            checked={formData.employment === "full-time"}
            value="full-time"
          />

          <label htmlFor='full-time'>Full-time</label>
        </div>
      </fieldset>

      <div className='select--container'>
        <label htmlFor='favColor'>What is your favorite color?</label>
        <select
          id='favColor'
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;
