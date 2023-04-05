
import './App.css';
import Section from './components/Section';
import movies from './data/movies'


function App() {
  return (
    <div className="App">
      <section className='movies_grid'>
        {movies.map((element, i) =>
          <Section
            key={i}
            title={element.title}
            year={element.year}
            director={element.director}
            duration={element.duration}
            rate={element.rate}
            genre={element.genre}
          />
        )}
      </section>
    </div>
  );
}

export default App;
