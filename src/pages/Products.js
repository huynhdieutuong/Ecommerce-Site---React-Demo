import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

import { CartContext } from '../contexts/Cart';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('https://93n6027pkr.sse.codesandbox.io/products')
      .then(res => {
        this.setState({
          products: res.data
        });
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="Products">
        <Container>
        <h2>Products</h2>
          <Row>
            {
              products.map(product => (
                <Col sm="6" md="4" lg="3">
                  <Card>
                    <CardImg top width="100%" src={product.imageUrl} alt="" />
                    <CardBody>
                      <CardTitle>{product.name}</CardTitle>
                      <CardText>{product.description}</CardText>
                      <CartContext.Consumer>
                        { ({ addToCart }) => <Button onClick={() => addToCart(product)}>Add to cart</Button>}
                      </CartContext.Consumer>
                    </CardBody>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Products;
