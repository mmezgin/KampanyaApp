import React from 'react'
import './index.styles.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import BackArrow from '../components/SVG/BackArrow'

export default () => {
  const navigate = useNavigate()
  const data = useSelector((state) => state.DateReducer.data)

  return (
    <div className='page'>
      <div className='main-container'>
        <div className='header'>
          <div className='svg-backarrow'
            onClick={() => navigate(-1)}>
            <BackArrow />
          </div>
          <p className='header__title header__title--settings'>
            {'Kampanya Ürünleri (' + data?.name + ')'}
          </p>
        </div>
        <div className='wrap-con'>
          <Card
            source={'https://cdn.discordapp.com/attachments/870456776338862091/935965239898415144/unknown.png'}
            title={'Erkek Bot Deri'}
            price={'399'} />
          <Card
            source={'https://cdn.discordapp.com/attachments/870456776338862091/935965325743235112/unknown.png'}
            title={'Hakiki Haki Bot'}
            price={'599'} />
          <Card
            source={'https://cdn.discordapp.com/attachments/870456776338862091/935965387957366794/unknown.png'}
            title={'Prenses Kız Botu'}
            price={'299'} />
          <Card
            source={'https://cdn.discordapp.com/attachments/870456776338862091/935965461722587246/unknown.png'}
            title={'Yünlü Bot'}
            price={'499'} />
        </div>
      </div>
    </div>
  )
}