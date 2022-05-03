import { Outlet } from "react-router-dom"


//Layout para AuthRouter
const Layout = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout