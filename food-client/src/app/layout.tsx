import {ThemeProvider} from './theme'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ToastContainer } from "react-toastify";

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
        {/* <ToastContainer /> */}
      </ThemeProvider>
      </body>
    </html>
  )
}
