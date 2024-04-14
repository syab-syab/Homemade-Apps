import './globals.css'
// import { Inter } from 'next/font/google'
import { DotGothic16 } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

const DotFonts = DotGothic16({
  weight: "400",
  preload: false,
})

export const metadata = {
  title: 'スイスアーミーアプリ',
  description: '自作のツール系アプリまとめ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={DotFonts.className}>{children}</body>
    </html>
  )
}
