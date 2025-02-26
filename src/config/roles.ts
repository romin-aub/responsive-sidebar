import type { IRole } from '@/types/role-type';

export enum TRole {
  SuperAdmin = 'Super Admin',
  Admin = 'Admin',
  User = 'User',
}

export const Roles: IRole[] = [
  { id: 1, name: TRole.SuperAdmin },
  { id: 2, name: TRole.Admin },
  { id: 3, name: TRole.User },
];
