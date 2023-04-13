import './App.css'
import { Home, Header, Subreddits } from './Components'

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App
