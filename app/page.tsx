// import Image from 'next/image'
// import styles from './page.module.css'
import data from './data/app-data.json'
import Image from "next/image";
import ImagePath from '../app/img/yen-dollar.png'
import Link from 'next/link';

// トップページ

const appData = data["app"]

// const imgPath = '../app/img/yen-dollar.png'

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <header>
        <h1 className="site-title">スイスアーミーアプリ</h1>
        <p className="sub-title">便利なツール系アプリ</p>        
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
                    <img src={`../app/img/${app.image}`} alt="image" />
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
      <footer>
        <span className="copy">©スイスアーミーアプリ</span>
      </footer>
    </>
  )
}
