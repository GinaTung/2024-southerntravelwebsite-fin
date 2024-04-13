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
      position: 'center',
      // showCancelButton: true,
      confirmButtonColor: '#dc3545'
      // cancelButtonColor: '#43B8BD',
      // confirmButtonText: 'Yes, delete it!'
    })
  },
  // sweetAlert.threeLayerCheckType('error', `會員登入失敗，請再次填寫會員登入資料`)
  // sweetAlert.threeLayerCheckType('success', '會員登入成功')
  // sweetAlert.threeLayerCheckType('warning', '請登入會員後，才能預約套裝行程')
  threeLayerCheckType(icon, title, text) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      text: text,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
      }
    })
    return Toast.fire({
      icon,
      title
    })
  },
  fourLayerCheckType(icon, title, text, paragraph, paragraph2) {
    let timerInterval
    Swal.fire({
      title: `<span class="text-danger">${title}</span>`,
      icon: icon,
      html: `${text}<b id="countdown" style="color: red;"></b>${paragraph}<br>${paragraph2}`, // 在這裡添加了一個<b>標籤用於顯示倒數數值
      timer: 11000,
      iconColor: '#0ea0a6',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const countdownElement = document.getElementById('countdown')
        timerInterval = setInterval(() => {
          const remainingTime = Swal.getTimerLeft() // 獲取剩餘的時間
          countdownElement.textContent = (remainingTime / 1000).toFixed(0) // 更新倒數計時器的數值
        }, 1000) // 每秒更新一次
        // 將div設置為隱藏
        document.querySelector('.swal2-loader').style.display = 'none'
      },
      willClose: () => {
        clearInterval(timerInterval)
        // 手動刪除 loading class
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Weclome to 南部輕旅遊')
      }
    })
  }
}
