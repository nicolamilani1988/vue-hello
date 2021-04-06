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