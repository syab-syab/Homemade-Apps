import data from "../../data/app-data.json"
import { appType } from "@/app/types//All.types"
import Link from 'next/link';
import { YouTubeEmbed } from '@next/third-parties/google'
import styles from "@/app/homemade/[id]/page.module.css"
import Footer from '@/app/components/footer'

const page = ({ params }: { params: { id: number } }) => {
  // anyを型にするのはよくない感じがするから
  // if文とかで分岐させてデフォルトで返すappTypeのデータを用意しておく
  const appData: appType | any = data["app"].find(d => d.id == params.id)
  const techs: Array<string> = appData.tech

  console.log(appData.description)

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
          {/* { appData.tech } */}
          {
            techs.map(t => {
              return (
                <span
                  key={t}
                  style={{
                    marginRight: "1rem",
                    border: "0.5rem dashed black"
                  }}
                  >
                    {t}
                  </span>
              )
            })
          }
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
          <p style={{ fontWeight: "bold" }}>
            アプリを開きますか？
          </p>
          <div className={styles.links}>
            <Link className={styles.externalLink} href={appData.url} target="_blank">
              はい
            </Link>
            <Link className={styles.externalLink} href="/">
              いいえ(TOPへ)
            </Link>             
          </div>
       
        </div>
        <div>
          <p className={styles.appDescription}>
            {/* 改行できないのをなんどかする */}
            {appData.description}
          </p>
          <div className={styles.links}>
            <Link className={styles.externalLink} href={appData.qiita} target="_blank">
              Qiita
            </Link>
            <Link className={styles.externalLink} href={appData.zenn} target="_blank">
              Zenn
            </Link>
          </div>          
        </div>
      </main>

      <Footer />
    </>
  )
}

export default page