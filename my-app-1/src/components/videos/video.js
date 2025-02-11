import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function VideoTemplate(image, title, text) {
    return (
        <Col>
            <Card style={{ width: '20rem' }}>
                <Card.Img src="https://picsum.photos/seed/picsum/536/354"></Card.Img>
                <Card.Body>
                    <Card.Title>Hello World!</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the
                        bulk of the card's content.</Card.Text>
                </Card.Body>
                <Button variant="primary">Watch</Button>
            </Card>
        </Col>
    )
}

export default VideoTemplate;