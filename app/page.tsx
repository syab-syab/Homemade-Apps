// import Image from 'next/image'
// import styles from './page.module.css'
import data from './data/app-data.json'

// トップページ
type appType = {
  id: number,
  name: string,
  description: string,
  image: string,
  movie: string,
  qiita: string,
  zenn: string
}

const appData = data["app"]

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
                  {/* アプリ名を個別ページへのリンクにする */}
                  {app.name}
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
