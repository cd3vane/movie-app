import { useState } from 'react'

const SearchMovies = ( {onSearch} ) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please type in a movie name')
            return
        }

        onSearch({text})
        
        setText('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Search</label>
                <input type="text" placeholder='Enter a movie title'
                value={text} onChange={(e) => setText(e.target.value)}/>
                 <input type="submit" className='btn btn-block' value='Search'/>
            </div>
           
        </form>
    )
}

export default SearchMovies
