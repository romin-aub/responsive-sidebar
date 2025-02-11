'use client';

import { HeaderBreadcrumb } from './header-breadcrumb';
import { HeaderSmall } from './header-small';
import { RolesDropdown } from './roles-dropdown';

export const Header: React.FC = () => {
  return (
    <div className='px-5 h-full flex justify-start gap-4 items-center'>
      <div className='lg:hidden'>
        <HeaderSmall />
      </div>
      <div className='w-full flex justify-between'>
        <HeaderBreadcrumb />
        <RolesDropdown />
      </div>
    </div>
  );
};
