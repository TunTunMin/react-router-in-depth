import { useLoaderData, Link } from "react-router-dom";
export default function Carrers() {
    const carrers = useLoaderData();
    console.log('carrers =>', carrers)
  return (
    <div className="carrers">
        
        {carrers.map(carrer => {
                return <Link to={carrer.id.toString()} key={carrer.id}>
                    <p>{carrer.title}</p>
                    <p>Based in {carrer.location}</p>
                </Link>
            })
        }
    </div>
  )
}

// loader function
export const carrersLoader = async () => {
    const response = await fetch('http://localhost:4000/careers');
    if(!response.ok){
        throw Error("Could not fetch data");
    }
    const data = await response.json();
    console.log('response data', data)
    return data
}
