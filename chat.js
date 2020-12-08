let chatBtn = document.querySelector('.chat-icon');
let chatWrapper = document.querySelector('.chat-wrapper');
let chatClose = document.querySelector('.close');
let chatMinimize = document.querySelector('.minimize');
let chatContentArea =  document.querySelector('.chat-content-area');
let chatBox =  document.querySelector('.chat-box');
let chatMessage = document.querySelector('.chat-message');
let send = document.querySelector('.send');
let alert = document.querySelector('.alert');
let yes = document.querySelector('.yes');
let cancel = document.querySelector('.cancel');

var Notification = {
    error : (Msg) => {
        const NotContainer = document.querySelector(".notification-container");
        const msgTag = NotContainer.querySelector('#notification-message');
        msgTag.innerHTML = Msg;
        NotContainer.style.cssText = "display : block;background:#fa626b;";
        setTimeout(()=>{NotContainer.style.cssText = "display : none;"},3000)
    },
    success : (Msg) => {
        const NotContainer = document.querySelector(".notification-container");
        const msgTag = NotContainer.querySelector('#notification-message');
        msgTag.innerHTML = Msg;
        NotContainer.style.display = "block";
        setTimeout(()=>{NotContainer.style.cssText = "display : none;"},3000)
    },
    warning : (Msg) => {
        const NotContainer = document.querySelector(".notification-container");
        const msgTag = NotContainer.querySelector('#notification-message');
        msgTag.innerHTML = Msg;
        NotContainer.style.cssText = "display : block;background:#fdb901;";
        setTimeout(()=>{NotContainer.style.cssText = "display : none;"},3000)
    }
}

let Controls = {
    openChat : function(){
        chatBtn.style.display = 'none';
        chatWrapper.style.display = "block";
    },
    closeChat : function(){
        Alert.closeAlertBox;
        chatWrapper.style.display = "none";
        chatBtn.style.display = 'block';
    },
    minimize : function(){
        if((chatContentArea.style.display !== 'none') && (chatBox.style.display !== 'none')){
            chatContentArea.style.display = 'none';
            chatBox.style.display = 'none';
        }else {
            chatContentArea.style.display = 'flex';
            chatBox.style.display = 'block';
        }
    },
    send : function(){
        console.log('sending')
        let msg = chatMessage.value;
        if(msg !== ""){
            let span = document.createElement('span');
            span.setAttribute('class','time');
            let date = new Date();
            let time = date.getHours() + ':' + date.getMinutes()
            let pTag = document.createElement('p')
            // let span1 = document.createElement('span')
            pTag.setAttribute('class','message')
            span.textContent = time;
            span.style.textAlign = "right";
            // span1.textContent = msg;
            pTag.textContent = msg;
            pTag.style.textAlign = "right";
            // pTag.appendChild(span1);
            chatContentArea.appendChild(span);
            chatContentArea.appendChild(pTag);
            chatMessage.value = "";
        }
    }
}


let Alert = {
    showAlertBox : function(){
        chatContentArea.style.display = 'flex';
        chatBox.style.display = 'block';
        alert.style.display = "block";
    },
    closeAlertBox : function(){
        alert.style.display = "none";
    }
}

chatBtn.addEventListener('click',Controls.openChat);
chatClose.addEventListener('click',Alert.showAlertBox);
chatMinimize.addEventListener('click',Controls.minimize);
send.addEventListener('click',Controls.send);
yes.addEventListener('click',Controls.closeChat);
cancel.addEventListener('click',Alert.closeAlertBox)

window.addEventListener('online',function(e){
    console.log("Online");
    Notification.success('Online');
}
);

window.addEventListener('offline',function(e){
    console.log("Offline");
    Notification.error('No Network');
});
