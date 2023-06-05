import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: '400'
})

export const metadata = {
  title: 'Muhammad Rizwan',
  description: 'Muhammad Rizwan as a front end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
