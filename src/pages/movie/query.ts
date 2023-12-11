export const fetchMovieDetail = async (movieId:string) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmM2ZDlkY2U0OGY3MzBiOGRmZjVjODhhOTJlOWIwMSIsInN1YiI6IjY1NmVjMmVmODgwNTUxMDBhZWVhYTgxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tz4YZb7paazbsajkKmKWFxOm_aSHPpeupCA3rpmOosQ' 
        },
    })

    const data = res.json();
    return data
}