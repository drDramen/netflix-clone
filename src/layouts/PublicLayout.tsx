import { Outlet } from 'react-router';

import { Footer, Header } from '@components/components.js';

export const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
