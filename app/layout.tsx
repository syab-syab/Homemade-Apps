import './globals.css'
// import { Inter } from 'next/font/google'
import { DotGothic16 } from 'next/font/google'
import Favicon from '@/public/favicon.ico'

// const inter = Inter({ subsets: ['latin'] })

const DotFonts = DotGothic16({
  weight: "400",
  preload: false,
})

// 本番環境url
// const url = "https://homemade-apps.vercel.app/"

export const metadata = {
  title: 'スイスアーミーアプリ',
  description: '自作のツール系アプリまとめ',
  icons: [{ rel: 'icon', url: Favicon.src }],
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
