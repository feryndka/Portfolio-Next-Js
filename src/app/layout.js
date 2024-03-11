import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

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
      <link rel="icon" href="/headIcon.png" sizes="any" />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
