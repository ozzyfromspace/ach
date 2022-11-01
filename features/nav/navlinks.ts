interface NavLink {
  route: string;
  label: string;
}

export const navlinks: NavLink[] = [
  { route: 'hero', label: 'home' },
  { route: 'about', label: 'about' },
  { route: 'rooms', label: 'rooms' },
  { route: 'events', label: 'events' },
];
