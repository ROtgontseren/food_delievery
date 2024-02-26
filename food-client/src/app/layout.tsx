import {ThemeProvider} from './theme'
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ToastContainer } from "react-toastify";

import './scss/globals.scss'
import { UserProvider } from '@/context/Userprovider';
import  CategoryProvider  from '@/context/categoryProvider';
import FoodProvider from '@/context/foodProvider';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider>
      <FoodProvider>
        <UserProvider>
          <CategoryProvider>
         <Header/>
         {children}
         <Footer/>
         </CategoryProvider>
        {/* <ToastContainer /> */}
        </UserProvider>
        </FoodProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
