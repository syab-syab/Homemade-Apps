import { isNamedExportBindings } from "typescript"
import data from "../../data/app-data.json"
// import { appType } from "@/app/types//All.types"
import Link from 'next/link';

const page = ({ params }: { params: { id: number } }) => {
  // 型をappTypeに合わせられない
  const appData: any = data["app"].find(d => d.id == params.id)

  console.log(params.id)
  return (
    <div>
      <h1>
        {appData.name}
      </h1>
      <p>
        使用した技術...
        {/* 配列の要素をタグで囲う */}
        { appData.tech }
      </p>
      <div className="responsive">
        <iframe
          width="100%"
          height="100%"
          src={appData.movie}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
          ></iframe>
      </div>
      <p>
        アプリを開きますか？
      </p>
      <div>
        <Link href={appData.url}>
          はい
        </Link>
        |
        <Link href="/">
          いいえ(TOPへ)
        </Link>
      </div>
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
  )
}

export default page