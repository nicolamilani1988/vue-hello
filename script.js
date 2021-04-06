function initVue() {
    new Vue({
        el: '#app', 
        data: {
            'bgClass': 'bg-red',
            'title': "Numero di click :",
            "clickNumber" : 0
        },
        methods: {
            colorChanger: function() {
                if (this.bgClass == 'bg-red') {
                    this.bgClass = 'bg-blue';
                } else {
                    this.bgClass = 'bg-red';
                }
            },

            clickIncreaser: function(){
                
                this.clickNumber++;
                if(this.clickNumber > 0){
                    this.bgClass = 'bg-red';
                } else {
                    this.bgClass = 'bg-blue';
                }   
                
            },

            clickDecreaser: function(){
                this.clickNumber--;
                if(this.clickNumber > 0){
                    this.bgClass = 'bg-red';
                } else {
                    this.bgClass = 'bg-blue';
                }
            }
        }
    });
}


function initJQuery() {
    const initText = 'Hello World!!';
    $('#input-msg').val(initText);
    $('#text-msg').text(initText);
    $('#input-msg').keyup(function() {
        const input = $(this);
        const text = input.val();
        $('#input-msg').text(text);
    });
}


function init() {
    initVue();
    // initJQuery();
}

$(init);