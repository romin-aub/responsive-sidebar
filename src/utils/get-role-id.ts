import { Roles } from '@/config/roles';

export const getRoleId = (roleName: string | undefined) => {
  if (!roleName) return undefined;
  return Roles.find((role) => role.name === roleName)?.id;
};
