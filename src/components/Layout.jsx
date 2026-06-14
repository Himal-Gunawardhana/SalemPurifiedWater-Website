import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flexGrow: 1, paddingBottom: 'var(--spacing-xl)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
