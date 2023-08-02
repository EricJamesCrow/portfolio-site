import './globals.css'
import Providers from '@/components/Providers'

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
      <link rel="preload" as="image" href="/chevron-down.svg" />
      <body>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}
