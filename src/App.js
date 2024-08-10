import { useState } from "react";
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState({
    interest1: false,
    interest2: false,
    interest3: false,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setInterests({
        ...interests,
        [name]: checked,
      });
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedInterests = Object.keys(interests).filter(key => interests[key]);
    setMessage(`Form submitted successfully! Interests: ${selectedInterests.join(', ')}`);
  };
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <div>
      <h1>Newsletter Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            aria-label="name"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            aria-label="email"
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="interest1"
            checked={interests.interest1}
            onChange={handleChange}
            aria-label="interest1"
          />
          Interest 1
        </label>
        <label>
          <input
            type="checkbox"
            name="interest2"
            checked={interests.interest2}
            onChange={handleChange}
            aria-label="interest2"
          />
          Interest 2
        </label>
        <label>
          <input
            type="checkbox"
            name="interest3"
            checked={interests.interest3}
            onChange={handleChange}
            aria-label="interest3"
          />
          Interest 3
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </main>
  );
}

export default App;
