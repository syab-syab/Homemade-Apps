import data from './data/app-data.json'
import { appType } from '@/app/types/All.types'
import Header from '@/app/components/header';
import Applink from './components/applink';
import Accountlinks from './components/accountlinks';
import Footer from '@/app/components/footer'
import Pagination from './components/pagination';
import QrWrapper from './components/qrwrapper'
import Privacypolicylink from './components/privacypolicylink';

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

          {/* 広告 */}
          <a href="https://px.a8.net/svt/ejp?a8mat=453JBO+DAOJ5E+2Z0I+OCEXD" rel="nofollow">
            <img width="350" height="80" alt="" src="https://www22.a8.net/svt/bgt?aid=250427796804&wid=001&eno=01&mid=s00000013869004089000&mc=1" />
            </a>
          <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=453JBO+DAOJ5E+2Z0I+OCEXD" alt="" />

          
          {/* 別のコンポーネントを作ってページネーションを実装 */}
          {/* 表示は5件ずつ */}
          <Pagination data={appData} />
          {/* <Accountlinks /> */}
        </div>

        <p className='sub-sub'>随時追加予定</p>
        {/* <Accountlinks /> */}
      </main>

      <QrWrapper path="https://raw.githubusercontent.com/syab-syab/Homemade-Apps/refs/heads/main/app/img/qr-code-swapp.png" />

      {/* 広告 */}
      <a href="https://px.a8.net/svt/ejp?a8mat=453K3M+53DJ3M+5LNQ+5YJRM" rel="nofollow">メルカリ</a>
      <img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=453K3M+53DJ3M+5LNQ+5YJRM" alt=""></img>

      {/* プライバシーポリシーリンク */}
      <Privacypolicylink />

      {/* フッター */}
      <Footer />
    </>
  )
}
