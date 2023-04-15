import './App.css'
import { Home, Header } from './Components'

function App() {

  return (
    <div className='components'>
      <header>
        <Header />
      </header>
      <main>
        <Home /> 
      </main>
    </div>
  );
}

export default App
