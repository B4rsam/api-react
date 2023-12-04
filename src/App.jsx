import ListButton from './components/ListButton.jsx'
import Card from './components/card.jsx'
import './index.css'

function App() {
  return (
    <>
      <ListButton>{(data, onDelete) => <div className="grid gap-1 grid-cols-3 m-2">{data.map(item => <Card key={item.id} cardData={item} onDelete={onDelete}/>)}</div>}</ListButton>
      <div className='cardbox'></div>
    </>
  )
}

export default App
