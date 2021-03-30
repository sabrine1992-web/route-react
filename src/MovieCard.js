import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
function MovieCard(props) {
    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.movie.img}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>{props.movie.describe}</Card.Text>
                    {props.movie.rate}
                    <Rating
                        readOnly
                        name="simple-controlled"
                        value={props.movie.rate}
                    />

                </Card.Body>
            </Card>
        </div>
    );
}
export default MovieCard;