'use client';

import { Roles } from '@/config/roles';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/core/inputs/dropdown-menu';
import type { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { HeaderBreadcrumb } from './header-breadcrumb';
import { HeaderSmall } from './header-small';

export const Header: React.FC = () => {
  const role = useSelector((state: RootState) => state.role.role);
  return (
    <div className='px-5 h-full flex justify-start gap-4 items-center'>
      <div className='lg:hidden'>
        <HeaderSmall />
      </div>
      <div className='w-full flex justify-between'>
        <HeaderBreadcrumb />
        <DropdownMenu>
          <DropdownMenuTrigger>
            {Roles.find((r) => r.id === role)?.name}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
