import './valores.css';
import imgValores1 from '../../assets/iconsValores/Layer_1.png';
import imgValores2 from '../../assets/iconsValores/Layer_2.png';
import imgValores3 from '../../assets/iconsValores/Layer_3.png';
import imgValores4 from '../../assets/iconsValores/Layer_8.png';
import imgValores5 from '../../assets/iconsValores/Layer_9.png';
import imgValores6 from '../../assets/iconsValores/Layer_6.png';


const Valores = () => {
    return (
        <section className='aboutValueContainer'>
            <div className='aboutTitle'>Nuestros Valores</div>
            <div className='aboutIconsContainer'>
                <div className='aboutIconsChildren'>
                    <div className='aboutImgContainer'>
                        <img src={imgValores1} alt="Responsabilidad" />
                    </div>
                    <p>Responsabilidad</p>
                </div>
                <div className='aboutIconsChildren'>
                    <div className='aboutImgContainer'>
                        <img src={imgValores3} alt="Etica" className='imgtwo' />
                    </div>
                    <p>Ética</p>
                </div>
                <div className='aboutIconsChildren'>
                    <div className='aboutImgContainer'>
                        <img src={imgValores2} alt="Perseverancia" />
                    </div>
                    <p>Perseverancia</p>
                </div>
                <div className='aboutIconsChildren'>
                    <div className='aboutImgContainer'>
                        <img src={imgValores4} alt="Servicio" className='imgfour'/>
                    </div>
                    <p>Servicios</p>
                </div>
                <div className='aboutIconsChildren'>
                    <div className='aboutImgContainer'>
                        <img src={imgValores5} alt="Compromiso" />
                    </div>
                    <p>Compromiso</p>
                </div>
                <div className='aboutIconsChildren'>
                    <div className='aboutImgContainer'>
                        <img src={imgValores6} alt="Confianza" />
                    </div>
                    <p>Confianza</p>
                </div>
            </div>
        </section>
    );
}

export default Valores;
