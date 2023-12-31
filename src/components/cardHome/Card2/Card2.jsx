import './card2.css';
import iconsOne from '../../../assets/icons/akar-icons_statistic-up.png';
import iconsTwo from '../../../assets/icons/bi_folder.png';
import iconsThree from '../../../assets/icons/ic_baseline-laptop.png';
import iconsFour from '../../../assets/icons/grommet-icons_group.png';
import iconsFive from '../../../assets/icons/cil_magnifying-glass.png';


const Card2 = () => {
    return (
        <div className='homeServicesContainer'>
            <h3>Nuestros servicios de asesorías incluyen:</h3>
            <div className='iconsHomeContainer'>
                <div className='iconsHomeChildren'>
                    <figure>
                        <img src={iconsOne} alt="icono de un grafico en ascenso" />
                    </figure>
                    <p>Capacitaciones y webinars virtuales sobre metodología de investigación y estadística.</p>
                </div>
                <div className='iconsHomeChildren'>
                    <figure>
                        <img src={iconsTwo} alt="icono de una carpeta" />
                    </figure>
                    <p>Acceso a un repositorio de información sobre investigación. </p>
                </div>
                <div className='iconsHomeChildren'>
                    <figure>
                        <img src={iconsThree} alt="icono de una laptop abierta" />
                    </figure>
                    <p>Sesiones virtuales de asesoría.</p>
                </div>
                <div className='iconsHomeChildren'>
                    <figure>
                        <img src={iconsFour} alt="icono de una grupo de personas juntas" />
                    </figure>
                    <p>Preparación pre-sustentatoria a cargo de nuestro equipo especializado.</p>
                </div>
                <div className='iconsHomeChildren'>
                    <figure>
                        <img src={iconsFive} alt="icono de una lupa" />
                    </figure>
                    <p>Dos revisiones por antiplagio con Turnitin.</p>
                </div>
            </div>
        </div>
    );
}

export default Card2;
