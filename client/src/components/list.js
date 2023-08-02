function Garage () {
    const cars = ["Ford","BMW","Audi"];
    return(
        <>
        <h1>Who lives in my Garage ? </h1>
        <ul>
            {cars.map((car) => <Car brand ={car} />)}
            </ul>
        </>
    );
}

function Car (props){
    return <li>I am a {props.brand}</li>
}

export default Garage;