import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex min-h-screen items-center justify-center px-6 transition-colors duration-500 ${theme.background}`}
    >
      <ThemeSwitcher />
      <h1
        className={`text-5xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] transition-colors duration-500 sm:text-6xl ${theme.heading}`}
      >
        hi
      </h1>
    </div>
  );
}
