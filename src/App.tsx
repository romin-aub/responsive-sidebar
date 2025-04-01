import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/tanstack-router';
import { Providers } from './store/providers';

export const App: React.FC = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
