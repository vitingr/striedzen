import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import "../../styles/globals.scss"

export const metadata: Metadata = {
  title: "Striedzen",
  description: "A melhor brand do seu nicho"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='pt-br'>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}