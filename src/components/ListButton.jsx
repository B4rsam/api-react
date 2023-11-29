import Card from "./card";

const ListButton = () => {
    return (
        <button className="btn listbtn" onClick={fetchList}>See List</button>
    )
}

function fetchList() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
            const box = document.getElementById("cardbox");
            const list = json.map((item) => {
                let i = 0;
                const currentCard = <Card title={item.title} body={item.body} id={item.id} userid={item.userId} cardid={"card" + i} btnid={"button" + i}/>
                i++;
                return currentCard;
            })
            list.forEach(element => {
                box.appendChild(element);
            });
        });
}

export default ListButton;
