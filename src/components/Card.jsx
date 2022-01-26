import '../screens/index.styles.scss'
export default ({ source, title, price }) => {
  return (
    <div className='card'>
      <img
        src={source}
        className='card__img' />
      <p className='card__title'>{title}</p>
      <p className='card__price'>{price + ' ₺'}</p>
    </div>
  )
}