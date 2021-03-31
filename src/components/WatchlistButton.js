import PropTypes from 'prop-types'


const WatchlistButton = ({ color, text, onClick }) => {
    return (
    <button 
        onClick={onClick}
        style={{ backgroundColor: color }} 
        className='btn'>{text}</button> 
    )
}

WatchlistButton.defaultProps = {
    color: 'black',
}

WatchlistButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default WatchlistButton

