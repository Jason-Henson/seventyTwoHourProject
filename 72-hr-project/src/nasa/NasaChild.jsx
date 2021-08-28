import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const NasaChild = (props) => {
  const image = props.data;
  return (
    <div className="nasa-div">
      <Card className="nasa-image">
        <CardImg
          top
          width="50%"
          height="50%"
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Satellite Image</CardTitle>
          <CardText>
            This is an image of your exact coordinates.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default NasaChild;
