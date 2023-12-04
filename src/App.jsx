import ListButton from './components/ListButton.jsx'
import Card from './components/card.jsx'
import './index.css'

function App() {
  return (
    <div className="flex flex-col items-center pt-3">
      <ListButton>{(data, onDelete) => <div className="grid gap-1 grid-cols-4 bg-slate-500 p-5 rounded-lg m-2">{data.map(item => <Card key={item.id} cardData={item} onDelete={onDelete}/>)}</div>}</ListButton>
    </div>
  )
}

export default App
