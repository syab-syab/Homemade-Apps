type Props = {
  path: string
}

const qrwrapper = (props: Props) => {
  return (
    <div>
      <p className='sub-sub'>
        お友達にもここを
        <br />
        教えてあげて下さいね。
      </p>
      <div className="qr-image">
        <img src={props.path} alt="qr-code" />
      </div>
    </div>
  )
}

export default qrwrapper