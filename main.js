let clock = document.getElementById('clock');

function GetTime() {
   let date = new Date();

   let s = date.getSeconds();
   if (s < 10) {
      s = '0' + date.getSeconds();
   }
   let m = date.getMinutes();
   if (m < 10) {
      m = '0' + date.getMinutes();
   }
   let h = date.getHours();
   if (h < 10) {
      h = '0' + date.getHours();
   }
   clock.innerHTML = `${h}:${m}:${s}`
}
setInterval(GetTime, 500);




