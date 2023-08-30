import './card2.css';

const Card2 = () => {
    return (
        <div className="divContactContainer">
            <h2>¡Contactanos!</h2>
            <form action="post" className="formContactContainer">
                <input type="text" placeholder='Nombre y Apellido' name="first_name"/>
                <input type="text" name="email" placeholder='Email'/>
                <textarea name="description" placeholder='Mensaje' id="" cols="30" rows="10"></textarea>
                <button className='btnFormContact'>enviar</button>
            </form>
        </div>
    );
};

export default Card2;
