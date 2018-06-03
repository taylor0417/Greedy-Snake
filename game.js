(function(){
    function Game (options) {
        this.map = options.map;
        this.food = new Food({map:this.map});
        this.snake = new Snake({map:this.map});
    };

    Game.prototype.start = function () {
        this.food.init();
        this.snake.init();
        this.snakeRun();
        this.keySet();
    };
    Game.prototype.snakeRun = function () {
        var timer = null;
        var snake = this.snake;
        var food = this.food;
        var head = snake.body[snake.body.length - 1];
        timer = setInterval(function(){
            var X = snake.body[0].x;
            var Y = snake.body[0].y;
            snake.move();
            if(food.x === head.x && food.y === head.y){
                food.init();
                snake.body.unshift({x : X, y : Y, bgColor : 'orange'});
            };
            if(head.x < 0 || head.y < 0 || head.x > 39 || head.y >29){
                clearInterval(timer);
                alert('游戏结束：撞到了墙壁');
                return;
            }
            for(var i = 0;i < snake.body.length - 4; i++){
                if(snake.body[i].x === head.x && snake.body[i].y === head.y){
                    alert('游戏结束:撞到了蛇身');
                    return;
                }
            }
            snake.init();
        },150)
    }
    var flag = true;
    Game.prototype.keySet = function () {
        var that = this;
        document.onkeydown = function(e){
            if(flag === false){return;}
            flag = false;
            setTimeout(function(){
                flag = true;
            },150);
            switch(true){
                case e.keyCode === 40 && that.snake.direction !=='up' :
                    that.snake.direction = 'down';
                    break;
                case e.keyCode === 38 && that.snake.direction !=='down' :
                    that.snake.direction = 'up';
                    break;
                case e.keyCode === 37 && that.snake.direction !=='right' :
                    that.snake.direction = 'left';
                    break;
                case e.keyCode === 39 && that.snake.direction !=='left' :
                    that.snake.direction = 'right';
                    break;
            }
        }
    }
    window.Game = Game;
})()