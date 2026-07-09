import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://bienvinido-james-publico.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Bienvinido James Publico — IT Graduate | Laravel Developer | IT Tech Support',
  description:
    'BS IT graduate from San Pedro, Laguna. Full-stack Laravel developer, Flutter mobile developer, Tauri/Rust desktop app developer, and IT Tech Support specialist. Open to work.',
  generator: 'v0.app',
  keywords: [
    'Bienvinido James Publico',
    'Laravel Developer',
    'Full-Stack Web Developer',
    'PHP Developer',
    'MySQL',
    'JavaScript',
    'AI Applications',
    'Portfolio',
    'Flutter',
    'Android Studio',
    'IT Support',
    'Desktop Support',
    'Hardware Troubleshooting',
    'Tauri',
    'Rust',
    'Windows API',
    'Cisco',
    'San Pedro Laguna',
    'IT Tech Support',
  ],
  authors: [{ name: 'Bienvinido James Publico' }],
  openGraph: {
    title: 'Bienvinido James Publico — IT Graduate | Laravel Developer | IT Tech Support',
    description:
      'BS IT graduate from San Pedro, Laguna. Full-stack Laravel developer, Flutter mobile developer, Tauri/Rust desktop app developer, and IT Tech Support specialist. Open to work.',
    url: siteUrl,
    siteName: 'Bienvinido James Publico Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bienvinido James Publico — IT Graduate | Laravel Developer | IT Tech Support',
    description:
      'BS IT graduate from San Pedro, Laguna. Full-stack Laravel developer, Flutter mobile developer, Tauri/Rust desktop app developer, and IT Tech Support specialist. Open to work.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
