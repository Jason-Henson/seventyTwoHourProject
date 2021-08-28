import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const NasaChild = (props) => {
  const image = props.data;
  return (
    <div>
      <Card>
        <CardImg
          top
          width="50%"
          height="50%"
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Nasa API</CardTitle>
          <CardText>
            This is an image of your exact coordinates.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default NasaChild;
