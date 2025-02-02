function start () {

   document.querySelector(".loader-container").style.display = "flex";
   setTimeout(function() {
      // Hide the loader animation
      document.querySelector(".loader-container").style.display = "none"; // Hide loader
  
      // Hide the .getstarted section
      document.querySelector(".getstarted").style.display = "none";
    }, 4000); // 3000 ms = 3 seconds delay
  }
  











const newScroll = document.querySelectorAll('.scroll');
newScroll.forEach ( (newScroll) =>{
newScroll.addEventListener('mousedown', (evt) =>{
    evt.preventDefault()
isDragging=true;
initialMouseX = evt.clientX;
    initialScrollX = newScroll.scrollLeft;
})
newScroll.addEventListener('mousemove', (evt)=>{
    evt.preventDefault()
    if( isDragging){ 
const distanceX =  evt.clientX - initialMouseX ;
newScroll.scrollLeft= initialScrollX - distanceX 
    }
})
newScroll.addEventListener('mouseup', (evt) =>{
isDragging = false;

})


});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}







function brands(evt, brandName) {

  let tab = document.getElementsByClassName("tab");
  let tabcontent = document.querySelector(".tabcontent");
  for(let x = 0; x < tab.length; x++){
    tab[x].style.display = "none";
    
  }

document.getElementById(brandName).style.display = "grid";


  
}

function myFunction() {

var Inputs , filter  , tabs , tabcontainer , tabText ,y , h , txtValue;
Inputs = document.querySelectorAll("#myInput");
Inputs.forEach((inpt) => {
 filter = inpt.value.toUpperCase();

tabcontainer = document.querySelectorAll(".tab");
tabcontainer.forEach((tabcon) => {
tabText = tabcon.getElementsByTagName("h3");

for( y = 0; y < tabText.length; y++){
  h = tabText[y];
  txtValue = h.textContent || h.innerText;
  if(txtValue.toUpperCase().indexOf(filter) > -1){
    tabcon.style.display = "grid";
  }
  else{
    tabcon.style.display = "none";
  }
}
if (filter == ""){
  tabcon.style.display = "none";

}




  
});


});


   

}



// Get the range slider elements
var minSlider = document.getElementById("minPrice");
var maxSlider = document.getElementById("maxPrice");
var applyButton = document.getElementById("applyFilter");
var minValueOutput = document.getElementById("minValue");
var maxValueOutput = document.getElementById("maxValue");

// Set the initial values of the range slider
minValueOutput.innerHTML = minSlider.value;
maxValueOutput.innerHTML = maxSlider.value;

minSlider.oninput = function() {
  if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
    minSlider.value = maxSlider.value;
  }
  minValueOutput.innerHTML = minSlider.value;
  
};

maxSlider.oninput = function() {
  if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
    maxSlider.value = minSlider.value;
  }
  maxValueOutput.innerHTML = maxSlider.value;
 
};
// Apply button click to filter items
applyButton.onclick = function() {
  showprice(minSlider.value, maxSlider.value); // Filter based on the selected range

  var filter = document.querySelector(".filters");
  filter.classList.remove("animate") ;

};




function showprice(minPrice, maxPrice) {
 
  var getprice = document.querySelectorAll(".tab");
  var priceCon = document.getElementsByClassName("tab_content-price");
  
  
  getprice.forEach((tab) => {
  
    var itemprice = parseFloat(tab.querySelector(".tab_content-price").getAttribute("data-price"));

    if (itemprice >= minPrice && itemprice <= maxPrice) {
      tab.style.display = "grid"; 
    } else {
      tab.style.display = "none"; 
    }
  });
}





function filt() {

  var filter = document.querySelector(".filters");
  filter.classList.toggle("animate");

}

function cancfilt () {
  var filter = document.querySelector(".filters");
  filter.classList.remove("animate");




}





 //Function to toggle password visibility
function togglePassword(id) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text"; // Show password
    } else {
        input.type = "password"; // Hide password
    }
}

// Function to switch to the login form
function showLogin() {
    document.getElementById('register-card').classList.add('hidden'); // Hide register form
    document.getElementById('login-card').classList.remove('hidden'); // Show login form
}

// Function to switch to the register form
function showRegister() {
    document.getElementById('login-card').classList.add('hidden'); // Hide login form
    document.getElementById('register-card').classList.remove('hidden'); // Show register form
}

// Event listener for the login form submission
 document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // alert(Login with Username: username and Password:{password});
});

// Event listener for the register form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('register-username').value;
    const mobile = document.getElementById('register-mobile').value;
    const password = document.getElementById('register-password').value;
    // alert(Register with Username: username, Mobile:{mobile}, and Password: ${password});
});


function showCont(ev, carName) {
  let tabcontent = document.getElementsByClassName("tabcontainer");
let tabcon = document.getElementsByClassName('carTab');
let tabwrap = document.getElementsByClassName('wrapper');
let contone = document.getElementsByClassName('container-one');

let contTwo = document.getElementsByClassName('container-two');

for (let i = 0; i < tabcon.length; i++) {
tabcon[i].style.display="none";
  
}
for (let i = 0; i < tabwrap.length; i++) {
  tabwrap[i].style.display="block";
    
  }
  for (let i = 0; i < contone.length; i++) {
    contone[i].style.display="none";
      
    }

    for (let i = 0; i < contTwo.length; i++) {
   contTwo[i].style.display="none";
        
      }

      for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display="none";
          
        }





