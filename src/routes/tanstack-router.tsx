import DashboardLayout from '@/app/(dashboard)/layout';
import { store } from '@/store/store';
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { Provider } from 'react-redux';
import { AuthCheck } from './auth-check';

import AboutPage from '@/app/(dashboard)/about/page';
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
import ContactUsPage from '@/app/(dashboard)/contact-us/page';
import MyRankPage from '@/app/(dashboard)/my-rank/page';
import Explore from '@/app/(dashboard)/page';
import Participate from '@/app/(dashboard)/participate/page';
import ProfilePage from '@/app/(dashboard)/profile/page';
import SubmissionsPage from '@/app/(dashboard)/submissions/page';
import Login from '@/app/login/page';
import NotFound from '@/app/not-found';
import { Providers } from '@/store/providers';

const rootRoute = createRootRoute({
  component: () => (
    <Providers>
      <Outlet />
    </Providers>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: DashboardLayout,
  id: 'dashboard',
});

const protectedRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  component: AuthCheck,
  id: 'protected',
});

// Dashboard index route
const indexRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/',
  component: Explore,
});

// Other protected routes
const submissionsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/submissions',
  component: SubmissionsPage,
});

const contactUsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/contact-us',
  component: ContactUsPage,
});

const myRankRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/my-rank',
  component: MyRankPage,
});

const profileRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/profile',
  component: ProfilePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/about',
  component: AboutPage,
});

// Awards routes
const popularDayHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/day-highlights/popular',
  component: PopularDayHighlights,
});

const creativeDayHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/day-highlights/creative',
  component: CreativeDayHighlights,
});

const innovativeDayHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/day-highlights/innovative',
  component: InnovativeDayHighlights,
});

const popularMonthHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/month-highlights/popular',
  component: PopularMonthHighlights,
});

const creativeMonthHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/month-highlights/creative',
  component: CreativeMonthHighlights,
});

const innovativeMonthHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/month-highlights/innovative',
  component: InnovativeMonthHighlights,
});

const popularYearHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/year-highlights/popular',
  component: PopularYearHighlights,
});

const creativeYearHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/year-highlights/creative',
  component: CreativeYearHighlights,
});

const innovativeYearHighlightsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/year-highlights/innovative',
  component: InnovativeYearHighlights,
});

const mostRatedNomineesRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/nominees/most-rated',
  component: MostRatedNominees,
});

const competitiveNomineesRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/awards/nominees/competitive',
  component: CompetitiveNominees,
});

// Categories routes
const eCommerceRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/categories/e-commerce',
  component: ECommerce,
});

const gamingRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/categories/gaming',
  component: Gaming,
});

const fashionRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/categories/fashion',
  component: Fashion,
});

const participateRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/participate',
  component: Participate,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    loginRoute,
    dashboardLayoutRoute.addChildren([
      protectedRoute.addChildren([
        indexRoute,
        submissionsRoute,
        contactUsRoute,
        myRankRoute,
        profileRoute,
        aboutRoute,
        popularDayHighlightsRoute,
        creativeDayHighlightsRoute,
        innovativeDayHighlightsRoute,
        popularMonthHighlightsRoute,
        creativeMonthHighlightsRoute,
        innovativeMonthHighlightsRoute,
        popularYearHighlightsRoute,
        creativeYearHighlightsRoute,
        innovativeYearHighlightsRoute,
        mostRatedNomineesRoute,
        competitiveNomineesRoute,
        eCommerceRoute,
        gamingRoute,
        fashionRoute,
        participateRoute,
      ]),
    ]),
  ]),
  defaultNotFoundComponent: NotFound,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
