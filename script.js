function initVue() {
    new Vue({
        el: '#app', 
        data: {
            text: 'Exercise Vue'
        }
    })  
}





function init() {
    initVue();
}

$(init);