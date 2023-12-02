import ListButton from './components/ListButton.jsx'
import Card from './components/card.jsx'
import './index.css'

function App() {
  return (
    <>
      <ListButton>{(data, onDelete) => <div className="grid grid-cols-3">{data.map(item => <Card key={item.id} cardData={item} onDelete={onDelete}/>)}</div>}</ListButton>
      <div className='cardbox'></div>
    </>
  )
}

export default App
