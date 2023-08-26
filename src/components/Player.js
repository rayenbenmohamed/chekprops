import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Player = ({data}) => {
    console.log(data)
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.imageUrl} width={90}height={200} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         Team: {data.team}
        </Card.Text>
        <Card.Text>
         nationality: {data.nationality}
        </Card.Text>
        <Card.Text>
         age: {data.age}
        </Card.Text>
        <Card.Text>
        jerseyNumber:  {data.jerseyNumber}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
</>
  )
}

export default Player;
