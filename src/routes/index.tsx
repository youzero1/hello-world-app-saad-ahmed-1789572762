import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <h1 className="text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl">
        Hello World
      </h1>
    </div>
  );
}
