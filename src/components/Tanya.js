import { Form } from "react-bootstrap"
const Tanya =() =>{
    return(
        <div className="tanya">
            <>
            <div className="col-12">
                <div className="col-5 justify-content">
            <Form.Label className="text-dark">Ajukan Pertanyaan</Form.Label>
            <Form.Control
                type="text"
                id="email"
                placeholder="Email"
                />
                </div>
            {/* <Form.Label htmlFor="nama">Nama</Form.Label> */}
            <Form.Control
                type="text"
                id="nama"
                placeholder="Nama"
                />
            {/* <Form.Label htmlFor="wa">Whatsapp</Form.Label> */}
            <Form.Control
                type="text"
                id="wa"
                placeholder="Whatsaap"
                />
            <Form.Control
                type="text"
                id="tanya"
                placeholder="Pertanyaan"
                />
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers, and
                must not contain spaces, special characters, or emoji.
            </Form.Text>
            </div>
            </>
        </div>
    )
}
export default Tanya