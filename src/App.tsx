import { Route, Routes } from 'react-router';

import { AppRoute } from '@libs/enums/enums.js';
import { PublicLayout } from 'src/layouts/PublicLayout.js';
import { NotFoundPage } from 'src/pages/NotFound/NotFoundPage.js';
import { HomePage } from 'src/pages/Home/HomePage.js';

function App() {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
