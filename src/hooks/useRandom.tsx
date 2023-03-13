import { useQuery } from '@tanstack/react-query'

const getNumberRandomFromApi = async():Promise<number> => {
    console.log('get')
    const api_url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
    const res = await fetch(api_url)
    const numberString = await res.text()
    
    // throw new Error('auxilio!!');
    
    return +numberString
  }
  
export const useRandom = () => {
    const query = useQuery(
        ['randomNumber'],
        getNumberRandomFromApi
      )
    
    return query
}