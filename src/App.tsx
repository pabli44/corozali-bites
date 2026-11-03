import Poster from './components/Poster'
import AdSense from './components/AdSense'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <main className="app-poster-stage">
        <Poster />
      </main>
      <aside className="app-ad-band" aria-label="Publicidad">
        <AdSense client="ca-pub-1893344905381073" slot="8808330165" />
      </aside>
    </div>
  )
}

export default App
