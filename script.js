function initVue() {
    new Vue({
        el: '#app', 
        data: {
            text: 'Benvenuto ',
            nome: '',
            cognome: '',
            bgClass: "bg-pink",
            textClass: ""
        },
        
    })  
}





function init() {
    initVue();
}

$(init);