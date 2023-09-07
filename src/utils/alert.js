import Swal from "sweetalert2";

//esta alerta aprece cuando alla ocurriudo un error al enviar el mensaje
const errorAlert =(result)=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${result}`,
    })
};

//esta alerta aparece cuanod un mensaje  fue enviado correctamente
const successAlert =()=>{
    Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: '¡Responderemos a la brevedad!'
    });
};

const loadingAlert =()=>{
    let timerInterval;
    return Swal.fire({
        title: 'Enviando consulta...',
        html: 'procesando el mensaje <b></b>.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    })
};

export {
    errorAlert,
    successAlert,
    loadingAlert
}