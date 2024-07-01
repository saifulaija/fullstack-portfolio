
import Footer from '@/components/shared/footer/Footer'
import GoToTop from '@/components/shared/goToTop/GoToTop'
import Header from '@/components/shared/header/Header'
import React from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
     
        <Header />
        <main >{children}</main>
        <Footer />
        <GoToTop/>
      
    </div>
  )
}
