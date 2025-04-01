import { Roles } from '@/config/roles';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/core/inputs/dropdown-menu';
import { cn } from '@/lib/utils';
import { updateRole } from '@/store/slices/auth-slice';
import type { RootState } from '@/store/store';
import { routeHasAccess } from '@/utils/check-route-access';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, useRouterState } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';

export const RolesDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { location } = useRouterState();
  const selectedRole = useSelector((state: RootState) => state.auth.role);
  const handleRoleChange = (roleId: number) => {
    dispatch(updateRole(roleId));
    if (!routeHasAccess(location.pathname, roleId)) {
      router.navigate({ to: '/' });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex text-sm gap-3 items-center outline-none'>
        <FontAwesomeIcon icon={faUser} size='lg' />
        <div className='text-nowrap'>
          {Roles.find((role) => role.id === selectedRole)?.name}
        </div>
        <FontAwesomeIcon icon={faChevronDown} size='xs' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='m-2'>
        {Roles.map((role) => (
          <DropdownMenuItem
            key={role.id}
            onClick={() => handleRoleChange(role.id)}
            className={cn(
              role.id === selectedRole &&
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
