import { Toaster } from "@/components/ui/sonner";
import "./globals.css";



export const metadata = {
  title: "Smart Tracker Agent",
  description: "Drops alert!!",
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
