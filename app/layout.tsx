import { Providers } from "@/lib/providers";
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/navBar/NavBar";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";

export const metadata: Metadata = {
  title: "Discount Dash",
  description: "Tu app de ofertas",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <NavBar />
          <Suspense fallback={<Loading />}>{props.children}</Suspense>
        </body>
      </html>
    </Providers>
  );
}
