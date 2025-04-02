import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IMenuListItem {
  label: string; // title or label
  icon: IconProp; // icon
  href: string; // route to
  enabled: boolean; // says if route is enabled
  tooltip?: string; // extra info as tooltip
  roles: number[]; // roles allowed
  component: React.FC; // component to render
}

export interface IMenuListHeader
  extends Omit<IMenuListItem, 'href' | 'component'> {
  items: (IMenuListItem | IMenuListHeader)[];
}

export type IMenuList = IMenuListItem | IMenuListHeader;
