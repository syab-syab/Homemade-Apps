import data from './data/app-data.json'
import { appType } from '@/app/types/All.types'
import Header from '@/app/components/header';
import Applink from './components/applink';
import Accountlinks from './components/accountlinks';
import Footer from '@/app/components/footer'

// トップページ

const appData: Array<appType> = data["app"]

const imgPath = 'https://raw.githubusercontent.com/syab-syab/Homemade-Apps/main/app/img/'

// メタデータを設定する

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
          {
            appData.map(app => {
              return (
                <Applink
                  path={imgPath + app.image}
                  id={app.id}
                  abbreviation={app.abbreviation}
                  key={app.id}
                />
              )
            })
          }          
        </div>
        <p className='sub-sub'>随時追加予定</p>
      </main>
      {/* <Accountlinks /> */}
      {/* フッター */}
      <Footer />
    </>
  )
}
