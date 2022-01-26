import React, { useEffect, useState, useRef } from 'react'
import './index.styles.scss'
import Clock from '../components/SVG/Clock'
import { useNavigate } from 'react-router-dom'
import Countdown, { zeroPad, CountdownApi } from 'react-countdown'
import { useSelector } from 'react-redux'
export default () => {
  let ref1 = useRef()
  const data = useSelector((state) => state.DateReducer.data)
  const [timer, setTimer] = useState('')
  const [isSet, setIsSet] = useState(false)

  useEffect(() => {
    let str = data?.date + 'T' + data?.time + ':00'
    setTimer(str)
    if (data?.date !== null) {
      setIsSet(true)
    }
    ref1.current.start()
  }, [data])
  useEffect(() => {

    ref1.current.start()
  }, [isSet])
  const navigate = useNavigate()

  const formatRenderer = ({ days, hours, minutes, seconds, }) => (
    <div className='timer'>
      <div className='timer__con'>
        <p className='timer__con__num'>{zeroPad(days)} </p>
        <p className='timer__con__date'>Gün</p>
      </div>
      <p className='timer__divider'>:</p>
      <div className='timer__con'>
        <p className='timer__con__num'>{zeroPad(hours)} </p>
        <p className='timer__con__date'>Saat</p>
      </div>
      <p className='timer__divider'>:</p>
      <div className='timer__con'>
        <p className='timer__con__num'>{zeroPad(minutes)} </p>
        <p className='timer__con__date'>DK</p>
      </div>
      <p className='timer__divider'>:</p>
      <div className='timer__con'>
        <p className='timer__con__num'>{zeroPad(seconds)} </p>
        <p className='timer__con__date'>SN</p>
      </div>
    </div>
  )

  return (
    <div className='page'>
      <div className='main-container'>
        <div className='header'>
          <p className='header__title'>
            Kampanya
          </p>
        </div>
        <div className='countdown-container'>
          <div className='svg-clock'>
            <Clock />
          </div>
          <p className='countdown-container__title'>Kalan Süre</p>
          {isSet ? <Countdown date={timer} renderer={formatRenderer} autoStart={true} ref={ref1} controlled={false} onComplete={() => navigate('/products')} />
            : <Countdown date={Date.now()} renderer={formatRenderer} ref={ref1} />}
        </div>
        <div className='buttons-container'>
          <div className='buttons-container__button buttons-container__button--stop'
            onClick={() => { ref1.current.pause() }}>
            <p className='button-text'>Geri Sayımı Durdur</p>
          </div>
          <div className='buttons-container__button buttons-container__button--restart'
            onClick={() => { ref1.current.start() }}>
            <p className='button-text'>Geri Sayımı Yeniden Başlat</p>
          </div>
        </div>
        <div className='button-bottom'
          onClick={() => navigate('/settings')}>
          <p className='button-text button-bottom__text'>Kampanya Ayarları</p>
        </div>
      </div>
    </div>
  )
}