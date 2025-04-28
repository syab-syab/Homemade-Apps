import data from "../../data/app-data.json"
import { appType } from "@/app/types//All.types"
import Link from 'next/link';
import { YouTubeEmbed } from '@next/third-parties/google'
import styles from "@/app/homemade/[id]/page.module.css"
import Header from "@/app/components/header"
import Videosection from "@/app/components/videosection";
import Yesnolinks from "@/app/components/yesnolinks";
import Accountlinks from "@/app/components/accountlinks";
import Footer from '@/app/components/footer'

// スタイルはstyled-componentsを使う

const page = ({ params }: { params: { id: number } }) => {
  // anyを型にするのはよくない感じがするから
  // if文とかで分岐させてデフォルトで返すappTypeのデータを用意しておく
  const appData: appType | any = data["app"].find(d => d.id == params.id)
  // techsはもう要らない
  // const techs: Array<string> = appData.tech

  //ページごとのメタデータを設定する
  // 例) YEN$CONVERSION | スイスアーミーアプリ
  // というタイトルになるようにする 

  const imgPath = 'https://raw.githubusercontent.com/syab-syab/Homemade-Apps/main/app/img/'

  // des=description
  const des: Array<string> = appData.description.split("\n")

  return (
    <>
      <Header
        title={appData.name}
        path={imgPath + appData.image}
        subtitle=""
      />

      <main className={styles.main}>
        <Videosection movie={appData.movie} />
        <div className={styles.descriptionContainer}>
          {
            des.map(d => {
              return (
                <p key={d} className={styles.appDescription}>
                {d}
              </p>
              )
            })
          }
        </div>
          {/* 広告 */}
          <a href="https://px.a8.net/svt/ejp?a8mat=453JBO+DAOJ5E+2Z0I+OCEXD" rel="nofollow">
            <img width="350" height="80" alt="" src="https://www22.a8.net/svt/bgt?aid=250427796804&wid=001&eno=01&mid=s00000013869004089000&mc=1" />
            </a>
          <img width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=453JBO+DAOJ5E+2Z0I+OCEXD" alt="" />
        <div>
          <p className={styles.ynQuestion}>
            アプリを開きますか？
          </p>
          <Yesnolinks url={appData.url} />
        </div>
      {/* 広告 */}
      <a href="https://px.a8.net/svt/ejp?a8mat=453K3M+53DJ3M+5LNQ+5YJRM" rel="nofollow">メルカリ</a>
      <img width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=453K3M+53DJ3M+5LNQ+5YJRM" alt=""></img>
      
      </main>

      {/* <Accountlinks /> */}

      <Footer />
    </>
  )
}

export default page