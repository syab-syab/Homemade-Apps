import Link from "next/link"

const Accountlinks = () => {
  return (
    // 後で改めてスタイルを変更する
       <div className="footer-links">
        <div className="footer-external-link-container">
          <Link
            className="footer-external-link link-style"
            href="https://twitter.com/nomeatnolifeno1"
            target="_blank"
          >
            X(旧Twitter)
          </Link>
        </div>
        <div className="footer-external-link-container">
          <Link
            className="footer-external-link link-style"
            href="https://www.youtube.com/channel/UCy1-DE9tWCWgQE82JYJGfLA"
            target="_blank"
          >
            Youtube
          </Link>          
        </div>
      </div> 
  )
}

export default Accountlinks