import data from "../../data/app-data.json"
// import { appType } from "@/app/types//All.types"
import Link from 'next/link';
import { YouTubeEmbed } from '@next/third-parties/google'
import styles from "@/app/homemade/[id]/page.module.css"

const page = ({ params }: { params: { id: number } }) => {
  // 型をappTypeに合わせられない
  const appData: any = data["app"].find(d => d.id == params.id)

  console.log(params.id)
  return (
    <>
      <header>
        <h1 className={styles.appName}>
          {appData.name}
        </h1>
        <p className={styles.useTech}>
          使用した技術...
          {/* 配列の要素をタグで囲う */}
          { appData.tech }
        </p>        
      </header>

      <main className={styles.main}>
        <div className={styles.videoSection}>
          <YouTubeEmbed
            videoid={appData.movie}
            params="controls=0"
            style="
            margin: 0 auto;
            "
          />
        </div>
        <div>
          <p>
            アプリを開きますか？
          </p>
            <Link href={appData.url}>
              はい
            </Link>
            |
            <Link href="/">
              いいえ(TOPへ)
            </Link>        
        </div>
        <div>
          <p className="app-description">
            {/* 改行できないのをなんどかする */}
            {appData.description}
          </p>
          <div>
            <Link href={appData.qiita}>
              Qiita
            </Link>
            |
            <Link href={appData.zenn}>
              Zenn
            </Link>
          </div>          
        </div>
      </main>


    </>
  )
}

export default page