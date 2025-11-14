import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Servio – Mahalliy xizmatlarni bron qilish platformasi',
  description:
    'Servio — sartarosh, elektrchi, repetitor, tozalovchi va boshqa ustalarni topish, bron qilish va to‘lov qilish uchun zamonaviy platforma. Yaqin atrofdagi xizmatlarni bir joyda toping.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
