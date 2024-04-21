import Link from "next/link"

const footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link
          className="footer-external-link link-style"
          href="https://twitter.com/nomeatnolifeno1"
          target="_blank"
        >
          X(旧Twitter)
        </Link>
        <Link
          className="footer-external-link link-style"
          href="https://www.youtube.com/channel/UCy1-DE9tWCWgQE82JYJGfLA"
          target="_blank"
        >
          Youtube
        </Link>
      </div>
      <span style={{  fontSize: "2rem", "fontWeight": "bold" }}>©スイスアーミーアプリ</span>
    </footer>
  )
}

export default footer