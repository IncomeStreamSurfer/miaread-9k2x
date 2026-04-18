export type LinkItem = {
  key: string;
  label: string;
  sublabel?: string;
  href: string;
  icon: string;
  external?: boolean;
};

export const LINKS: LinkItem[] = [
  {
    key: 'instagram',
    label: 'Instagram',
    sublabel: '@miaread · daily reads',
    href: 'https://instagram.com/miaread',
    icon: 'instagram',
    external: true,
  },
  {
    key: 'latest-review',
    label: 'Latest Review',
    sublabel: 'The Seven Moons of Maali Almeida ★★★★★',
    href: 'https://instagram.com/p/latest',
    icon: 'book',
    external: true,
  },
  {
    key: 'goodreads',
    label: 'Goodreads',
    sublabel: 'see my shelves & 2025 reading goal',
    href: 'https://goodreads.com/miaread',
    icon: 'goodreads',
    external: true,
  },
  {
    key: 'newsletter',
    label: 'Newsletter',
    sublabel: 'bi-weekly bookish letters',
    href: '#newsletter',
    icon: 'mail',
  },
  {
    key: 'bookclub',
    label: 'Book Club',
    sublabel: 'join our cozy monthly read',
    href: '#bookclub',
    icon: 'club',
  },
  {
    key: 'contact',
    label: 'Contact',
    sublabel: 'PR, collabs & just say hi',
    href: 'mailto:hello@miaread.com',
    icon: 'heart',
    external: true,
  },
];
