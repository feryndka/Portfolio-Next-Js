import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Fery Andika | Web Developer',
  description: 'Student Informatics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
