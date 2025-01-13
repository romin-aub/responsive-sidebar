import { IMenuList } from "./types";
import {
  faAddressBook,
  faAward,
  faCalendar,
  faCaretRight,
  faCodeCommit,
  faContactBook,
  faDashboard,
  faDisplay,
  faHome,
  faRandom,
  faWindowMinimize,
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
        icon: faWindowMinimize,
        href: "/awards/nominees",
        enabled: true,
      },
      {
        label: "Day Highlights",
        icon: faDisplay,
        href: "/awards/day-highlights",
        enabled: true,
      },
      {
        label: "Month Highlights",
        icon: faDisplay,
        href: "/awards/month-highlights",
        enabled: true,
      },
      {
        label: "Year Highlights",
        icon: faDisplay,
        href: "/awards/year-highlights",
        enabled: true,
      },
    ],
  },
  {
    label: "Categories",
    icon: faCaretRight,
    enabled: true,
    items: [
      {
        label: "E-Commerce",
        icon: faCodeCommit,
        href: "/categories/e-commerce",
        enabled: true,
      },
      {
        label: "Gaming",
        icon: faCalendar,
        href: "/categories/gaming",
        enabled: true,
      },
      {
        label: "Fashion",
        icon: faCalendar,
        href: "/categories/fashion",
        enabled: true,
      },
    ],
  },
  {
    label: "Participate",
    icon: faDashboard,
    href: "/participate",
    enabled: true,
  },
  {
    label: "My Rank",
    icon: faRandom,
    href: "/my-rank",
    enabled: true,
  },
  {
    label: "About",
    icon: faAddressBook,
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
