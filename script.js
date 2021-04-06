function initVue() {
    new Vue({
        el: '#app', 
        data: {
            text: 'Benvenuto ',
            message: '',
            bgClass: "bg-pink",
            textClass: "blue-text"
        },
        
    })  
}





function init() {
    initVue();
}

$(init);