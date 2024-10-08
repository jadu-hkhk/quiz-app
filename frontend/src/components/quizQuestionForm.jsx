import { useState } from "react"

const QuizQuestionForm = () => {
    const [question, setQuestion] = useState("")

    return (
        <form className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Add a new question</h3>

            <div className="mb-4">
                <label className="block text-purple-300 font-medium mb-2">Question:</label>
                <input
                    type="text"
                    className="p-3 block w-full bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                />
            </div>

            <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300">
                Add Question
            </button>
        </form>
    )
}

export default QuizQuestionForm