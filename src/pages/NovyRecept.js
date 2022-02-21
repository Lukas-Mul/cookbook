import React from 'react';
import {
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Table,
  Row,
  Col,
  Button,
} from 'reactstrap';

export function NovyRecept() {
  return (
    <div>
      <h1>Název receptu</h1>
      <Button className="border">Uložit</Button>
      <Button className="border">Zrušit</Button>
      <Input />
      <Row>
        <Col className="bg-light" xs="3">
          <Container>
            <div>
              <h2 className="pt-3">Základní údaje</h2>
            </div>
            <div>
              <div>Doba přípravy</div>
              <InputGroup>
                <Input placeholder="proměnná" />
                <InputGroupText>min</InputGroupText>
              </InputGroup>
            </div>
            <div>
              <div>Počet porcí</div>
              <Input />
            </div>
            <div>
              <div>Příloha</div>
              <Input />
            </div>
          </Container>
        </Col>
        <Col className="bg-light" xs="4">
          <Container>
            <div>
              <h2 className="pt-3">Ingredience</h2>
              <div>
                <Table>
                  <tbody>
                  </tbody>
                </Table>
              </div>

              <div>
                <div>Přidat ingredienci</div>
                <Row>
                  <Col xs="6">
                    <Input placeholder="Množství" />
                  </Col>
                  <Col xs="6">
                    <Input placeholder="Jednotka" />
                  </Col>
                </Row>
              </div>
              <div>
                <InputGroup>
                  <Input placeholder="Název" />
                  <InputGroupText>+ Přidat</InputGroupText>
                </InputGroup>
              </div>
              <div>
                Přidat skupinu
                <InputGroup>
                  <Input placeholder="Nová skupina" />
                  <InputGroupText>+ Přidat</InputGroupText>
                </InputGroup>
              </div>
            </div>
          </Container>
        </Col>

        <Col xs="5">
          <Container>
            <h2 className="pt-3">Postup</h2>
            <Input rows="20" id="exampleText" name="text" type="textarea" />
          </Container>
        </Col>
        <Container>
          <div className="pt-3">Propisovani postupu</div>
        </Container>
      </Row>
    </div>
  );
}

export default NovyRecept;
