import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/operators/authOperator';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div> LOGIN </div>
        <div>
          <label> Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleEmailChange}
          ></input>
        </div>
        <div>
          <label> Password </label>
          <input
            type="password"
            name="password"
            required
            onChange={handlePasswordChange}
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
