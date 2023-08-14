import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby chartreuse blackbird spyplane art party keytar trust fund
            blog glossier, roof party seitan irony literally vegan. Bushwick
            try-hard godard distillery, offal pitchfork chambray twee stumptown.
            Asymmetrical distillery slow-carb food truck waistcoat pop-up.
            Neutra 3 wolf moon tonx hammock DSA poke vibecession tousled
            listicle.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}
export default Landing;
