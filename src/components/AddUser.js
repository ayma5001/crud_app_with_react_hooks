import React ,{useContext,useState} from "react";
import { Input, Label, FormGroup, Button, Form } from "reactstrap";
import { Link,useHistory} from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import {v4 as uuid}  from "uuid";

export const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const history = useHistory()
  const onSubmit = () => {
    const newUser = {
      id:uuid(),
      name
    }
    addUser(newUser);
    history.push('/');
  }
  const onChange = (e) => {
    setName(e.target.value);
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label> Name </Label>
        <Input value={name} onChange={onChange} type="text" placeholder="Enter your name"></Input>
      </FormGroup>
      <Button className="ml-2" type="submit"> Submit </Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
