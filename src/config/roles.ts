import type { IRole } from '@/types/role-type';

export const Roles: IRole[] = [
  { id: 1, name: 'Super Admin' },
  { id: 2, name: 'Admin' },
  { id: 3, name: 'User' },
];

export type TRole = 'Super Admin' | 'Admin' | 'User';
