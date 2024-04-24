import { YouTubeEmbed } from '@next/third-parties/google'

type Props = {
  movie: string
}

const Videosection = (props: Props) => {
  return (
    // div2つも要らないかも
    <div>
      <div>
        <YouTubeEmbed
          videoid={props.movie}
          params="controls=0"
          style="
          margin: 0 auto;
          border-style: double;
          border-width: thick;
          box-shadow: 3px 5px black, 6px 8px black;
          "
        />
      </div>
    </div>
  )
}

export default Videosection