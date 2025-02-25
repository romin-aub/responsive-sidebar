'use client';

import i18n from '@/lib/i18n';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from './store';

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Provider>
  );
};
