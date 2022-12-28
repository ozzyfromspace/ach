interface NavLink {
  route: string;
  label: string;
}

export const navlinks: NavLink[] = [
  { route: 'hero', label: 'Home' },
  { route: 'rooms', label: 'Rooms' },
  { route: 'amenities', label: 'Amenities' },
  { route: 'events', label: 'Events' },
  { route: 'contact', label: 'Contact' },
];
