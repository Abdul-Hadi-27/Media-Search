import { useDispatch, useSelector } from "react-redux"
import { clearResults, setError, setLoading, setResults } from "../redux/features/searchSlice"
import { store } from "../redux/store"
import { useEffect } from "react"
import { fetchGIF, fetchPhotos, fetchVideos } from '../api/mediaApi'
import ResultCard from "./ResultCard"

const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(() => {
        if(!query) return;
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = [];
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                         src: item.urls.full,
                        url:item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                         url:item.url
                    }))

                }
                if (activeTab == 'gif') {
                    let response = await fetchGIF(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title || 'GIF',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url,
                         url:item.url
                    }))


                }
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()

    }, [query, activeTab,dispatch])
    if(error) return <h1>Error</h1>
    if (loading) return  <h1 className="text-center text-2xl">Loading...</h1>


    return (
        <div className="flex w-full justify-between flex-wrap gap-6 overflow-auto px-10">
           
           
            {results.map((item,idx)=>{

                return <div key={idx}>
                     <h1 className="absolute tracking-widest top-53 text-lg left-150 mb-10 mt-4">Showing results for '{query}'</h1>
                    
                   <ResultCard item={item}/>
                </div>
            })}

        </div>
    )
}

export default ResultGrid