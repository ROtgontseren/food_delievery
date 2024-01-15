import {ThemeProvider} from './theme'

import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
