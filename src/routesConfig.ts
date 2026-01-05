
import React from 'react';
export const DashboardPage = React.lazy(() => import('./pages/Dashboard'));
export const DailyTaskPage = React.lazy(() => import('./pages/DailyTask'));

export type AppRoute = {
  path: string;
  name: string;
  element: React.LazyExoticComponent<any> | React.ComponentType<any>;
  showInNav?: boolean;
  exact?: boolean;
};

export const appRoutes: AppRoute[] = [
  { path: '/dashboard', name: 'Dashboard', element: DashboardPage, showInNav: false  },
  { path: '/daily-task', name: 'Daily Task', element: DailyTaskPage, showInNav: true },
];

export const nestedRoutes: AppRoute[] = [
  
];
