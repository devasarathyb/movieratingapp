import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Grid, Header, Image, List, Loader, Segment } from "semantic-ui-react"
import { fetchMovieDetail } from "./query"

export const Movie = () => {
    const {id} = useParams<string>()

    if(!id){
        return <div>Invalid Movie ID</div>
    }

    const {data, isLoading} = useQuery({queryKey:["movie"], queryFn:()=>fetchMovieDetail(id)})

    if(isLoading) {
        return <Loader active/>
    }

    return(
        <div style={{marginTop:50}}> 
            <Segment>
                <Header>
                    {data.title}
                </Header>
                <Grid columns={2} divided textAlign="left" style={{marginTop:20}} >
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"100%"}}>
                                <Image src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} size="medium" centered/>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <List>
                                <List.Item>
                                    <List.Header>Is the movie for adults:</List.Header>
                                    {data.adult?"Yes": "No"}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Budget of the movie</List.Header>
                                    {data.budget}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Genere</List.Header>
                                    {data.genres.map((genre:any) => <List.Item key={genre.id}>{genre.name}</List.Item>)}
                                </List.Item>
                                <List.Item>
                                    <List.Header>IMDB ID:</List.Header>
                                    {data.imdb_id}
                                </List.Item> 
                                <List.Item>
                                    <List.Header>Popularity</List.Header>
                                    {data.popularity}
                                </List.Item> 
                                <List.Item>
                                    <List.Header>Production Companies</List.Header>
                                    {data.production_companies.map((company:any) => company.name).join(", ")}
                                </List.Item>  
                                <List.Item>
                                    <List.Header>Release Data:</List.Header>
                                    {data.release_date}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Revenue:</List.Header>
                                    {data.revenue}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Runtime:</List.Header>
                                    {data.runtime}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Vote Avergae:</List.Header>
                                    {data.vote_average}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Language:</List.Header>
                                    {data.original_language}
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}