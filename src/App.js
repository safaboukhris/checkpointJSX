import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';


const firstName = "School bag";
{/* The root component */}
function App() {

  return (
    <div className="App">
    <Card  className="card" style={{ width: '18rem' }}>
    {/* import of the component Image.js */}
    <Card.Img variant="top" /><Image />  
    <Card.Body>
    {/* import of the component Name.js */}
      <Card.Title>
          <Name  />
      </Card.Title>
      <Card.Text>
      {/* import of the component Description .js*/}
      <Description />
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    {/* import of the component Price.js */}
      <ListGroup.Item><Price /></ListGroup.Item>
      <ListGroup.Item>Color: Blue</ListGroup.Item>
    </ListGroup>
  </Card>
{/* Displaying a message below the card*/}
  {firstName ? (
    <div className='condition'>
      <p>Hello, Pink {firstName} !</p>
      <img src="./bag.jpg" alt="bag" />
    </div>
  ) : (
    <p>Hello, there!</p>
  )}

    </div>
  );
}

export default App;
