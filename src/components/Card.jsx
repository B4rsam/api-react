const Card = (props) => {
    return (
        <div className="card" id={props.cardid}>
            <h4 className="cardTitle">{props.title}</h4>
            <p className="cardBody">{props.body}</p>
            <div className="idbox">
                <h5 className="boxid">{props.id}</h5>
                <h5 className="userid">{props.userid}</h5>
            </div>
            <button className="btn del" id={props.btnid} onClick={deleteCard}>Delete Entry</button>
        </div>
    )
}

function deleteCard() {
    console.log(this.id);
}

export default Card;