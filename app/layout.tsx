import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AirPods Max',
  description: 'Premium audio experience',
  icons:{
    icon: '/icon.png',
    apple: '/icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}