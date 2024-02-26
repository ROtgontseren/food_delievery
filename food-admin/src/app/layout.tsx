import ThemeProvider from "@/theme";
import "./globals.css";
import CategoryProvider from "@/context/categoryContext";
import FoodProvider from "@/context/foodProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CategoryProvider>
            <FoodProvider>
              {children}
            </FoodProvider>
          </CategoryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
