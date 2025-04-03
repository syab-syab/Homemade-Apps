import './globals.css'
// import { Inter } from 'next/font/google'
import { DotGothic16 } from 'next/font/google'
import Favicon from '@/public/favicon.ico'
import Ogp from '@/public/swissArmyOgp.png'
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from 'next/script';

// const inter = Inter({ subsets: ['latin'] })

const DotFonts = DotGothic16({
  weight: "400",
  preload: false,
})

const title: string = 'スイスアーミーアプリ'
const description: string = 'ツール系アプリまとめ'

// 本番環境url
const url: string = "https://homemade-apps.vercel.app/"

{/* <meta name="google-adsense-account" content="ca-pub-3593535148836855"> */}

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
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}></meta>
      </head>
      <body className={DotFonts.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_APP_GOOGLE_ANALYTICS_PASS ?? ""} />
    </html>
  )
}
