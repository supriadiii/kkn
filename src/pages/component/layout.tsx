// components/Layout.js
import Navbar from "./Navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
