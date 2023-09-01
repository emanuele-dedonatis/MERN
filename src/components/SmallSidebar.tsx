import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDahsboardContext } from '../pages/DashboardLayout';
import { Logo } from '.';
import NavLinks from './NavLinks';

function SmallSidebar() {
  const { showSidebar, toggleSidebar } = useDahsboardContext();

  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar && 'show-sidebar'}`}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks closeOnClick />
        </div>
      </div>
    </Wrapper>
  );
}
export default SmallSidebar;
