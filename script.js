function initVue() {
    new Vue({
        el: '#app', 
        data: {
            text: 'Benvenuto ',
            message: '',
        }
    })  
}





function init() {
    initVue();
}

$(init);