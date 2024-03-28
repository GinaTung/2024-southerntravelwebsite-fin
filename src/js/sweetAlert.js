import Swal from 'sweetalert2'

export default {
    typicalType(title, text, icon, showConfirmButton) {
        return Swal.fire({
            title,
            text,
            icon,
            showConfirmButton,
            confirmButtonText: `Continue → `,
            confirmButtonColor: '#224772',
            timer: showConfirmButton === true ? '' : 1500
        })
    },
    twoLayerCheckType(text) {
        return Swal.fire({
            // title: 'Are you sure?',
            text: text,
            icon: 'warning',
            position: "center",
            // showCancelButton: true,
            confirmButtonColor: '#dc3545',
            // cancelButtonColor: '#43B8BD',
            // confirmButtonText: 'Yes, delete it!'
        })
    },
    threeLayerCheckType(icon,title){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          return Toast.fire({
            icon,
            title
          });
    }
}