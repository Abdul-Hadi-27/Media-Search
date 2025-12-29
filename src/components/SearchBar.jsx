import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
      dispatch(setQuery(text))
        setText('')

    }
    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex bg-(--c1) gap-5 p-10'>
                <input onChange={(e) => {
                    setText(e.target.value)
                }}
                    value={text}
                    required className='w-full border-2 px-4 py-2 text-xl rounded  outline-none'
                    type="text" placeholder='Search anything...' />
                <button className=' cursor-pointer border-2 px-4 py-2 text-xl rounded  outline-none active:scale-95'  >Search</button>

            </form>
        </div>
    )
}

export default SearchBar