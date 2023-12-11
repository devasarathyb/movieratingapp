export const fetchMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
        headers:{
            
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmM2ZDlkY2U0OGY3MzBiOGRmZjVjODhhOTJlOWIwMSIsInN1YiI6IjY1NmVjMmVmODgwNTUxMDBhZWVhYTgxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tz4YZb7paazbsajkKmKWFxOm_aSHPpeupCA3rpmOosQ' 
        },

    })
    // const data = res.json()
    // console.log(res.json())
    // return data

    return res.json()

    
}
export const fetchTvShows = async () => {
    const res = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
        headers:{
            
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmM2ZDlkY2U0OGY3MzBiOGRmZjVjODhhOTJlOWIwMSIsInN1YiI6IjY1NmVjMmVmODgwNTUxMDBhZWVhYTgxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tz4YZb7paazbsajkKmKWFxOm_aSHPpeupCA3rpmOosQ' 
        },

    })
    // const data = res.json()
    // console.log(res.json())
    // return data
    return res.json()
    
}