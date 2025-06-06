import type { IMenuList } from '@/types/menu-type';
import {
  faAward,
  faBoltLightning,
  faCalendarAlt,
  faCalendarDay,
  faCalendarWeek,
  faContactBook,
  faDatabase,
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

export const getMenuList = (): IMenuList[] => [
  {
    label: 'explore.title',
    icon: faHome,
    href: '/',
    enabled: true,
    roles: [1, 2, 3],
  },
  {
    label: 'awards.title',
    icon: faAward,
    enabled: true,
    roles: [1, 2, 3],
    items: [
      {
        label: 'awards.nominees.title',
        icon: faPeopleGroup,
        enabled: true,
        roles: [1, 2],
        items: [
          {
            label: 'awards.nominees.mostRated.title',
            icon: faStar,
            href: '/awards/nominees/most-rated',
            enabled: true,
            roles: [1, 2],
          },
          {
            label: 'awards.nominees.competitive.title',
            icon: faStarOfLife,
            href: '/awards/nominees/competitive',
            enabled: true,
            roles: [1, 2],
          },
        ],
      },
      {
        label: 'awards.dayHighlights.title',
        icon: faCalendarDay,
        enabled: true,
        roles: [1, 2, 3],
        items: [
          {
            label: 'awards.dayHighlights.popular.title',
            icon: faBoltLightning,
            href: '/awards/day-highlights/popular',
            enabled: true,
            roles: [1, 2],
          },
          {
            label: 'awards.dayHighlights.creative.title',
            icon: faLightbulb,
            href: '/awards/day-highlights/creative',
            enabled: true,
            roles: [1, 2, 3],
          },
          {
            label: 'awards.dayHighlights.innovative.title',
            icon: faMagicWandSparkles,
            href: '/awards/day-highlights/innovative',
            enabled: true,
            roles: [1, 2, 3],
          },
        ],
      },
      {
        label: 'awards.monthHighlights.title',
        icon: faCalendarWeek,
        enabled: true,
        roles: [1, 2, 3],
        items: [
          {
            label: 'awards.monthHighlights.popular.title',
            icon: faBoltLightning,
            href: '/awards/month-highlights/popular',
            enabled: true,
            roles: [1, 2],
          },
          {
            label: 'awards.monthHighlights.creative.title',
            icon: faLightbulb,
            href: '/awards/month-highlights/creative',
            enabled: true,
            roles: [1, 2, 3],
          },
          {
            label: 'awards.monthHighlights.innovative.title',
            icon: faMagicWandSparkles,
            href: '/awards/month-highlights/innovative',
            enabled: true,
            roles: [1, 2, 3],
          },
        ],
      },
      {
        label: 'awards.yearHighlights.title',
        icon: faCalendarAlt,
        enabled: true,
        roles: [1],
        items: [
          {
            label: 'awards.yearHighlights.popular.title',
            icon: faBoltLightning,
            href: '/awards/year-highlights/popular',
            enabled: true,
            roles: [1],
          },
          {
            label: 'awards.yearHighlights.creative.title',
            icon: faLightbulb,
            href: '/awards/year-highlights/creative',
            enabled: true,
            roles: [1],
          },
          {
            label: 'awards.yearHighlights.innovative.title',
            icon: faMagicWandSparkles,
            href: '/awards/year-highlights/innovative',
            enabled: true,
            roles: [1],
          },
        ],
      },
    ],
  },
  {
    label: 'categories.title',
    icon: faLayerGroup,
    enabled: true,
    roles: [1, 2, 3],
    items: [
      {
        label: 'categories.e-commerce.title',
        icon: faShop,
        href: '/categories/e-commerce',
        enabled: true,
        roles: [1, 2, 3],
      },
      {
        label: 'categories.gaming.title',
        icon: faPuzzlePiece,
        href: '/categories/gaming',
        enabled: true,
        roles: [1, 2],
      },
      {
        label: 'categories.fashion.title',
        icon: faVestPatches,
        href: '/categories/fashion',
        enabled: true,
        roles: [1, 2, 3],
      },
    ],
  },
  {
    label: 'participate.title',
    icon: faPersonBooth,
    href: '/participate',
    enabled: true,
    roles: [1, 2, 3],
  },
  {
    label: 'my-rank.title',
    icon: faRankingStar,
    href: '/my-rank',
    enabled: true,
    roles: [1, 2, 3],
  },
  {
    label: 'about.title',
    icon: faInbox,
    href: '/about',
    enabled: true,
    roles: [1, 2, 3],
  },
  {
    label: 'contact-us.title',
    icon: faContactBook,
    href: '/contact-us',
    enabled: true,
    roles: [1, 2, 3],
  },
  {
    label: 'submissions.title',
    icon: faDatabase,
    href: '/submissions',
    enabled: true,
    roles: [1],
  },
];
