import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Pagos.css';
import Plin from '../../assets/plin.png';
import Yape from '../../assets/yape.png';
import { Image } from 'react-bootstrap';

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="online" title='son online' className='online'>
        Online
        <Image src={Plin} />
        <Image src={Yape} />
      </Tab>
      <Tab eventKey="efectivo" title="Efectivo">
        Efectivo
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;