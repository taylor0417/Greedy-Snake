(function(){
    function Snake (options) {
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.body = [
            { x : 1, y : 1, bgColor : 'orange'},
            { x : 2, y : 1, bgColor : 'orange'},
            { x : 3, y : 1, bgColor : 'red'}
        ];
        this.map = options.map;
        this.elements = [];
        this.direction = 'right';
    }
    Snake.prototype.init = function () {
        for(var i = 0;i<this.elements.length;i++){
            this.map.removeChild(this.elements[i]);
        }
        this.elements = [];
        var body = this.body, div;
        for(var i = 0; i < body.length; i++){
            div = document.createElement('div');
            this.elements.push(div);
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.backgroundColor = body[i].bgColor;
            div.style.left = body[i].x * this.width + 'px';
            div.style.top = body[i].y * this.height + 'px';
            this.map.appendChild(div);
        }
    }
    Snake.prototype.move = function () {
        for(var i = 0; i < this.body.length - 1; i++){
            this.body[i].x = this.body[i+1].x;
            this.body[i].y = this.body[i+1].y;
        }
        switch(this.direction){
            case 'right':
                this.body[this.body.length-1].x++;
                break;
            case 'left':
                this.body[this.body.length-1].x--;
                break;
            case 'down':
                this.body[this.body.length-1].y++;
                break;
            case 'up':
                this.body[this.body.length-1].y--;
                break;
        }
    }
    window.Snake = Snake;
})()