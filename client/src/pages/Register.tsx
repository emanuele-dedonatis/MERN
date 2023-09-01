import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

function Register() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='Emanuele' required />
        <FormRow
          type='text'
          name='lastName'
          labelText='Last Name'
          defaultValue='De Donatis'
          required
        />
        <FormRow type='text' name='location' defaultValue='Valencia' required />
        <FormRow
          type='text'
          name='email'
          defaultValue='emanuele.dedonatis@gmail.com'
          required
        />
        <FormRow
          type='text'
          name='password'
          defaultValue='secret123'
          required
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
