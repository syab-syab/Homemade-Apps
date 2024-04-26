import './globals.css'
// import { Inter } from 'next/font/google'
import { DotGothic16 } from 'next/font/google'
import Favicon from '@/public/favicon.ico'
import Ogp from '@/public/swissArmyOgp.png'

// const inter = Inter({ subsets: ['latin'] })

const DotFonts = DotGothic16({
  weight: "400",
  preload: false,
})

const title: string = 'スイスアーミーアプリ'
const description: string = '自作のツール系アプリまとめ'

// 本番環境url
const url: string = "https://homemade-apps.vercel.app/"

export const metadata = {
  title: title,
  description: description,
  icons: [{ rel: 'icon', url: Favicon.src }],
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    images: [
      {
        url: Ogp.src,
        width: 800,
        height: 600,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
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
