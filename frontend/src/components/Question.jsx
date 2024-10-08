const Question = ({ question }) => {
    return (
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-purple-300 mb-2 select-none">{question.question}</h4>
            <ul className="space-y-2">
                {Object.entries(question.options).map(([key, value]) => (
                    <li key={key} className="flex items-center select-none">
                        <span className="text-purple-400 font-semibold mr-2">{key.toUpperCase()}:</span>
                        <span className="text-gray-300">{value}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-3 text-green-400 font-semibold select-none">
                Correct Answer: {question.correctAnswer.toUpperCase()}
            </p>
        </div>
    )
}

export default Question;