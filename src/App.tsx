import { useEffect, useReducer, useState } from 'react'
import { useQuery } from 'react-query'
import './App.css'

const getNumberRandomFromApi = async():Promise<number> => {
  console.log('get')
  const api_url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  const res = await fetch(api_url)
  const numberString = await res.text()
  
  throw new Error('auxilio!!');
  
  return +numberString
}

const App = () => {
  const query = useQuery(
    ['randomNumber'],
    getNumberRandomFromApi
  )
  
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
