import Title from"./components/Title";
import Example from"./components/Example";
import Goal from"./components/Goal";
import Garage from "./components/Garage";
import Ternary from "./components/ternaryoperator";
import LIST from "./components/list";
const App=()=>{
    const cars = ['BMW'];
    return <>
    <Title name ="TODO App"/>
     <Example />
    <Goal isGoal={true}/>
    <Garage cars={cars}/>
    <Ternary/>
    <LIST/> 
    
    </>

};

export default App;