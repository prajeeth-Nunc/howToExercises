// Carousel images handling
const imagesContainer = document.querySelector(".images-container");
const Sampleimage = imagesContainer.querySelector('.images-container img');
const Images = imagesContainer.querySelectorAll('.images-container img');
// console.log(Array.from(Images));
const imagesPerSlide = 3;
const gapBetweenCards = 10;
const scrollWidthPerClick = Sampleimage.width * imagesPerSlide + gapBetweenCards * 6
const slidesCount = Math.ceil(Images.length / imagesPerSlide);

let Counter = 1;

function Left() {
    if (Counter === 1) {
        Counter = slidesCount;
        imagesContainer.scrollBy({
            top: 0,
            left: scrollWidthPerClick * slidesCount,
            behavior: 'smooth'
          });
        // imagesContainer.scrollBy(scrollWidthPerClick * slidesCount, 0);
    } else {
        Counter--;
        imagesContainer.scrollBy(-scrollWidthPerClick, 0);
    }
}

function Right() {
    if (Counter === slidesCount) {
        imagesContainer.scrollBy(-(scrollWidthPerClick * slidesCount), 0);
        Counter = 1
    } else {
        imagesContainer.scrollBy(scrollWidthPerClick, 0)
        Counter++;
    }
}

function Notification(Msg,statusFlag){
    const NotificationContainer = document.querySelector(".notification-container");
    // inserting the Msg 
    const messageTag = NotificationContainer.querySelector('#notification-message');
    messageTag.innerHTML = Msg;
    if (statusFlag === 'success'){
        // styling the notification container like "Success" card
        NotificationContainer.style.cssText = "display : block;"
        setTimeout(()=>{NotificationContainer.style.cssText = "display : none;"},2000)
    }else if(statusFlag === "failed"){
        // styling the notification container like "Failed" card
        NotificationContainer.style.cssText = "display : block;background:red;"
        setTimeout(()=>{NotificationContainer.style.cssText = "display : none;"},2000)
    }else{
        NotificationContainer.style.cssText = "display : block;background:orange;"
        setTimeout(()=>{NotificationContainer.style.cssText = "display : none;"},2000)
    }
}

// Login form handling
function Login(event){
    event.preventDefault();
    const validators = ["",null,undefined]
    const loginForm =document.querySelector(".login-form");
    const Email =  loginForm.querySelector('#email').value;
    const Password =  loginForm.querySelector('#password').value;
    console.log(Email,Password);
    if (validators.includes(Email) || validators.includes(Password)){
        Notification('Data missing','warning')
    }else{
        let data = {Email,Password}
        console.log('Login');
        fetch('http://localhost:3002/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(resData => {
            if(resData[0][0].Msg.toLowerCase() === "success"){
                Notification('Logged in Successfully','success')
                window.location.href = "/index.html";
            }else{
                Notification(resData[0][0].Msg,'failed')
            }
        })
        .catch((error) => {
            console.log(error)
            Notification(error,'failed')
        });
    }
    
}