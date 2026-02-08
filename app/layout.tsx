import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ConvexClientProvider from '@/components/ConvexClientProvider'
import Navbar from '@/components/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nexus Lend | Unified Marketplace',
  description: 'Lend, Rent, and Borrow with Trust.',
}

import { NexusProvider } from '@/context/NexusContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ClerkProvider>
          <ConvexClientProvider>
            <NexusProvider>
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
            </NexusProvider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}