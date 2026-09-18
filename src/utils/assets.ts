/**
 * Resolve public asset URLs with respect to Vite's base path.
 */
export function asset(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  return `${base.endsWith('/') ? base : base + '/'}${clean}`;
}
