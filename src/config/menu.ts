import {
  faAward,
  faBoltLightning,
  faCalendarAlt,
  faCalendarDay,
  faCalendarWeek,
  faContactBook,
  faHome,
  faInbox,
  faLayerGroup,
  faLightbulb,
  faMagicWandSparkles,
  faPeopleGroup,
  faPersonBooth,
  faPuzzlePiece,
  faRankingStar,
  faShop,
  faStar,
  faStarOfLife,
  faVestPatches,
} from '@fortawesome/free-solid-svg-icons';
import type { IMenuList } from '../types/menu-type';

export const MenuList: IMenuList[] = [
  {
    label: 'Explore',
    icon: faHome,
    href: '/',
    enabled: true,
  },
  {
    label: 'Awards',
    icon: faAward,
    enabled: true,
    items: [
      {
        label: 'Nominees',
        icon: faPeopleGroup,
        enabled: true,
        items: [
          {
            label: 'Most Rated Nominees',
            icon: faStar,
            href: '/awards/nominees/most-rated',
            enabled: true,
          },
          {
            label: 'Competitive Nominees',
            icon: faStarOfLife,
            href: '/awards/nominees/competitive',
            enabled: true,
          },
        ],
      },
      {
        label: 'Day Highlights',
        icon: faCalendarDay,
        enabled: true,
        items: [
          {
            label: 'Most Popular',
            icon: faBoltLightning,
            href: '/awards/day-highlights/popular',
            enabled: true,
          },
          {
            label: 'Most Creative',
            icon: faLightbulb,
            href: '/awards/day-highlights/creative',
            enabled: true,
          },
          {
            label: 'Most Innovative',
            icon: faMagicWandSparkles,
            href: '/awards/day-highlights/innovative',
            enabled: true,
          },
        ],
      },
      {
        label: 'Month Highlights',
        icon: faCalendarWeek,
        enabled: true,
        items: [
          {
            label: 'Most Popular',
            icon: faBoltLightning,
            href: '/awards/month-highlights/popular',
            enabled: true,
          },
          {
            label: 'Most Creative',
            icon: faLightbulb,
            href: '/awards/month-highlights/creative',
            enabled: true,
          },
          {
            label: 'Most Innovative',
            icon: faMagicWandSparkles,
            href: '/awards/month-highlights/innovative',
            enabled: true,
          },
        ],
      },
      {
        label: 'Year Highlights',
        icon: faCalendarAlt,
        enabled: true,
        items: [
          {
            label: 'Most Popular',
            icon: faBoltLightning,
            href: '/awards/year-highlights/popular',
            enabled: true,
          },
          {
            label: 'Most Creative',
            icon: faLightbulb,
            href: '/awards/year-highlights/creative',
            enabled: true,
          },
          {
            label: 'Most Innovative',
            icon: faMagicWandSparkles,
            href: '/awards/year-highlights/innovative',
            enabled: true,
          },
        ],
      },
    ],
  },
  {
    label: 'Categories',
    icon: faLayerGroup,
    enabled: true,
    items: [
      {
        label: 'E-Commerce',
        icon: faShop,
        href: '/categories/e-commerce',
        enabled: true,
      },
      {
        label: 'Gaming',
        icon: faPuzzlePiece,
        href: '/categories/gaming',
        enabled: true,
      },
      {
        label: 'Fashion',
        icon: faVestPatches,
        href: '/categories/fashion',
        enabled: true,
      },
    ],
  },
  {
    label: 'Participate',
    icon: faPersonBooth,
    href: '/participate',
    enabled: true,
  },
  {
    label: 'My Rank',
    icon: faRankingStar,
    href: '/my-rank',
    enabled: true,
  },
  {
    label: 'About',
    icon: faInbox,
    href: '/about',
    enabled: true,
  },
  {
    label: 'Contact-Us',
    icon: faContactBook,
    href: '/contact-us',
    enabled: true,
  },
];
