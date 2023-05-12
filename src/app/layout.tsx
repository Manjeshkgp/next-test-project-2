import "./globals.css";
import { Metadata } from "next";
import Providers from "../components/Themeprovider";
import Themechanger from "../components/Themechanger";

export const metadata: Metadata = {
  title: "Users List App",
  description: "Manually Created",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <div className="overflow-x-hidden bg-white text-black dark:bg-black dark:text-white">
            <Themechanger />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
