type Props = {
  title: string
  path: string
  subtitle: string
}


const Header = (props: Props) => {
  return (
    <header className='sa-header'>
    <div className='header-image'>
      {/* 画像のリンクを外部リンクに頼らないようにする */}
        <img src={ props.path } alt="image" />
    </div>
    <h1 className="site-title">{ props.title }</h1>
    {
      props.subtitle &&  <p className="sub-title">{props.subtitle}</p>
    }
  </header>
  )
}

export default Header