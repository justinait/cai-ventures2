import React from 'react';
import message from '../../assets/icons/message.png'
import cel from '../../assets/icons/cel.png'
import direction from '../../assets/icons/direction.png'
import './card1.css'

const Card1 = () => {
    return (
        <div className='containerCard'>
            <div className='cardTitle'>
                Información de Contacto
            </div>

            <div className='cardSubtitle'>

                <div className='cardsubtitle1'>
                    <div className='message'>
                        <img src={message} alt="" />
                    </div>
                    <div className='cardsubtitletext1'>
                        caiventures.2023@gmail.com
                    </div>
                </div>

                <div className='cardsubtitle2'>
                    <div className='cel'>
                        <img src={cel} alt="" />
                    </div>
                    <div className='cardsubtitletext2'>
                    955716302 / 928 897 150
                    </div>
                </div>

                

                <div className='cardsubtitle3'>

                    <div className='direction'>
                        <img src={direction} alt="" />
                    </div>


                    <div className='cardsubtitletext3'>
                    Cusco, Perú
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Card1;