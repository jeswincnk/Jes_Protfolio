import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jeswin C N K - Portfolio',
  description: 'Entry-Level Software Developer | Python, React Native, Django Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

