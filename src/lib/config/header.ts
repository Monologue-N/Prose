interface headerConfig {
  nav?: { [href: string]: string }
  html?: string
}

export const config: headerConfig = {
  nav: {
    '/hello-world/prose11': '露水小段',
    '/hello-world/prose49': '问月集',
    '/hello-world/prose51': '浅草集'
  }
}
