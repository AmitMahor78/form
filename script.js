  const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const errorMsgDiv = document.getElementById('error-msg');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        errorMsgDiv.innerText = 'Please fill in both username and password.';
        return;

    }


    if (username === 'amit_mahor_16' && password === '9244756609') {

        errorMsgDiv.innerText = ''
        document.querySelector("body").style.backgroundColor = "black"
        document.querySelector('#login-form').style.display= "none"
        document.querySelector("section").style.display = "flex"
        document.querySelector(".container").style.display= "none"
        document.querySelector("section").style.display = "flex";

        
        
    } else {
        errorMsgDiv.innerText = 'Invalid username or password.';
     }
});
func();

function func(){
    document.addEventListener("copy",(event)=>{
          const selectedData = window.getSelection().toString();
          event.clipboardData.setData(
              "text/plain",
            f()
          );
          event.preventDefault();
      });
      function f(){
          let gamenum = "ATM116";
  let usernum = prompt("Enter the password ");
  
  while (usernum != gamenum) {
         usernum = prompt("your password is wrong  ");
  } 
  const selectedData = window.getSelection().toString();
          event.clipboardData.setData(
              "text/plain",
              
          );
      }
      document.addEventListener('keydown', function() {
      if (event.keyCode == 123) {
        f();
        return false;
      } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        f();
        return false;
      } else if (event.ctrlKey && event.keyCode == 85) {
        f();
        return false;
      }
    }, false);
    
    if (document.addEventListener) {
      document.addEventListener('contextmenu', function(e) {
        f();
        e.preventDefault();
      }, false);
    } else {
      document.attachEvent('oncontextmenu', function() {
        f();
        window.event.returnValue = false;
      });
    }
  }
  