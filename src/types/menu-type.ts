import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IMenuListItem {
  label: string; // title or label
  icon: IconProp; // icon
  href: string; // route to
  enabled: boolean; // says if route is enabled
  tooltip?: string; // extra info as tooltip
}

export interface IMenuListHeader extends Omit<IMenuListItem, "href"> {
  items: IMenuListItem[];
}

export type IMenuList = IMenuListItem | IMenuListHeader;
