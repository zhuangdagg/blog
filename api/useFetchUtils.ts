
export default function useFetchUtils() {

    const host = 'http://localhost:8000'

    const api = {
        test: '/api/test/123',
        trcp: '/trpc/'
    }

    for(let k of Object.keys(api)) api[k] = host + api[k];

    const test = () => {
        fetch(api.trcp, {
            method: 'GET',
            headers: new Headers({
                'Origin': '*'
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(console.error)
    }

    return {
        test
    }
}