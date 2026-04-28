import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '@/components/AuthProvider'
 
export const metadata: Metadata = {
  title: 'ABC Technologies — Global Trading & Intelligent Infrastructure Solutions',
  description: 'Your single-window partner for global solutions in trading, engineering, and technology delivery.',
}
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark text-white antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
 