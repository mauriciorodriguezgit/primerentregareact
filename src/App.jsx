import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"






const App = () => {
  const greetings ="Bienvenidos a candystore"
  return (
    <>
      <NavBar />
      <ItemListContainer greetings={greetings}/>
    </>
  )
}

export default App
