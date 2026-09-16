import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 px-6">
      <h1 className="text-5xl font-bold tracking-tight text-blue-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl">
        Hello World
      </h1>
    </div>
  );
}
