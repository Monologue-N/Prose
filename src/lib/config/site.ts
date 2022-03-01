interface Site {
  title: string
  subtitle?: string
  lang?: string
  descr?: string
  author: {
    name: string
    avatar: string
    status?: string
    bio?: string
    bioBefore?: string
    bioAfter?: string
    github?: string
    twitter?: string
    identica?: string
    pgp?: string[]
  }
  url: string
  themeColor?: string
  since?: string
}

export const site: Site = {
  title: 'Home',
  subtitle: 'Monologue.№\'s Blog',
  lang: 'en-US',
  descr: '',
  author: {
    name: 'Monologue.№',
    avatar: '/assets/maskable@512.png',
    status: '⏳',
    bio: '理一分殊，月印万川。'
  },
  url: (import.meta.env.URARA_SITE_URL as string) ?? 'https://example.com',
  themeColor: '#3D4451'
}
