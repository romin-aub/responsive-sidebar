'use client';

import { HeaderBreadcrumb } from './header-breadcrumb';
import { HeaderSmall } from './header-small';
import { RolesDropdown } from './roles-dropdown';
import { ThemeSwitcher } from './theme-switcher';

export const Header: React.FC = () => {
  return (
    <div className='px-5 h-full flex justify-start gap-4 items-center'>
      <div className='lg:hidden'>
        <HeaderSmall />
      </div>
      <div className='w-full flex justify-between'>
        <HeaderBreadcrumb />
      </div>
      <div className='flex items-center gap-3 ml-3'>
        <ThemeSwitcher />
        <hr className='w-px h-6 bg-white opacity-50' />
        <RolesDropdown />
      </div>
    </div>
  );
};
