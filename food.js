(function(){
    function Food (options) {
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.bgColor = options.bgColor || 'green';
        this.map = options.map;
    }

    Food.prototype.init = function () {
        if (this.element) {
            this.map.removeChild(this.element);
        }
        var div = document.createElement('div');
        this.element = div;
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.bgColor;
        this.map.appendChild(div);
        this.randomPos();
    }
    Food.prototype.randomPos = function () {
        this.x = Math.floor(Math.random()*this.map.offsetWidth/this.width);
        this.element.style.left = this.x*this.width + 'px';
        this.y = Math.floor(Math.random()*this.map.offsetHeight/this.height);
        this.element.style.top = this.y*this.height + 'px';
    }
    window.Food = Food;
})()