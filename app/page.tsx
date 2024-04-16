// import Image from 'next/image'
// import styles from './page.module.css'
import data from './data/app-data.json'
import Image from "next/image";
import ImagePath from '../app/img/yen-dollar.png'
import Link from 'next/link';
import { appType } from '@/app/types/All.types'
import Footer from '@/app/components/footer'

// トップページ

const appData: Array<appType> = data["app"]

const imgPath = 'https://raw.githubusercontent.com/syab-syab/Homemade-Apps/main/app/img/'

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <header>
        <h1 className="site-title">スイスアーミーアプリ</h1>
        <p className="sub-title">便利なツール系アプリ</p>
        <p className='sub-sub'>随時追加</p>
      </header>
      {/* メイン */}
      <main className="main">
        <div className='main-section'>
          {
            appData.map(app => {
              return (
                // divにした方が良いかも
                <p className='app-data' key={app.id}>
                  <span className='app-image'>
                    {/* 画像が表示できない */}
                    <img src={ imgPath + app.image} alt="image" />
                  </span>
                  
                  {/* アプリ名を個別ページへのリンクにする */}
                  <Link href={`/homemade/${app.id}`}>
                    {app.abbreviation}
                  </Link>
                </p>
              )
            })
          }          
        </div>

      </main>
      {/* フッター */}
      <Footer />
    </>
  )
}
