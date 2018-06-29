import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';


function renderDish(dish) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

function renderComments(comments) {
    let view = null;
    view = comments.map((comment, index) => {
        return (
            <div key={index} className="list-unstyled">
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </div>
        );
    });
    return view;
}

const DishDetail = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {renderDish(props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {renderComments(props.dish.comments)}
            </div>
        </div>
    );
}

export default DishDetail;