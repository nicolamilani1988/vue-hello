function initVue() {
    new Vue({
        el: '#app', 
        data: {
            text: 'Benvenuto ',
            nome: '',
            cognome: '',
            bgClass: "bg-pink",
            textClass: "",
            image: "./img/trollface.jpg",
            bgClassInput: "",
        },
        methods:{
            saluto: function(){
                return `
                    ${this.text} ${this.nome} ${this.cognome} 
                `
            }
        }
        
    })  
}





function init() {
    initVue();
}

$(init);