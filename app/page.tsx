import data from './data/app-data.json'
import { appType } from '@/app/types/All.types'
import Header from '@/app/components/header';
import Applink from './components/applink';
import Accountlinks from './components/accountlinks';
import Footer from '@/app/components/footer'
import Pagination from './components/pagination';
import QrWrapper from './components/qrwrapper'

// トップページ

const appData: Array<appType> = data["app"]

const imgPath = 'https://raw.githubusercontent.com/syab-syab/Homemade-Apps/main/app/img/'

// メタデータを設定する

const latestApp = appData[appData.length-1]

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <Header
        title="スイスアーミーアプリ"
        path={imgPath + "saa-image.png"}
        subtitle="便利なツール系アプリまとめ"
      />
      {/* メイン */}
      <main className="main">
        <div className='main-section'>
          <div className='latest-app'>
            <span className='new-mark'>NEW!</span>
            <Applink
              path={imgPath + latestApp.image}
              id={latestApp.id}
              abbreviation={latestApp.abbreviation}
              key={latestApp.id}
            />
          </div>
          
          {/* 別のコンポーネントを作ってページネーションを実装 */}
          {/* 表示は5件ずつ */}
          <Pagination data={appData} />
          {/* <Accountlinks /> */}
        </div>

        <p className='sub-sub'>随時追加予定</p>
        {/* <Accountlinks /> */}
      </main>

      <QrWrapper path="https://raw.githubusercontent.com/syab-syab/Homemade-Apps/refs/heads/main/app/img/qr-code-swapp.png" />
      
      {/* フッター */}
      <Footer />
    </>
  )
}
