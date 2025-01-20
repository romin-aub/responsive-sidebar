import { IMenuList } from "./types";
import {
  faAward,
  faCalendarAlt,
  faCalendarDay,
  faCalendarWeek,
  faContactBook,
  faHome,
  faInbox,
  faLayerGroup,
  faPeopleGroup,
  faPersonBooth,
  faPuzzlePiece,
  faRankingStar,
  faShop,
  faVestPatches,
} from "@fortawesome/free-solid-svg-icons";

export const MenuList: IMenuList[] = [
  {
    label: "Explore",
    icon: faHome,
    href: "/",
    enabled: true,
  },
  {
    label: "Awards",
    icon: faAward,
    enabled: true,
    items: [
      {
        label: "Nominees",
        icon: faPeopleGroup,
        href: "/awards/nominees",
        enabled: true,
      },
      {
        label: "Day Highlights",
        icon: faCalendarDay,
        href: "/awards/day-highlights",
        enabled: true,
      },
      {
        label: "Month Highlights",
        icon: faCalendarWeek,
        href: "/awards/month-highlights",
        enabled: true,
      },
      {
        label: "Year Highlights",
        icon: faCalendarAlt,
        href: "/awards/year-highlights",
        enabled: true,
      },
    ],
  },
  {
    label: "Categories",
    icon: faLayerGroup,
    enabled: true,
    items: [
      {
        label: "E-Commerce",
        icon: faShop,
        href: "/categories/e-commerce",
        enabled: true,
      },
      {
        label: "Gaming",
        icon: faPuzzlePiece,
        href: "/categories/gaming",
        enabled: true,
      },
      {
        label: "Fashion",
        icon: faVestPatches,
        href: "/categories/fashion",
        enabled: true,
      },
    ],
  },
  {
    label: "Participate",
    icon: faPersonBooth,
    href: "/participate",
    enabled: true,
  },
  {
    label: "My Rank",
    icon: faRankingStar,
    href: "/my-rank",
    enabled: true,
  },
  {
    label: "About",
    icon: faInbox,
    href: "/about",
    enabled: true,
  },
  {
    label: "Contact-Us",
    icon: faContactBook,
    href: "/contact-us",
    enabled: true,
  },
];
