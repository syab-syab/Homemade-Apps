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
      </header>

      <main className={styles.main}>
        <div className={styles.videoSectionContainer}>
          <div className={styles.videoSection}>
            <YouTubeEmbed
              videoid={appData.movie}
              params="controls=0"
              style="
              margin: 0 auto;
              border-style: double;
              border-width: thick;
              "
            />
          </div>
        </div>

        <div>
          <p className={styles.appDescription}>
            {/* 改行できないのをなんどかする */}
            {appData.description}
          </p>
          {/* <div className={styles.links}>
            <div className={styles.externalLinkContainer}>
              <Link className={styles.externalLink} href={appData.qiita} target="_blank">
                Qiita
              </Link>              
            </div>
            <div className={styles.externalLinkContainer}>
              <Link className={styles.externalLink} href={appData.zenn} target="_blank">
                Zenn
              </Link>
            </div>
          </div> */}
        </div>


        <div>
          <p style={{ fontWeight: "bold" }}>
            アプリを開きますか？
          </p>
          <div  className={styles.ynCOntainer}>
            <div className={styles.links}>
              <div className={styles.externalLinkContainer}>
                <Link className={styles.externalLink} href={appData.url} target="_blank">
                  はい(外部リンクへ)
                </Link>              
              </div>
              <div className={styles.externalLinkContainer}>
                <Link className={styles.externalLink} href="/">
                  いいえ(TOPへ)
                </Link>              
              </div>            
          </div>
          </div>
        </div>

        
        
      </main>

      <Footer />
    </>
  )
}

export default page