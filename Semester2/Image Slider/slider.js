var pictures = [
    'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/796532',
   'https://media.licdn.com/dms/image/C4E0BAQHMgGSB9aLz6g/company-logo_200_200/0?e=2159024400&v=beta&t=UZDVhNZl_AG8RcsdZexTUcs-ecL_Ql5BVi9LkQdkvhs', 
   'https://pbs.twimg.com/profile_images/414059271827898369/lVfoTVb7_400x400.jpeg',
];
var n = 0;
function next() {
   var move = document.getElementById('move');
   n++;
   if(n >= pictures.length) {
       n = 0;
   }
   move.src = pictures[n];
}
function back() {
   var move = document.getElementById('move');
   n--;
   if(n < 0) {
       n = pictures.length-1;
   }
   move.src = pictures[n];
}
function myFunction() {
    document.getElementById("slider").style.transition = "all 2s";
  }