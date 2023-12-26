import React from 'react'
import './EconMetaTable.css'

export default function EconMetaTable() {
  return (
    <>
      <table className="econ-meta-table-styled-table">
        <tr>
          <th>목차</th>
          <th>데이터</th>
        </tr>
        <tr>
          <th>STEP1. 경제라는 무대</th>
          <th></th>
        </tr>
        <tr>
          <td>금융경제</td>
          <td>
            <div>금리</div>
            <div>통화량</div>
          </td>
        </tr>
        <tr>
          <td>실물경제</td>
          <td>경제성장률</td>
        </tr>
        <tr>
          <td>종합경제</td>
          <td>물가</td>
        </tr>
        <tr>
          <td>국제경제</td>
          <td>
            <div>환율</div>
            <div>국제수지</div>
          </td>
        </tr>

        <tr>
          <th>STEP2. 무대 위 경제 주인공들</th>
          <th></th>
        </tr>
        <tr>
          <td>개인</td>
          <td>
            <div>실업률</div>
            <div>가계부채</div>
          </td>
          
        </tr>
        <tr>
          <td>기업</td>
          <td>투자율</td>
        </tr>
        <tr>
          <td>시중은행</td>
          <td>연체율</td>
        </tr>
        <tr>
          <td>중앙은행</td>
          <td>기준금리</td>
        </tr>
        <tr>
          <td>정부</td>
          <td>재정수지</td>
        </tr>

        <tr>
          <th>STEP3. 이들이 벌이는 한 편의 연극</th>
          <th></th>
        </tr>
        <tr>
          <td>일반 CYCLE</td>
          <td>OECD 경기순환지표</td>
        </tr>
        <tr>
          <td>선진국 CYCLE</td>
          <td>경제성장률</td>
        </tr>
        <tr>
          <td>신흥국 CYCLE</td>
          <td>물가</td>
        </tr>
      </table>
    </>
  )
}