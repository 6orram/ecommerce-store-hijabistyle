import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import MiniNavbar from '@/components/MiniNavbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Hijabi Style | إرتقي بحجابك',
  description: 'Hijabi Style - Bienvenu dans notre site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <MiniNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
