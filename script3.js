 let Box = document.getElementById("Box");
  let qrI = document.getElementById("qrI");
  let qrText = document.getElementById("qrText");
  
  
  function generateQR(){
      qrI.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
    }