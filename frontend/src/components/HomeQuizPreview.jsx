const HomeQuizPreview = ({ quiz }) => {
    const handleView = () => {

    }

    return (
        <div>
            <h3>quiz.quizTitle</h3>
            <h4>Created At: {quiz.createdAt}</h4>
            <button onClick={handleView}>View</button>
        </div>
    )
}

export default HomeQuizPreview

