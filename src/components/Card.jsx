const Card = ({cardData, onDelete}) => {
    return (
        <div className="block my-0.5 flex-1 w-25 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" id={cardData.cardid}>
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardData.title}</h4>
            <p className="font-normal text-gray-700 dark:text-gray-400">{cardData.body}</p>
            <div className="idbox">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardData.id}</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardData.userid}</h5>
            </div>
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" id={cardData.btnid} onClick={() => onDelete(cardData.id)}>Delete Entry</button>
        </div>
    )
}
export default Card;