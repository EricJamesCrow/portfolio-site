import './globals.css'
import Providers from '@/components/Providers'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// components
import NavBar from '@/components/layout/navbar'

const sohneLight = localFont({ src: '../../public/fonts/Sohne-Light.otf' })

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})


export const metadata = {
  title: 'NextJS-Typescript-NextAuth-Prisma-Redux-Template',
  description: 'Template for NextJS 13 configured with TypeScript, NextAuth, Prisma, and Redux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={inter.className}>
        <Providers>
          <NavBar />
        {children}
        </Providers>
        </body>
    </html>
  )
}
