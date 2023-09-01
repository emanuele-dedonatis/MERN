import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { createContext, useContext, useState } from 'react';
import { checkDefaultTheme } from '../App';

interface DashboardContextIface {
  user: {
    name: string;
    avatar?: string;
  };
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleSidebar: () => void;
  toggleDarkTheme: () => void;
  logoutUser: () => void;
}

const dashboardContext = createContext<DashboardContextIface>({
  user: {
    name: '',
  },
  showSidebar: false,
  isDarkTheme: false,
  toggleSidebar: () => {},
  toggleDarkTheme: () => {},
  logoutUser: () => {},
});

function DashboardLayout() {
  const user = { name: 'emanuele' };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme ? '1' : '0');
  };

  const logoutUser = () => {
    console.log('logout');
  };

  return (
    <dashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </dashboardContext.Provider>
  );
}

export const useDashboardContext = () => useContext(dashboardContext);
export default DashboardLayout;
