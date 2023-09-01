import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { createContext, useContext, useState } from 'react';

const dashboardContext = createContext({});

function DashboardLayout() {
  const user = 'emanuele';

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDarkTheme = () => {
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
