import { useEffect, useReducer, useState } from 'react'
import './App.css'

const getNumberRandomFromApi = async():Promise<number> => {
  console.log('get')
  const api_url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  const res = await fetch(api_url)
  const numberString = await res.text()
  
  return +numberString
}

const App = () => {
  const [number, setNumber] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()
  const [key, setReFetch] = useReducer((x) => x+1, 0)

  useEffect(() => {
    setIsLoading(true)
    getNumberRandomFromApi().then(num => {
      setNumber(num)
      setError(undefined)
    })
    .catch (error => setError(error.message))
  }, [key] )

  useEffect(() => {
    if (number) setIsLoading(false)
  }, [number])

  useEffect(() => {
    if ( error ) setIsLoading(false)
  }, [error])

  return (
    <div className="App">
      { 
        isLoading 
        ? (<h2>Cargando...</h2>)
        : (<h2>Número aleatorio: {number}</h2>)
      }

      {
        !isLoading && error && ( <h3>Ocurrió un error: {error}</h3>)
      }

      <button onClick={setReFetch}>
        Nḿmero Aleatorio
      </button>

    </div>
  )
}

export default App
