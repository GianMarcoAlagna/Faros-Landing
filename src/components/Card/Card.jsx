import { useState } from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = ({ title, text, img }) => {
  const [hover, setHover] = useState(false);
  return (
    <Card
      style={{ width: '25rem', overflow: 'hidden' }}
      className='p-0'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="image-container">
        <Card.Img
          src={img}
          className={hover ? 'hovered-img' : ''}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
