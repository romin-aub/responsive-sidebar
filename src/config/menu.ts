import About from '@/app/(dashboard)/about/page';
import CreativeDayHighlights from '@/app/(dashboard)/awards/day-highlights/creative/page';
import InnovativeDayHighlights from '@/app/(dashboard)/awards/day-highlights/innovative/page';
import PopularDayHighlights from '@/app/(dashboard)/awards/day-highlights/popular/page';
import CreativeMonthHighlights from '@/app/(dashboard)/awards/month-highlights/creative/page';
import InnovativeMonthHighlights from '@/app/(dashboard)/awards/month-highlights/innovative/page';
import PopularMonthHighlights from '@/app/(dashboard)/awards/month-highlights/popular/page';
import CompetitiveNominees from '@/app/(dashboard)/awards/nominees/competitive/page';
import MostRatedNominees from '@/app/(dashboard)/awards/nominees/most-rated/page';
import CreativeYearHighlights from '@/app/(dashboard)/awards/year-highlights/creative/page';
import InnovativeYearHighlights from '@/app/(dashboard)/awards/year-highlights/innovative/page';
import PopularYearHighlights from '@/app/(dashboard)/awards/year-highlights/popular/page';
import ECommerce from '@/app/(dashboard)/categories/e-commerce/page';
import Fashion from '@/app/(dashboard)/categories/fashion/page';
import Gaming from '@/app/(dashboard)/categories/gaming/page';
import ContactUs from '@/app/(dashboard)/contact-us/page';
import MyRank from '@/app/(dashboard)/my-rank/page';
import Explore from '@/app/(dashboard)/page';
import Participate from '@/app/(dashboard)/participate/page';
import Submissions from '@/app/(dashboard)/submissions/page';
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
    component: Explore,
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
            component: MostRatedNominees,
          },
          {
            label: 'awards.nominees.competitive.title',
            icon: faStarOfLife,
            href: '/awards/nominees/competitive',
            enabled: true,
            roles: [1, 2],
            component: CompetitiveNominees,
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
            component: PopularDayHighlights,
          },
          {
            label: 'awards.dayHighlights.creative.title',
            icon: faLightbulb,
            href: '/awards/day-highlights/creative',
            enabled: true,
            roles: [1, 2, 3],
            component: CreativeDayHighlights,
          },
          {
            label: 'awards.dayHighlights.innovative.title',
            icon: faMagicWandSparkles,
            href: '/awards/day-highlights/innovative',
            enabled: true,
            roles: [1, 2, 3],
            component: InnovativeDayHighlights,
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
            component: PopularMonthHighlights,
          },
          {
            label: 'awards.monthHighlights.creative.title',
            icon: faLightbulb,
            href: '/awards/month-highlights/creative',
            enabled: true,
            roles: [1, 2, 3],
            component: CreativeMonthHighlights,
          },
          {
            label: 'awards.monthHighlights.innovative.title',
            icon: faMagicWandSparkles,
            href: '/awards/month-highlights/innovative',
            enabled: true,
            roles: [1, 2, 3],
            component: InnovativeMonthHighlights,
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
            component: PopularYearHighlights,
          },
          {
            label: 'awards.yearHighlights.creative.title',
            icon: faLightbulb,
            href: '/awards/year-highlights/creative',
            enabled: true,
            roles: [1],
            component: CreativeYearHighlights,
          },
          {
            label: 'awards.yearHighlights.innovative.title',
            icon: faMagicWandSparkles,
            href: '/awards/year-highlights/innovative',
            enabled: true,
            roles: [1],
            component: InnovativeYearHighlights,
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
        component: ECommerce,
      },
      {
        label: 'categories.gaming.title',
        icon: faPuzzlePiece,
        href: '/categories/gaming',
        enabled: true,
        roles: [1, 2],
        component: Gaming,
      },
      {
        label: 'categories.fashion.title',
        icon: faVestPatches,
        href: '/categories/fashion',
        enabled: true,
        roles: [1, 2, 3],
        component: Fashion,
      },
    ],
  },
  {
    label: 'participate.title',
    icon: faPersonBooth,
    href: '/participate',
    enabled: true,
    roles: [1, 2, 3],
    component: Participate,
  },
  {
    label: 'my-rank.title',
    icon: faRankingStar,
    href: '/my-rank',
    enabled: true,
    roles: [1, 2, 3],
    component: MyRank,
  },
  {
    label: 'about.title',
    icon: faInbox,
    href: '/about',
    enabled: true,
    roles: [1, 2, 3],
    component: About,
  },
  {
    label: 'contact-us.title',
    icon: faContactBook,
    href: '/contact-us',
    enabled: true,
    roles: [1, 2, 3],
    component: ContactUs,
  },
  {
    label: 'submissions.title',
    icon: faDatabase,
    href: '/submissions',
    enabled: true,
    roles: [1],
    component: Submissions,
  },
];
