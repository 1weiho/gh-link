import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "GH Link",
  description: "A Link in Bio website configured with only a JSON file",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
