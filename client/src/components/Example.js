//rfce

//Adding events to component
export default function Example(){
    const shoot =()=>{
        alert("goal");
    };
    return (
    <>
    <button onClick={shoot}>Take the Shot!</button>
    </>
    );
}