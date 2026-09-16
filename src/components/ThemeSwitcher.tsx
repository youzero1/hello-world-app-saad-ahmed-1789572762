import { useTheme } from '@/components/ThemeProvider';
import { THEMES } from '@/lib/themes';

export function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme();

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2 rounded-full border border-white/25 bg-black/15 px-3 py-2 backdrop-blur-md">
      {THEMES.map((t) => {
        const active = t.id === themeId;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setThemeId(t.id)}
            aria-label={`${t.label} theme`}
            aria-pressed={active}
            title={t.label}
            className={`h-6 w-6 cursor-pointer rounded-full ring-offset-2 ring-offset-transparent transition-all duration-300 hover:scale-110 ${t.swatch} ${
              active ? `scale-110 ring-2 ${t.ring}` : 'ring-0 opacity-70'
            }`}
          />
        );
      })}
    </div>
  );
}
