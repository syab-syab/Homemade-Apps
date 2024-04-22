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

  // console.log(appData.description)

  // console.log(params.id)

  //ページごとのメタデータを設定する
  // 例) YEN$CONVERSION | スイスアーミーアプリ
  // というタイトルになるようにする 

  const imgPath = 'https://raw.githubusercontent.com/syab-syab/Homemade-Apps/main/app/img/'

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerImage}>
          {/* 画像のリンクを外部リンクに頼らないようにする */}
          <img src={ imgPath + appData.image} alt="image" />
        </div>
        <h1 className={styles.appName}>
          {appData.name}
        </h1>
        <div className={styles.useTech}>
          <p>
            使用した技術...            
          </p>
          {/* 配列の要素をタグで囲う */}
          {/* { appData.tech } */}
          <div className={styles.techsContainer}>
            {
              techs.map(t => {
                return (
                  <div
                    className={styles.tech}
                    key={t}
                    style={{
                      marginRight: "1rem",
                      border: "0.5rem dashed black"
                    }}
                    >
                      {t}
                    </div>
                )
              })
            }            
          </div>

        </div>        
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