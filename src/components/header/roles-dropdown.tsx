import { Roles } from '@/config/roles';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/core/inputs/dropdown-menu';
import { cn } from '@/lib/utils';
import { setRole } from '@/store/slices/role-slice';
import type { RootState } from '@/store/store';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

export const RolesDropdown: React.FC = () => {
  const selectedRole = useSelector((state: RootState) => state.role.role);
  const dispatch = useDispatch();
  const handleRoleChange = (roleId: number) => {
    dispatch(setRole(roleId));
  };

  return (
    <div className='flex flex-row-reverse gap-3 items-center text-sm'>
      <FontAwesomeIcon icon={faUser} size='lg' />
      <DropdownMenu>
        <DropdownMenuTrigger className='flex flex-row-reverse gap-3 items-center outline-none'>
          <FontAwesomeIcon icon={faChevronDown} size='xs' />
          {Roles.find((role) => role.id === selectedRole)?.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='m-2'>
          {Roles.map((role) => (
            <DropdownMenuItem
              key={role.id}
              onClick={() => handleRoleChange(role.id)}
              className={cn(
                role.id === selectedRole && 'bg-gray-200 text-foreground',
              )}
            >
              {role.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
