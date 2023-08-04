import {Alert} from "react-bootstrap";

function MsgAlert(props){
    const {msg,type} = props;
    return (
        <>
        <Alert variant={type || "danger"}>{msg || "Something Went Wrong"}</Alert>
        </>
    );
}

export default MsgAlert;