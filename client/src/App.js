import { Col,Container, Row } from "react-bootstrap";
import Title from"./components/Title";
import AddTodo from "./components/AddTodo";
const App=()=>{
    return <>
        <Container>
        <Row>
            <Col md={{span: 6, offset: 3}}>
              <Title name = "TODO App"/>
              <AddTodo label = "Add New Task" placeholder = "Eg: Do Homework" />
            </Col>
        </Row>

      </Container>
    </>

};

export default App;