import React from 'react'
import './WeatherPost.css'
import Card from "react-bootstrap/Card";

export const WeatherPost = (props) => {
    return (
        <div id="divpost">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.day}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.data}</Card.Subtitle>
                    <Card.Img style={{ width: '50px' }} variant="top" src={(props.imagem)} alt="new"/>
                    <Card.Subtitle className="mb-2 text-muted">{props.temp} Cº</Card.Subtitle>
                    <Card.Subtitle className="mb-2">{props.weather}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}
