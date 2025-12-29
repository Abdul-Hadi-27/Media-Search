import { useDispatch } from "react-redux"
import { removeCollection, removeToast } from "../redux/features/collectionSlice"

const CollectionCard = ({item}) => {
     const dispatch=useDispatch()
     const removeFromCollection=()=>{
        dispatch(removeCollection(item))
        dispatch(removeToast())
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
                    dispatch(removeFromCollection(item))
                   console.log('removed')
                }}
                    className='bg-indigo-600 text-white font-medium rounded  active:scale-95 cursor-pointer px-3 py-1'>Remove</button>

            </div>
        </div>
  )
}

export default CollectionCard