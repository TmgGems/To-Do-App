
const cars = ["Ford","BMW","Audi"];
<Garage cars ={cars}/>

function Garage(props){
    const cars = props.cars;
    return (
        <>
        <h1> Garage</h1>
        {cars.length>0 &&
            <h2>
            You have {cars.length} Cars in your Garage.
            </h2>
        }
        </>
    );
}

export default Garage;