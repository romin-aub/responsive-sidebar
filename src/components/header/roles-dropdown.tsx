import { Roles } from '@/config/roles';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/core/inputs/dropdown-menu';
import { cn } from '@/lib/utils';
import { routeHasAccess } from '@/utils/check-route-access';
import { getRoleId } from '@/utils/get-role-id';
import { useUser } from '@clerk/nextjs';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter } from 'next/navigation';

export const RolesDropdown: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const selectedRole = getRoleId(user?.unsafeMetadata.role as string);
  const handleRoleChange = async (roleId: number) => {
    const roleName = Roles.find((role) => role.id === roleId)?.name;
    if (user) {
      user.unsafeMetadata.role = roleName;
      await user.update({
        unsafeMetadata: {
          role: roleName,
        },
      });
    }
    if (!routeHasAccess(pathname, roleId)) {
      router.push('/');
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
