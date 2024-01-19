import {ThemeProvider} from './theme'
import Header from '@/components/header';
import Footer from '@/components/footer';

import './scss/globals.scss'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider>
         <Header/>
         {children}
         <Footer/>
      </ThemeProvider>
      </body>
    </html>
  )
}
