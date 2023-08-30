import Accordion from 'react-bootstrap/Accordion';

function Questions() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Hacen elaboración de Tesis?</Accordion.Header>
        <Accordion.Body>
        No, en CAI VENTURES no elaboramos tesis. 
        Sin embargo, ofrecemos un servicio integral de 
        asesoría para tesis, con el objetivo de fomentar 
        la investigación en la sociedad.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Con qué carreras cuentan?</Accordion.Header>
        <Accordion.Body>
        Explora las diversas carreras de Ciencias 
        Sociales que ofrecemos. Visita nuestra página 
        de servicios para más información.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿El asesor está especializado en mi carrera?</Accordion.Header>
        <Accordion.Body>
        Explora las diversas carreras de Ciencias 
        Sociales que ofrecemos. Visita nuestra página 
        de servicios para más información.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Tienen modalidades de pago?</Accordion.Header>
        <Accordion.Body>
        Sí. Ofrecemos y aceptamos pagos en cuotas.
        </Accordion.Body>
      </Accordion.Item>      
    </Accordion>
  );
}

export default Questions;