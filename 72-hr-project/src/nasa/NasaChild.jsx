import {
  Card,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";

const NasaChild = (props) => {
  const image = props.data;
  return (
      <div>
          <Card>
              <CardImg top width="50%" height="50%" src={image} alt="Card image cap" />
                  <CardBody>
                      <CardText>You are here</CardText>
                  </CardBody>
          </Card>
      </div>
  )
};

export default NasaChild;