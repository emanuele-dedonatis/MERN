import { useDahsboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

interface Props {
  closeOnClick?: boolean;
}

function NavLinks({ closeOnClick }: Props) {
  const { toggleSidebar } = useDahsboardContext();

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={closeOnClick ? toggleSidebar : () => {}}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}
export default NavLinks;
