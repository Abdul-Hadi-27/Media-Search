import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {
    const dispatch = useDispatch()
    const addToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
    }
    return (
        <div className='w-[18vw]  relative h-80 bg-white rounded-xl overflow-hidden'>
            <div className='h-full'>
                <a href={item.url} target='_blank' className='h-full'>
                    {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} /> : ''}
                    {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                    {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} /> : ''}
                </a>
            </div>
            <div id='bottom' className='text-white  w-full py-6 px-4 absolute bottom-0 flex justify-between gap-3 items-center'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title} </h2>
                <button onClick={() => {
                    addToCollection(item)
                }}
                    className='bg-indigo-600 text-white font-medium rounded  active:scale-95 cursor-pointer px-3 py-1'>Save</button>

            </div>
        </div>
    )
}

export default ResultCard