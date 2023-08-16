import './globals.css'
import Providers from '@/components/Providers'
import { Inter } from 'next/font/google'

// components
import NavBar from '@/components/layout/navbar'

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})


export const metadata = {
  title: 'CrowDevelopment, LLC',
  description: 'CrowDevelopment, LLC is a software development company based in the United States. We specialize in building web applications and websites for small businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body className={inter.className}>
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </body>
    </html>
  )
}
