import './globals.css'

export const metadata = {
  title: 'AI Business Builder — Build. Sell. Scale.',
  description: 'A practical AI entrepreneurship program built around real skills, real projects, and real-world validation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
