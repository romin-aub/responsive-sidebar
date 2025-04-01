'use client';

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
import DashboardLayout from '@/app/(dashboard)/layout';
import MyRankPage from '@/app/(dashboard)/my-rank/page';
import Explore from '@/app/(dashboard)/page';
import Participate from '@/app/(dashboard)/participate/page';
import ProfilePage from '@/app/(dashboard)/profile/page';
import SubmissionsPage from '@/app/(dashboard)/submissions/page';
import NotFound from '@/app/not-found';
import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { AuthCheck } from './auth-check';

const protectedRoutes: RouteObject[] = [
  {
    element: [
      <React.Fragment key='user-provider-layout'>
        <DashboardLayout />
      </React.Fragment>,
    ],
    errorElement: <NotFound />,
    children: [
      {
        element: <AuthCheck />,
        children: [
          { index: true, element: <Explore /> },
          { path: 'submissions', element: <SubmissionsPage /> },
          { path: 'contact-us', element: <ContactUsPage /> },
          { path: 'my-rank', element: <MyRankPage /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: 'about', element: <AboutPage /> },
          {
            path: 'awards/day-highlights/popular',
            element: <PopularDayHighlights />,
          },
          {
            path: 'awards/day-highlights/creative',
            element: <CreativeDayHighlights />,
          },
          {
            path: 'awards/day-highlights/innovative',
            element: <InnovativeDayHighlights />,
          },
          {
            path: 'awards/month-highlights/popular',
            element: <PopularMonthHighlights />,
          },
          {
            path: 'awards/month-highlights/creative',
            element: <CreativeMonthHighlights />,
          },
          {
            path: 'awards/month-highlights/innovative',
            element: <InnovativeMonthHighlights />,
          },
          {
            path: 'awards/year-highlights/popular',
            element: <PopularYearHighlights />,
          },
          {
            path: 'awards/year-highlights/creative',
            element: <CreativeYearHighlights />,
          },
          {
            path: 'awards/year-highlights/innovative',
            element: <InnovativeYearHighlights />,
          },
          {
            path: 'awards/nominees/most-rated',
            element: <MostRatedNominees />,
          },
          {
            path: 'awards/nominees/competitive',
            element: <CompetitiveNominees />,
          },
          { path: 'categories/e-commerce', element: <ECommerce /> },
          { path: 'categories/gaming', element: <Gaming /> },
          { path: 'categories/fashion', element: <Fashion /> },
          { path: 'participate', element: <Participate /> },
        ],
      },
    ],
  },
];

export default protectedRoutes;