document.getElementById(carName).style.display= "block";





}


function removewrap() {

  let tabcontent = document.getElementsByClassName("tabcontainer");
  let tabcon = document.getElementsByClassName('carTab');
  let tabwrap = document.getElementsByClassName('wrapper');
  let contone = document.getElementsByClassName('container-one');
  
  let contTwo = document.getElementsByClassName('container-two');
  
 
  for (let i = 0; i < tabwrap.length; i++) {
    tabwrap[i].style.display="none";
      
    }
    for (let i = 0; i < contone.length; i++) {
      contone[i].style.display="block";
        
      }
  
      for (let i = 0; i < contTwo.length; i++) {
     contTwo[i].style.display="block";
          
        }
  
        for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display="block";
            
          }
  
  



















}















function removeLength() {
  let cartlenght =document.querySelectorAll('.cart-con');
 let empty = document.querySelector('.emty');
 let notify = document.querySelector(".notify") ;
 let check = document.querySelector(".check") ;
if(cartlenght.length === 0){

      
      empty.style.display="flex";
  
      notify.style.display = "none";
      check.style.display = "none";
  
    }
else{

  empty.style.display="none";
  notify.style.display = "block";
 check.style.display = "block";


}




}







function rent(ev) {
  let btn = ev.target;
  let btn_parent = btn.parentElement;
  let btn_grandp = btn_parent.parentElement.parentElement;
  let img_con = btn_grandp.children[0];
  let img_grandp = img_con.children[0];
  let img_p = img_grandp.children[0];
  let img = img_p.children[0].src;

  let priceCon = btn_parent.children[0];
  let price = priceCon.children[0].innerHTML;

  let textCon = btn_grandp.parentElement;
  let textName = textCon.children[0];
  let text = textName.children[0].innerHTML;

  let cartCon = document.createElement("div");
  cartCon.innerHTML = `
    <div class="car-card">
      <div class="car-info">
        <h2>${text}</h2>
        <p>SUV-Automatic</p>
        <div class="pricecon">
          <p class="cartprice">${price}</p>
          <span>/ day</span>
        </div>
      </div>
      <img alt="Car Image" src="${img}" class="car-image">
      <span class="del">
        <i class="fa-regular fa-trash-can"></i>
      </span>
    </div>
  `;

  // Add event listener for delete action
  cartCon.querySelector('.del').addEventListener('click', del);

  let wrap = document.querySelector('.wrapper');
  let success = document.createElement("div");
  success.innerHTML = `
    <div class="success">
      Successfully added  to cart  
      <span>
          <svg
            fill="#555150"
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
            stroke="#555150"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g transform="translate(1 1)">
                <g>
                  <g>
                    <path
                      d="M374.052,144.067c-5.12,0-8.533,3.413-8.533,8.533v7.68c0,28.16-23.04,52.053-51.2,52.053s-51.2-23.893-51.2-52.053 v-7.68c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v7.68c0,38.4,30.72,69.12,68.267,69.12 s68.267-30.72,68.267-69.12v-7.68C382.585,147.48,379.172,144.067,374.052,144.067z"
                    ></path>
                    <path
                      d="M203.385,255c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v11.093c0,17.92-15.36,31.573-34.133,31.573 c-18.773,0-34.133-14.507-34.133-31.573V255c0-5.12-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533v11.093 c0,27.307,23.04,48.64,51.2,48.64c28.16,0,51.2-21.333,51.2-48.64V255z"
                    ></path>
                    <path
                      d="M494.372,464.92l-27.307-324.267c-1.707-22.187-19.627-39.253-41.813-39.253h-42.667V67.267 C382.585,29.72,351.865-1,314.318-1s-68.267,30.72-68.267,68.267V101.4h-42.667c-20.76,0-37.782,14.944-41.284,35.042 c-3.211-0.592-6.525-0.908-9.916-0.908c-28.16,0-51.2,22.187-51.2,48.64V203.8h-33.28c-17.067,0-31.573,13.653-33.28,30.72 L15.651,476.013c-0.853,9.387,2.56,17.92,7.68,24.747c6.827,5.973,15.36,10.24,25.6,10.24h206.507h196.267 c11.947,0,22.187-5.12,31.573-12.8C490.958,488.813,495.225,476.867,494.372,464.92z M263.118,67.267 c0-28.16,23.04-51.2,51.2-51.2s51.2,23.04,51.2,51.2V101.4h-102.4V67.267z M118.052,184.173c0-17.92,15.36-31.573,34.133-31.573 c10.469,0,19.873,4.514,26.147,11.465c0.09,0.1,0.181,0.199,0.269,0.3c0.296,0.336,0.586,0.677,0.868,1.023 c0.107,0.132,0.208,0.268,0.313,0.402c0.448,0.57,0.875,1.155,1.282,1.752c0.146,0.214,0.292,0.428,0.432,0.645 c0.205,0.318,0.406,0.638,0.6,0.962c0.155,0.259,0.3,0.523,0.447,0.786c0.276,0.494,0.538,0.996,0.786,1.504 c0.141,0.288,0.28,0.577,0.411,0.87c0.139,0.309,0.273,0.619,0.401,0.932c0.151,0.37,0.292,0.744,0.428,1.12 c0.139,0.383,0.27,0.769,0.393,1.158c0.131,0.415,0.256,0.831,0.369,1.253c0.07,0.26,0.136,0.521,0.199,0.784 c0.131,0.551,0.249,1.105,0.348,1.665c0.028,0.158,0.054,0.315,0.079,0.473c0.094,0.596,0.168,1.198,0.225,1.804 c0.018,0.192,0.034,0.385,0.049,0.577c0.051,0.694,0.087,1.392,0.087,2.097V203.8h-68.267V184.173z M36.131,488.813 c-2.56-2.56-3.413-6.827-3.413-11.093l18.773-241.493c0.853-8.533,7.68-15.36,16.213-15.36h41.813h85.333h39.253 c8.533,0,15.36,6.827,16.213,15.36l16.238,189.44h-63.171c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h64.634 l1.463,17.067h-49.03c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h50.533c0.261,4.531-1.419,8.913-4.453,11.947 c-3.413,3.413-7.68,5.12-11.947,5.12H48.932C43.811,493.933,39.545,492.227,36.131,488.813z M469.625,486.253 c-4.267,5.12-11.093,7.68-17.92,7.68H284.451c3.413-5.973,5.12-12.8,4.267-19.627l-3.423-39.93 c0.001-0.06,0.009-0.117,0.009-0.177c0-0.708-0.071-1.379-0.197-2.017l-16.869-196.81c-1.707-17.92-15.36-31.573-33.28-31.573 h-0.853h-30.72v-19.627c0-1.007-0.041-2.003-0.103-2.993c-0.012-0.189-0.03-0.377-0.045-0.565 c-0.067-0.901-0.159-1.794-0.276-2.68c-0.009-0.063-0.016-0.126-0.025-0.19c-2.104-15.458-11.691-28.413-25.118-35.74 c1.033-12.633,12.033-22.685,24.714-22.685h221.867c12.8,0,23.893,9.387,24.747,23.04l21.702,257.707h-62.662 c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h64.099l1.437,17.067h-48.469c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533h49.906l1.293,15.36C477.305,473.453,474.745,481.133,469.625,486.253z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </span>
    </div>
  `;

  wrap.append(success);
  document.querySelector(".success").style.display = "flex";

  setTimeout(() => {
    document.querySelector(".success").style.display = "none";
  }, 1500);

let notify = document.querySelector(".notify") ;

notify.style.display = "block";


  cartCon.classList.add("cart-con");
  let cardbody = document.querySelector('.cardcontainer');
  cardbody.append(cartCon);

  removeLength(); // Check if the empty message should be shown
}








  
  
  
function del(event) {
let trash = event.target ;
 let remvCart = trash.parentElement.parentElement.parentElement;
 if (remvCart) {
      remvCart.remove();
    }
console.log(remvCart)
let cartlenght =document.querySelectorAll('.cart-con');
 removeLength();

}


