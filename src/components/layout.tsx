import { Outlet } from 'react-router-dom';
import SideBar from './SideBar.tsx';

const Layout = () => {
  return (
    <div className="flex min-h-screen max-h-fit w-full ">
     <div className="mr-[7%]">
     <SideBar />
     </div>
      <div className="w-[100%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
