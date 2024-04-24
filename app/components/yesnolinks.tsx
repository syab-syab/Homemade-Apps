import Link from 'next/link';

type Props = {
  url: string
}

const Yesnolinks = (props: Props) => {
  return (
    <div  className="ynCOntainer">
    <div className="links">
      <div className="externalLinkContainer">
        <Link className="externalLink" href={props.url} target="_blank">
          はい(外部リンクへ)
        </Link>              
      </div>
      <div className="externalLinkContainer">
        <Link className="externalLink" href="/">
          いいえ(TOPへ)
        </Link>              
      </div>            
    </div>
  </div>
  )
}

export default Yesnolinks