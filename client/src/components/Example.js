//rfce

//Adding events to component
 function Example(){
    const shoot =(a)=>{
        alert(a);
    };
    return (
    <>
    <button onClick={()=>shoot("Goal!")}>Take the Shot!</button>
    </>
    );
}

export default Example;