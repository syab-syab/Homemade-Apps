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

// メタデータを設定する

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <header className='sa-header'>
        <div className='header-image'>
          {/* 画像のリンクを外部リンクに頼らないようにする */}
          <img src={ imgPath + "saa-image.png"} alt="image" />
        </div>
        <h1 className="site-title">スイスアーミーアプリ</h1>
        <p className="sub-title">便利なツール系アプリ</p>
      </header>
      {/* メイン */}
      <main className="main">
        <div className='main-section'>
          {
            appData.map(app => {
              return (
                // imgを左にして
                // Linkを右に配置する
                // imgがボーダーからはみ出ないようにする
                <div className='app-bar' key={app.id}>
                  <div className='app-image'>
                    {/* 画像のリンクを外部リンクに頼らないようにする */}
                    <img src={ imgPath + app.image} alt="image" />
                  </div>
                  
                  {/* アプリ名を個別ページへのリンクにする */}
                  <div className='app-name-container'>
                    <Link className='
                      link-style
                      app-name
                    ' href={`/homemade/${app.id}`}>
                      {app.abbreviation}
                    </Link>                    
                  </div>

                </div>
              )
            })
          }          
        </div>
        <p className='sub-sub'>随時追加予定</p>
      </main>
      {/* フッター */}
      <Footer />
    </>
  )
}
