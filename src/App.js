import './app.css';
import { useState } from 'react';

function App() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ nameError, setNameError ] = useState('');
  const [ emailError, setEmailError ] = useState('');
  const [ successful, setSuccessful ] = useState(false);

  const nameOnChange = (event) => {
    setName(event.target.value);
  }

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  }

  const onSubmit = () => {
      const nameRegex = /[a-zA-Z]+/g;
      const nameTest = nameRegex.test(name);
      setNameError(nameTest ? '' : 'Use letters only');

      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailTest = emailRegex.test(email);
      setEmailError(emailTest ? '' : 'Enter a valid email');

      emailTest && nameTest && setSuccessful(true)
  }
 
  return (
    <div className="App">
      {!successful &&
        <div>
          {nameError && <div>{nameError}</div>}
          <input onChange={nameOnChange} value={name} placeholder='Enter name'/>
          {emailError && <div>{emailError}</div>}
          <input onChange={emailOnChange} value={email} placeholder='Enter email'/>
          <button onClick={onSubmit}>Submit</button>
        </div>
      }
      {successful && <div>Success</div>}
    </div>
  );
}

export default App;