import { useEffect, useState } from "react"
import HomeQuizPreview from "../components/HomeQuizPreview"

const Home = () => {
    const [quizes, setQuizes] = useState([])

    useEffect(() => {
        const fetchQuizes = async () => {
            const response = await fetch('http://localhost:3000/api/quizes')
            const json = await response.json()

            if (response.ok) {
                setQuizes(json)
            }
            fetchQuizes()
        }
    }, [])

    return (
        <div>
            <h2>Quizes</h2>
            {quizes && quizes.map((quiz) => (
                <HomeQuizPreview key={quiz._id} quiz={quiz} />
            ))}
        </div>

    )
}

export default Home