import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Tutoredit"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>    
    </html>
  );
}
