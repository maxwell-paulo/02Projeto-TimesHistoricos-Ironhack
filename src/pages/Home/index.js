import { Card } from "../../components/Card"
import { useState, useEffect } from "react"
import{ Link } from "react-router-dom"
import axios from "axios"


export function Home() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function fetchCards() {
            try{
                const response = await axios.get(
                    "https://ironrest.herokuapp.com/TheBestSoccerTeams"
                )
                
                setCards([...response.data])

            } catch(err){
                console.log(err)
            }
        }
        fetchCards()
    }, [])
    
    return <>
        <h1>Times históricos do futebol</h1>
        {cards.map((currentCard) => {
                return <>
                <Link to={`/edit/${currentCard._id}`}>
                    <Card team={currentCard.team} year={currentCard.year} team_img={currentCard.team_img} team_logo={currentCard.team_logo}/>
                </Link>
                </>
            })}
        
    </>
}