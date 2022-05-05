import { Container, Row, Col, ListGroup } from "react-bootstrap"

const Tentang =()=> {
    return (
        <div className="tentang" >
            <div className="textTentang" id="tentang"> 
            <Container>
            Lulusan S1 Informatika dengan spesialisi pada Web. Memiliki pengalaman selama satu tahun dalam perancangan serta pembangunan web dengan menggunakan Framework Codeigniter. Memiliki kemampuan pada pembuatan web dan dapat bersinergi dalam tim untuk mengoptimalkan potensi.
            
            <Row>
                <Col >
                <h5 className="mt-4 text-white btn-primary"><b>Riwayat Pendidikan Akhir:</b></h5>
                <ListGroup horizontal className="itemsTtg">
                <ListGroup.Item className="col-4">S1 - Informatika</ListGroup.Item>
                <ListGroup.Item className="col-4">Universitas Teknologi Yogyakarta</ListGroup.Item>
                <ListGroup.Item className="col-4">WEB</ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
            </Container>
            </div>
        </div>
    );
}
export default Tentang