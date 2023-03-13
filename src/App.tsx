import './App.css'
import { useRandom } from './hooks/useRandom'


const App = () => {
  const query = useRandom()
  
  return ( 
    <div className="App">
      {
        query.isFetching
        ? ( <h2>Cargando...</h2> )
        : ( <h2>Número aleatorio: { query.data }</h2> )
      }

      {
        !query.isLoading && query.isError && ( <h3>Ocurrió un error: { `${ query.error }` }</h3>)
      }

      <button onClick={ () => query.refetch() } disabled={ query.isFetching }>
        {
          query.isFetching? '...' : 'Número Aleatorio'
        }
          
      </button>

    </div>
  )
}

export default App
