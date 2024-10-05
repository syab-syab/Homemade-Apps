"use client"

import Applink from "./applink"
import { useState } from "react"

type Props = {
  data: any
}

const Pagination = (props: Props) => {
  // pageNumに格納されているページ数がアクティブになるようにスタイルを整える
  const [pageNum, setPageNum] = useState<number>(0)

  const handlePrevPageNum = (): void => {
    if (pageNum > 0) {
      setPageNum(pageNum-1)
    }
  }

  const handleNextPageNum = (): void => {
    if (pageNum < (props.data.length / 5) - 1) {
      setPageNum(pageNum+1)
    }
  }

  // データを取ってきて配列にする
  // 配列の要素数を length で数える
  // x刻みで区切る(10とか)
  // 要素数 / x = ページ数
  // console.log(props.data)
  let lastPage: number = props.data.length / 5
  let pageArr: number[] = []
  for (let i: number = 1; i < lastPage + 1; i ++) {
    pageArr.push(i)
  }

  // 1ページ5件ずつ表示
  // 各ページの数字をクリックして対応するデータを表示していく
  // props.dataの配列を5個ずつに分けたグループにして配列にする

  const dataArrSlice = (arr: any[], num: number): any[] => {
    let copyArr: any[] = arr.slice()
    let tmpArray: any[] = []
    while (copyArr.length > 0) {
      tmpArray.push(copyArr.splice(0, num))
    }
    return tmpArray
  }

  const pageData: any[] = dataArrSlice(props.data, 5)

  const allPageLength: number = props.data.length / 5

  const imgPath = 'https://raw.githubusercontent.com/syab-syab/Homemade-Apps/main/app/img/'

  return (
    <>
      {
        pageData[pageNum].map((d: any) => {
          return (
            <Applink
            path={imgPath + d.image}
            id={d.id}
            abbreviation={d.abbreviation}
            key={d.id}
            />
          )
        })
      }
      <div className='pagination'>
        {
          pageNum+1 === 1 ?
          <div className="pagination-nonactive">&lt;</div> :
          <div onClick={handlePrevPageNum}>&lt;</div>
        }
        <div>
          {/* {pageNum+1}/{allPageLength} */}
          |
        </div>
        {
          pageNum+1 >= allPageLength ?
          <div className="pagination-nonactive">&gt;</div> :
          <div onClick={handleNextPageNum}>&gt;</div>
        }
      </div>
    </>
  )
}

export default Pagination