removeLength();





function checkcart () {

  let tabcontent = document.getElementsByClassName("tabcontainer");
  let tabcon = document.getElementsByClassName('carTab');
  let tabwrap = document.getElementsByClassName('wrapper');
  let contone = document.getElementsByClassName('container-one');
  
  let contTwo = document.getElementsByClassName('container-two');
  
let cart = document.getElementsByClassName("maincart")



 
  for (let i = 0; i < tabwrap.length; i++) {
    tabwrap[i].style.display="none";
      
    }
    for (let i = 0; i < contone.length; i++) {
      contone[i].style.display="none";
        
      }
  
      for (let i = 0; i < contTwo.length; i++) {
     contTwo[i].style.display="none";
          
        }
  
        for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display="none";
            
          }
  
  
// cart container styling
          for (let i = 0; i < cart.length; i++) {
            cart[i].style.display="block";
              
            }
    


}



function back(event) {


let tabcontent = document.getElementsByClassName("tabcontainer");
  let tabcon = document.getElementsByClassName('carTab');
  let maincart = document.getElementsByClassName('maincart');
  let contone = document.getElementsByClassName('container-one');
  
  let contTwo = document.getElementsByClassName('container-two');
  
 
  for (let i = 0; i < maincart.length; i++) {
    maincart[i].style.display="none";
      
    }
    for (let i = 0; i < contone.length; i++) {
      contone[i].style.display="block";
        
      }
  
      for (let i = 0; i < contTwo.length; i++) {
     contTwo[i].style.display="block";
          
        }
  
        for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display="block";
            
          }
  
  


}


// function viewAll() {
//   alert("working")
// let carview = document.querySelector(".cars");

// carview.classList.toggle("carsview")
// carview.classList.remove("cars")




// }














