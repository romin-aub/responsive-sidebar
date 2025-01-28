'use client';

import { HeaderBreadcrumb } from './header-breadcrumb';
import { HeaderSmall } from './header-small';

export const Header: React.FC = () => {
  return (
    <div className='pl-5 h-full flex justify-start gap-4 items-center'>
      <div className='lg:hidden'>
        <HeaderSmall />
      </div>
      <HeaderBreadcrumb />
    </div>
  );
};
