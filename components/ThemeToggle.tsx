import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';
import { getTheme, toggleTheme, type Theme } from '../theme';

const ThemeToggle: React.FC = () => {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    setThemeState(getTheme());
  }, []);

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-surface"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setThemeState(toggleTheme())}
    >
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
