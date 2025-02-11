import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import VideoTemplate from './video';
var data = ['image', 'title', 'text'];
function Video() {
    return (
        <div>
            <Row>
                {data.map((item, index) => (
                    <Col key={index}> {/*  Adjust md={4} as needed for column width */}
                        <VideoTemplate
                            image={item.image}
                            title={item.title}
                            text={item.text}
                        />
                    </Col>
                ))}
            </Row>
        </div >
    );
}

export default Video;