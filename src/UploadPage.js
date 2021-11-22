import "./styles.css";
import { Container, Row, Col } from "react-grid-system";
import { Helmet } from "react-helmet";
import Upload from "./UploadComponent";

export default function UploadPage() {
  return (
    <div className="UploadPage">
      <Helmet>
        <style>{"body { background-color: white; }"}</style>
      </Helmet>
      <form>
        <p className="titulo" contenteditable="true">
          Insira seu Título
        </p>
        <br />
        <br />
        <Container className="box">
          <Row>
            <Col sm={6}>
              <p className="subtitulo">INGREDIENTES</p>
              <br />
              <p className="insira" contenteditable="true">
                Insira seus Ingredientes
              </p>
            </Col>
            <Col sm={6}>
              <p className="insira">
                Insira sua Imagem <Upload />
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <Container className="box">
          <Row>
            <Col sm={18}>
              <p className="subtitulo">MODO DE PREPARO</p>
              <br />
              <p className="insira" contenteditable="true">
                Insira seu modo de Preparo
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <Container className="box">
          <Row>
            <Col sm={18}>
              <p className="subtitulo">INFORMAÇÕES</p>
              <br />
              <p className="insira" contenteditable="true">
                Insira suas informações
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <p className="criador">Criado por:</p>
        <Upload />
        <br />
        <p className="criador" contenteditable="true">
          Insira seu nome aqui
        </p>
        <br />
        <br />
        <a href="/ResultPage">
          <button className="botao">Publicar</button>
        </a>
      </form>
    </div>
  );
}
