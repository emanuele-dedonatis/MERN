import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { createContext, useContext, useState } from 'react';

interface DashboardContextIface {
  user: string;
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleSidebar: () => void;
  toggleDarkTheme: () => void;
  logoutUser: () => void;
}

const dashboardContext = createContext<DashboardContextIface>({
  user: '',
  showSidebar: false,
  isDarkTheme: false,
  toggleSidebar: () => {},
  toggleDarkTheme: () => {},
  logoutUser: () => {},
});

function DashboardLayout() {
  const user = 'emanuele';

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSidebar = () => {
    console.log('toggleSidebar');
    setShowSidebar(!showSidebar);
  };

  const toggleDarkTheme = () => {
    console.log('toggleDarkTheme');
    setIsDarkTheme(!isDarkTheme);
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

export const useDahsboardContext = () => useContext(dashboardContext);
export default DashboardLayout;
