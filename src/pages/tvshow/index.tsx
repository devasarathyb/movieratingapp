import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Accordion, Card, Grid, Header, Image, Label, List, Loader, Segment } from "semantic-ui-react"
import { fetchTvShowDetails } from "./query"

export const TvShow = () => {
    const {id} = useParams<string>()

    if(!id){
        return <div>Invalid TvShow ID</div>
    }

    const {data, isLoading} = useQuery({queryKey:["tvshow"], queryFn:()=>fetchTvShowDetails(id)})

    if(isLoading) {
        return <Loader active/>
    }
    const seasonPanles = data.seasons.map((seasons:any) => ({
        key:seasons.id,
        title:`Season ${seasons.season_number}`,
        content: {
            content :(<Card style={{height:"70px"}} meta={seasons.air_date} description={`${seasons.episode_count} episodes`}/>)
        }
    }))

    return(
        <div style={{marginTop:50}}> 
            <Segment>
                <Header>
                    {data.name}
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
                                    <List.Header>Created By</List.Header>
                                    {data.created_by.map((creator:any) =>creator.name).join(", ")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Episodes Run Time</List.Header>
                                    {data.episode_run_time.join(" ,")}
                                </List.Item>
                                <List.Item>
                                    <List.Header>Genere</List.Header>
                                    {data.genres.map((genre:any) => <Label key={genre.id}>{genre.name}</Label>)}
                                </List.Item>
                                <List.Item>
                                    <List.Header>First Air Date:</List.Header>
                                    {data.first_air_date}
                                </List.Item> 
                                <List.Item>
                                    <List.Header>Networks</List.Header>
                                    {data.networks.map((network:any) => (
                                        
                                    <Image key={network.id} src={`https://image.tmdb.org/t/p/original/${network.logo_path}`} 
                                    size="small"
                                    style={{marginRight:10}}/>))}
                                </List.Item> 
                                <List.Item>
                                    <List.Header>Production Companies</List.Header>
                                    {data.production_companies.map((company:any) => company.name).join(", ")}
                                </List.Item>  
                                <List.Item>
                                    <List.Header>Number of Episodes</List.Header>
                                    {data.number_of_episodes}
                                </List.Item>
                                <List.Item>
                                <List.Header>Number of Season</List.Header>
                                    {data.number_of_seasons}
                                </List.Item>
                                <List.Item>
                                <List.Header>Number of Episodes/Season</List.Header>
                                    <List.Description style={{height:"200px", overflowY:"scroll"}}>
                                        <Accordion defaultActiveIndex={0} panels={seasonPanles} styled/>
                                    </List.Description>
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