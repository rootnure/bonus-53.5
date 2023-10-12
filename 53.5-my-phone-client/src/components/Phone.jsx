import { useLoaderData } from "react-router-dom";


const Phone = () => {

    const phone = useLoaderData();

    return (
        <div>
            <h2>{phone.name}</h2>
            <h3>${phone.price.toFixed(2)}</h3>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;