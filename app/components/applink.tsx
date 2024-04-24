import Link from 'next/link';

type Props = {
  path: string
  id: number
  abbreviation: string
}


const Applink = (props: Props) => {
  return (
    // PCのような大画面表示でスタイルを変える
    <div
      className='app-bar'
    >
      <div className='app-image'>
        {/* 画像のリンクを外部リンクに頼らないようにする */}
        <img src={props.path} alt="image" />
      </div>
    
      {/* アプリ名を個別ページへのリンクにする */}
      <div className='app-name-container'>
        <Link className='
          link-style
          app-name
        ' href={`/homemade/${props.id}`}>
          {props.abbreviation}
        </Link>                    
      </div>
    </div>
  )
}

export default Applink