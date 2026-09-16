import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

// The app shell: anything rendered here (nav, footer, providers) appears on every page.
// <Outlet /> is where the matched page renders.
function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

// Rendered inside RootLayout's <Outlet />, so the provider above is already in scope.
function NotFound() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center gap-4 transition-colors duration-500 ${theme.background} ${theme.heading}`}
    >
      <p className="text-lg">This page does not exist.</p>
      <Link to="/" className="text-sm underline underline-offset-4">
        Go to the home page
      </Link>
    </div>
  );
}
