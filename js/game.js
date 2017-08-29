var game = new Phaser.Game(480, 640, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });
    function preload() {
        game.load.image('background', 'assets/images/background.png');
		game.load.image('r_slider', 'assets/images/right_slider.png');
		game.load.image('l_slider', 'assets/images/left_slider.png');
		game.load.image('n_goals', 'assets/images/north_goals.png');
		game.load.image('s_goals', 'assets/images/south_goals.png');
		game.load.image('ball', 'assets/images/ball/ball_1.png');
    }
	
	var r_slider;
	var l_slider;
	var ball;
	var n_goals;
	var s_goals;
	var sc = 0.75;
	
    function create() {
		var background = game.add.sprite(0, 0, 'background');
		background.scale.setTo(480/background.width, 640/background.height);
		
		ball = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
		ball.anchor.setTo(0.5, 0.5);
        //ball.body.collideWorldBounds = true;
        //ball.body.bounce.setTo(1, 1);
		
		r_slider = game.add.sprite(245, 540, 'r_slider');
		r_slider.scale.setTo(sc, sc);
		r_slider.anchor.setTo(0, 0.5);
        //r_slider.body.bounce.setTo(1, 1);
		l_slider = game.add.sprite(235, 540, 'l_slider');
		l_slider.scale.setTo(sc, sc);
		l_slider.anchor.setTo(1, 0.5);
        //l_slider.body.bounce.setTo(1, 1);
		
		n_goals = game.add.sprite(game.world.centerX, 0, 'n_goals');
		n_goals.scale.setTo(sc, sc);
		n_goals.anchor.setTo(0.5, 0);
		//n_goals.body.immovable = true;
		s_goals = game.add.sprite(game.world.centerX, 640, 's_goals');
		s_goals.scale.setTo(sc, sc);
		s_goals.anchor.setTo(0.5, 1);
		//s_goals.body.immovable = true;
    }

    function update () {
    }
	