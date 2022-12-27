import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        {<ItemListContainer greeting='Prueba de greating' color='grey'/>}
      </main>
    </div>
  );
}

export default App;
