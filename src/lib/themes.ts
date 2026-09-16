export type ThemeId = 'yellow' | 'red' | 'blue' | 'green' | 'slate';

export type Theme = {
  id: ThemeId;
  label: string;
  /** Full literal class string for the page background. */
  background: string;
  /** Full literal class string for the heading text color. */
  heading: string;
  /** Full literal class string for the picker swatch fill. */
  swatch: string;
  /** Full literal class string for the active swatch ring color. */
  ring: string;
};

export const THEMES: Theme[] = [
  {
    id: 'yellow',
    label: 'Yellow',
    background: 'bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-500',
    heading: 'text-yellow-950',
    swatch: 'bg-yellow-400',
    ring: 'ring-yellow-950',
  },
  {
    id: 'red',
    label: 'Red',
    background: 'bg-gradient-to-br from-red-950 via-red-800 to-red-950',
    heading: 'text-red-50',
    swatch: 'bg-red-600',
    ring: 'ring-red-50',
  },
  {
    id: 'blue',
    label: 'Blue',
    background: 'bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950',
    heading: 'text-blue-50',
    swatch: 'bg-blue-500',
    ring: 'ring-blue-50',
  },
  {
    id: 'green',
    label: 'Green',
    background: 'bg-gradient-to-br from-emerald-950 via-emerald-700 to-emerald-950',
    heading: 'text-emerald-50',
    swatch: 'bg-emerald-500',
    ring: 'ring-emerald-50',
  },
  {
    id: 'slate',
    label: 'Dark',
    background: 'bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950',
    heading: 'text-slate-50',
    swatch: 'bg-slate-600',
    ring: 'ring-slate-50',
  },
];

export const DEFAULT_THEME_ID: ThemeId = 'yellow';

export function getTheme(id: ThemeId): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}
