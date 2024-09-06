// index.js
function sw() {
    Swal.fire({
        title: "n'ghftephai ng orr'enahh ahnythor",
        confirmButtonText: 'Close',
        customClass: {
            popup: 'custom-popup', // Class for the popup container
            title: 'custom-title', // Class for the title
            content: 'custom-content', // Class for the content
            confirmButton: 'custom-confirm-button', // Class for the confirm button
			icon: 'custom-icon'
        },
        showClass: {
            popup: 'animate__animated animate__zoomInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOutDown'
        }
    });
}
// index.js
function sw2() {
    Swal.fire({
        title: "l' ph'lloig ahna naIIIIor hup ones mgephaiagl",
        confirmButtonText: 'Close',
        customClass: {
            popup: 'custom-popup', // Class for the popup container
            title: 'custom-title', // Class for the title
            content: 'custom-content', // Class for the content
            confirmButton: 'custom-confirm-button', // Class for the confirm button
			icon: 'custom-icon'
        },
        showClass: {
            popup: 'animate__animated animate__zoomInUp'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOutUp'
        }
    });
}
