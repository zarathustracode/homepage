import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
  return (
    <div>
        <button 
        onClick={onClick}
        className='btn bg-black text-red-50'>{text}</button>
    </div>
  )
}

Button.defaultProps = {
    text: 'New Button'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button