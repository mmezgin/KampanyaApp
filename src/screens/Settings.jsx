import React, { useState, useEffect } from 'react'
import './index.styles.scss'
import BackArrow from '../components/SVG/BackArrow'
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Date_Action from '../Redux/Actions/Date_Action'

export default () => {
  const data = useSelector((state) => state.DateReducer.data)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [details, setDetails] = useState(
    {
      name: null,
      date: null,
      time: null
    }
  )
  useEffect(() => {
    setDetails(data)
  }, [data])

  return (
    <div className='main-container'>
      <div className='header'>
        <div className='svg-backarrow'
          onClick={() => navigate(-1)}>
          <BackArrow />
        </div>
        <p className='header__title header__title--settings'>
          Kampanya Kurulumu
        </p>
      </div>
      <div className='input-field'>
        <p className='input-field__title'>
          Kampanya Adı
        </p>
        <TextField
          className='input-field__textinput' variant="outlined"
          defaultValue={data?.name ? data?.name : null}
          onChange={(e) => {
            let tmp = { ...details }
            tmp.name = e.target.value
            setDetails(tmp)
          }} />
      </div>
      <div className='date-time-field'>
        <div className='date-block'>
          <p className='input-field__title'>Tarih</p>
          <Input type='date'
            defaultValue={data?.date ? data?.date : null}
            onChange={(e) => {
              let tmp = { ...details }
              tmp.date = e.target.value
              setDetails(tmp)
            }} />
        </div>
        <div className='time-block'>
          <p className='input-field__title'>Zaman</p>
          <Input type='time'
            defaultValue={data?.time ? data?.time : null}
            onChange={(e) => {
              let tmp = { ...details }
              tmp.time = e.target.value
              setDetails(tmp)
            }} />
        </div>
      </div>
      <div className='button-bottom button-bottom--start' onClick={() => {
        if (details.name && details.date && details.time) {
          let tmp = { ...details }
          setDetails(tmp)
          dispatch(Date_Action(details))
          navigate('/')
        } else {
          window.alert('Lütfen bütün alanları doldurunuz!')
        }
      }}>
        <p className='button-text button-bottom__text'>Başlat</p>
      </div>
    </div>
  )
}
