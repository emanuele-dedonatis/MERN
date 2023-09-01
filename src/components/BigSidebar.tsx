import { Logo } from '.';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useDahsboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';

function BigSidebar() {
  const { showSidebar } = useDahsboardContext();

  return (
    <Wrapper>
      <div className={`sidebar-container ${!showSidebar && 'show-sidebar'}`}>
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}
export default BigSidebar;
