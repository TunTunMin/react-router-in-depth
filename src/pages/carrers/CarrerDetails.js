import { useLoaderData, useParams } from "react-router-dom"

export default function CarrerDetails() {
    const {id} = useParams()
    const carrer = useLoaderData()
  return (
    <div className="carrer-details">
        <h2>Carrer Details for {carrer.title}</h2>
        <p>Starting salary: {carrer.salary}</p>
        <p>Location: {carrer.location}</p>
        <div className="details">
            <p>Labore consequat laboris cupidatat amet fugiat cupidatat labore laboris aute ad. Labore consectetur ad laborum incididunt ex irure id minim. Quis aute nisi labore quis dolore veniam ad. Non ipsum velit nostrud minim laborum mollit ex labore Lorem officia aute commodo. Cupidatat elit do non velit voluptate cillum commodo irure elit cillum eu laboris commodo velit.</p>
        </div>
    </div>
  )
}

export const carrerLoader = async ({params}) => {
    const {id} = params;
    const carrer = await fetch('http://localhost:4000/careers/'+id);
    if(!carrer.ok){
        throw Error("Could not find that carrer")
    }
    const response = await carrer.json();
    return response;
}
