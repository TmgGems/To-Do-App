import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function AddTodo(props) {
    const {label,  placeholder} = props;
    return (
        <>
            <InputGroup className="mb-3">
            <InputGroup.Text>{label || "Label"}</InputGroup.Text>
            <Form.Control placeholder= {placeholder || "Placeholder"}/>
            <Button variant="outline-secondary" id="button-addon2">
            Submit
            </Button>
        </InputGroup>
        </>
    )
}

export default AddTodo;