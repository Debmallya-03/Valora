import { Toaster } from "@/components/ui/sonner";
import "./globals.css";



export const metadata = {
  title: "Valora",
  description: "Drops alert!!",
   verification: {
    google: "bOdJyJJpTxBhW1markazU08SEWm_OHWMsgXNLXOAi8Q", 
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster richColors />
      </body>
    </html>
  );
}
