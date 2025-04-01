import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Providers } from './store/providers';
export const App: React.FC = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
