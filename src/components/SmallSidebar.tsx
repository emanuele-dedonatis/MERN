import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDahsboardContext } from '../pages/DashboardLayout';
import { Logo } from '.';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

function SmallSidebar() {
  const data = useDahsboardContext();

  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button type='button' className='close-btn'>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink to={path} key={text} className='nav-link'>
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default SmallSidebar;
