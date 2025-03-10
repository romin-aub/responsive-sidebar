'use client';

import { Roles } from '@/config/roles';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/core/inputs/dropdown-menu';
import { cn } from '@/lib/utils';
import { routeHasAccess } from '@/utils/check-route-access';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export const RolesDropdown: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, update } = useSession();

  const handleRoleChange = async (roleId: number) => {
    await update({ ...session, user: { ...session?.user, role: roleId } });
    if (!routeHasAccess(pathname, roleId)) {
      router.push('/');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex text-sm gap-3 items-center outline-none'>
        <FontAwesomeIcon icon={faUser} size='lg' />
        <div className='text-nowrap'>
          {Roles.find((role) => role.id === session?.user?.role)?.name}
        </div>
        <FontAwesomeIcon icon={faChevronDown} size='xs' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='m-2'>
        {Roles.map((role) => (
          <DropdownMenuItem
            key={role.id}
            onClick={() => handleRoleChange(role.id)}
            className={cn(
              role.id === session?.user?.role &&
                'bg-secondary-10 hover:bg-secondary-10 text-primary-30',
            )}
          >
            {role.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
