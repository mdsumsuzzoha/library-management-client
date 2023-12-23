// import { useEffect, useState } from "react"
// import useServices from "../../../customHooks/useServices";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books').then(res => res.json()).then(data => {
        // console.log(data)    
        setServices(data)})
    }, [])

    // const services = useServices();

    return (
        <div>
            <div className="space-y-4">
                <h3 className="text-3xl text-orange-700">Our Services</h3>
                <h3 className="text-6xl font-bold">Our Service Area</h3>
                <p className="w-2/3 mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ad ipsam doloribus, eius dolore voluptatem consectetur eveniet corrupti nostrum cumque.</p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    )
}

export default Services
