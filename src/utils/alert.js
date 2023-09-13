import Swal from "sweetalert2";


//esta alerta aparece cuanod un mensaje  fue enviado correctamente
const successAlert =()=>{
    Swal.fire({
        icon: 'success',
        html:`<div class="alertSuccess">Mensaje enviado</div>
        <p>¡Responderemos a la brevedad!</p>
        `,
        iconColor: "#7DCE4F",
        customClass:{
            popup:"body-alert"
        },
        confirmButtonColor:"#CD373B"
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
    successAlert,
    loadingAlert
}