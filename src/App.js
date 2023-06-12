import React,{useState,useEffect} from 'react';
import './App.css';
import MemberCard from './MemberCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';

const API_URL="http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow";

function App() {
  const [members, setMembers]=useState([]);
  const [query, setQuery]=useState('');
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data.items);
      setMembers(data.items);
    })
  }, [])

  const searchMember = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data.items);
      setMembers(data.items);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Stack Over Users</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMember} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Search for Member"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit" style={{backgroundColor: 'orange'}}>Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {members.length > 0 ? (
        <div className="container">
        <div className="grid">
          {members.map((memberReg)=>
          <MemberCard key={memberReg.user_id} {...memberReg}/>)}
            </div>
    </div>
      ):(
        <h2 style={{textAlign: 'center', margin: '10px'}}>Sorry! No Stack Overflow Members Found</h2>
      )}
    </div>   
    </>
  );
}

export default App;
