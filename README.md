# Pharma Testing Application

A responsive web application for tracking and analyzing pharmaceutical testing processes with interactive dashboards, process management, and Google Maps integration.

[Deploy](https://pharma-testing-sable.vercel.app/)

## Features

- Dashboard: Monthly tests statistics and weekly summaries with interactive charts
- Processes: Complete list of testing processes with overview
- Process Details: In-depth process information integrated with Google Maps API for location visualization
- Authentication: Secure login system with protected routes
- Responsive Design: Fully adaptive interface optimized for mobile and desktop screens

## How to run locally

Create .env file in project root with following keys:

```
GOOGLE_MAPS_API_KEY=
GOOGLE_MAP_ID=

BASE_URL=
LOGIN_PATH=
ABOUT_ME_PATH=
WEEK_SUMMARY_PATH=
TOTAL_TESTS_PATH=
PROCESSES_PATH=
PROCESS_DETAILS_PATH=
```

```bash
# Install dependencies
pnpm i

# Development server
pnpm dev

# Or build and preview
pnpm build
pnpm preview
```

## Tech Stack:

Core dependencies:

- React 19 - UI library for building interactive components
- Redux Toolkit - State management with RTK Query for API integration
- React Router - Client-side routing
- Recharts - Charts for dashboard
- @vis.gl/react-google-maps - Google Maps integration for process location
- React Responsive - responsive utilities (mainly for `<MediaQuery>` & `useMediaQuery()`)
- Redux Persist - Persistent state storage
- Date-fns - datetime manipulation and formatting
- React Icons - icon library for UI elements

Build tools:

- Webpack 5
- Babel
- PostCSS - for autoprefixer
- pnpm
