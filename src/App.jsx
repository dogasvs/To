import './App.css'

function App() {
  
  return (
   <Todo />
  )
}

function Todo() {
  function handleClick() {
    activeListe.innerHTML += <li> {todoTxt.value} </li>
  }

  return (
    <div className="toDo">

    <form className="todoList" autoComplete="off">
      <input required  key="todoTxt" type="text" name="name" placeholder="Yapılacak İş" /> 
      <button className="btn" type="submit">➕</button>
    </form>

    <h3>Yapılacaklar Listesi - <span className="activeCount">0</span> </h3> 
    <button className="delete">Sıfırla</button>

    <ul className="activeListe"></ul>
  </div>
  )
}

export default App
