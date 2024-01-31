import {ThemeProvider} from './theme'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ToastContainer } from "react-toastify";

import './scss/globals.scss'
import { UserProvider } from '@/context/Userprovider';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider>
        <UserProvider>
         <Header/>
         {children}
         <Footer/>
        {/* <ToastContainer /> */}
        </UserProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
