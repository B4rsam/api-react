import ListButton from './components/ListButton.jsx'
import Card from './components/card.jsx'

function App() {
  return (
    <>
      <ListButton>{(data) => data.map(item => {
        let i = 0;
        const currentCard = <Card cardid={"card" + i} title={item.title} body={item.body} id={item.id} userid={item.userId} btnid={"button" + i}/>
        i++
        return currentCard;
      })}</ListButton>
      <div className='cardbox'></div>
    </>
  )
}

export default App
