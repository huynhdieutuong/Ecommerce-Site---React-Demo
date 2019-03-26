import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        "id": "6803b44e-fd46-4d9a-bbc4-350c5c9027fe",
        "name": "Energy - Boo - Koo",
        "description": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",
        "imageUrl": "http://dummyimage.com/318x180.jpg/dddddd/000000"
      }, {
        "id": "6f83bd2e-bf3c-4d0f-a939-fb6b8e4b0810",
        "name": "Island Oasis - Lemonade",
        "description": "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
        "imageUrl": "http://dummyimage.com/318x180.jpg/ff4444/ffffff"
      }, {
        "id": "af2103b0-f795-4dea-a13d-304e3bad7653",
        "name": "Kiwano",
        "description": "sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla",
        "imageUrl": "http://dummyimage.com/318x180.jpg/dddddd/000000"
      }, {
        "id": "6316dee2-78f1-4cfc-9ec5-ae378ef4a87b",
        "name": "Beer - Fruli",
        "description": "odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
        "imageUrl": "http://dummyimage.com/318x180.jpg/5fa2dd/ffffff"
      }, {
        "id": "faf79151-5a50-450b-bbd2-ca8b3dba4091",
        "name": "Pepper - Chillies, Crushed",
        "description": "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida",
        "imageUrl": "http://dummyimage.com/318x180.jpg/5fa2dd/ffffff"
      }, {
        "id": "25ba190d-f0ce-44da-b255-aab2eb701652",
        "name": "Bread Bowl Plain",
        "description": "id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
        "imageUrl": "http://dummyimage.com/318x180.jpg/cc0000/ffffff"
      }, {
        "id": "8bdd1140-a3cd-4268-a595-6f30ae162db0",
        "name": "Beef - Eye Of Round",
        "description": "sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat",
        "imageUrl": "http://dummyimage.com/318x180.jpg/cc0000/ffffff"
      }, {
        "id": "e5522929-9944-4136-98c2-baeaffbd6568",
        "name": "Breadfruit",
        "description": "volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
        "imageUrl": "http://dummyimage.com/318x180.jpg/cc0000/ffffff"
      }, {
        "id": "bf7b31ed-6c74-4b3e-ad48-2c79f0982cde",
        "name": "Wine - Magnotta, Merlot Sr Vqa",
        "description": "ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        "imageUrl": "http://dummyimage.com/318x180.jpg/dddddd/000000"
      }, {
        "id": "2c7f9b58-9bcd-458e-ade3-221d36af8958",
        "name": "Beef - Inside Round",
        "description": "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus",
        "imageUrl": "http://dummyimage.com/318x180.jpg/5fa2dd/ffffff"
      }, {
        "id": "088b276c-7b66-4ce1-b200-5ab3bbbc9af4",
        "name": "Cocoa Butter",
        "description": "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo",
        "imageUrl": "http://dummyimage.com/318x180.jpg/cc0000/ffffff"
      }, {
        "id": "cb45b945-3b2a-43b0-970e-919dd1d6afcd",
        "name": "Beef - Ground Medium",
        "description": "suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis",
        "imageUrl": "http://dummyimage.com/318x180.jpg/dddddd/000000"
      }, {
        "id": "9dadd483-453c-408a-9ca5-cb55ba9210fc",
        "name": "Cleaner - Comet",
        "description": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
        "imageUrl": "http://dummyimage.com/318x180.jpg/cc0000/ffffff"
      }, {
        "id": "cc08d1e8-d2bc-475b-bf02-d3ae361aba67",
        "name": "Longos - Lasagna Veg",
        "description": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
        "imageUrl": "http://dummyimage.com/318x180.jpg/5fa2dd/ffffff"
      }, {
        "id": "d8efdda5-57ba-432c-8c60-1854c41b8963",
        "name": "Danishes - Mini Cheese",
        "description": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
        "imageUrl": "http://dummyimage.com/318x180.jpg/ff4444/ffffff"
      }, {
        "id": "c960beed-a141-4911-8f24-790d3cf40c66",
        "name": "Cognac - Courvaisier",
        "description": "suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa",
        "imageUrl": "http://dummyimage.com/318x180.jpg/5fa2dd/ffffff"
      }, {
        "id": "edf41602-2374-46d2-a0a5-05f844abe789",
        "name": "Oats Large Flake",
        "description": "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
        "imageUrl": "http://dummyimage.com/318x180.jpg/dddddd/000000"
      }, {
        "id": "1ed56229-c391-4dea-8a78-9a56dfe687fc",
        "name": "Pie Pecan",
        "description": "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget",
        "imageUrl": "http://dummyimage.com/318x180.jpg/ff4444/ffffff"
      }, {
        "id": "da528bc9-1a6d-479e-b36d-f2424b7e1917",
        "name": "Chutney Sauce",
        "description": "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
        "imageUrl": "http://dummyimage.com/318x180.jpg/dddddd/000000"
      }, {
        "id": "eab9dd89-4d36-4964-8e1c-f16e15a87480",
        "name": "Sauce - Vodka Blush",
        "description": "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
        "imageUrl": "http://dummyimage.com/318x180.jpg/dddddd/000000"
      }]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="Products">
        <h2>Products</h2>
        <Container>
          <Row>
            {
              products.map(product => (
                <Col sm="6" md="4" lg="3">
                  <Card>
                    <CardImg top width="100%" src={product.imageUrl} alt="" />
                    <CardBody>
                      <CardTitle>{product.name}</CardTitle>
                      <CardText>{product.description}</CardText>
                      <Button>Add to cart</Button>
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
