var game = new Phaser.Game(480, 640, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

    function preload() {
        game.load.image('background', 'assets/images/background.png');
		game.load.image('r_slider', 'assets/images/right_slider.png');
		game.load.image('l_slider', 'assets/images/left_slider.png');
		game.load.image('n_goals', 'assets/images/north_goals.png');
		game.load.image('s_goals', 'assets/images/south_goals.png');
		game.load.image('ball', 'assets/images/ball/ball_1.png');
		game.load.image('platform', 'assets/images/platform.png');
    }
	
	var r_slider;
	var l_slider;
	var ball;
	var n_goals;
	var s_goals;
	var sc = 0.75;
	
    function create() {
		
		game.physics.startSystem(Phaser.Physics.P2JS);
		
		game.physics.p2.gravity.y = 100;
		game.physics.p2.restitution = 0.8;
		
		var background = game.add.sprite(0, 0, 'background');
		background.scale.setTo(480/background.width, 640/background.height);
		
		
		var l_platform1 = game.add.sprite(70, 495, 'platform');
		l_platform1.scale.setTo(1.5, 0.4);
		l_platform1.anchor.setTo(0.5, 0.5);
		game.physics.p2.enable(l_platform1);
		l_platform1.body.rotation = 24 * 3.14 / 180;
		l_platform1.body.static = true;
		
		var l_platform2 = game.add.sprite(88, 458, 'platform');
		l_platform2.scale.setTo(0.9, 0.4);
		l_platform2.anchor.setTo(0.5, 0.5);
		game.physics.p2.enable(l_platform2);
		l_platform2.body.rotation = 25 * 3.14 / 180;
		l_platform2.body.static = true;
		
		var l_platform3 = game.add.sprite(48, 415, 'platform');
		l_platform3.scale.setTo(0.4, 0.4);
		l_platform3.anchor.setTo(0.5, 0.5);
		game.physics.p2.enable(l_platform3);
		l_platform3.body.rotation = 90 * 3.14 / 180;
		l_platform3.body.static = true;
		
		var l_platform4 = game.add.sprite(160, 590, 'platform');
		l_platform4.scale.setTo(1, 0.4);
		l_platform4.anchor.setTo(0.5, 0.5);
		game.physics.p2.enable(l_platform4);
		l_platform4.body.rotation = 70 * 3.14 / 180;
		l_platform4.body.static = true;
		
		
		var p_platform1 = game.add.sprite(400, 500, 'platform');
		p_platform1.scale.setTo(1.5, 0.4);
		p_platform1.anchor.setTo(0.5, 0.5);
		game.physics.p2.enable(p_platform1);
		p_platform1.body.rotation = 155 * 3.14 / 180;
		p_platform1.body.static = true;
		
		var p_platform2 = game.add.sprite(390, 460, 'platform');
		p_platform2.scale.setTo(0.9, 0.4);
		p_platform2.anchor.setTo(0.5, 0.5);
		game.physics.p2.enable(p_platform2);
		p_platform2.body.rotation = 155 * 3.14 / 180;
		p_platform2.body.static = true;
		
		var p_platform3 = game.add.sprite(433, 420, 'platform');
		p_platform3.scale.setTo(0.4, 0.4);
		p_platform3.anchor.setTo(0.5, 0.5);
		game.physics.p2.enable(p_platform3);
		p_platform3.body.rotation = 90 * 3.14 / 180;
		p_platform3.body.static = true;
		
		var p_platform4 = game.add.sprite(320, 590, 'platform');
		p_platform4.scale.setTo(1, 0.4);
		p_platform4.anchor.setTo(0.5, 0.5);
		game.physics.p2.enable(p_platform4);
		p_platform4.body.rotation = 110 * 3.14 / 180;
		p_platform4.body.static = true;
		
		
		ball = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
		ball.anchor.setTo(0.5, 0.5);
		ball.scale.setTo(sc, sc);
		game.physics.p2.enable(ball);
		ball.body.setCircle(15);
		
		
		r_slider = game.add.sprite(340, 540, 'r_slider');
		r_slider.scale.setTo(sc, sc);
		game.physics.p2.enable(r_slider);
		r_slider.anchor.setTo(0.9, 0.5);
		r_slider.body.addRectangle(r_slider.width * sc, r_slider.height * sc, -0.6 * r_slider.width * sc, 0)
		r_slider.body.kinematic = true;
		r_slider.body.rotation = -25 * 3.14 / 180;
		//r_slider.angle = 40;
		
		l_slider = game.add.sprite(140, 540, 'l_slider');
		l_slider.scale.setTo(sc, sc);
		game.physics.p2.enable(l_slider);
		l_slider.anchor.setTo(0.1, 0.5);
		l_slider.body.addRectangle(r_slider.width * sc, r_slider.height * sc,  0.6 * l_slider.width * sc, 0)
		l_slider.body.kinematic = true;
		l_slider.body.rotation = 25 * 3.14 / 180;
		//l_slider.angle = -40;
		
		
		n_goals = game.add.sprite(game.world.centerX, 5, 'n_goals');
		n_goals.scale.setTo(sc, sc);
		n_goals.anchor.setTo(0.5, 0);
		game.physics.p2.enable(n_goals);
		n_goals.body.static = true;
		
		s_goals = game.add.sprite(game.world.centerX, 635, 's_goals');
		s_goals.scale.setTo(sc, sc);
		s_goals.anchor.setTo(0.5, 1);
		game.physics.p2.enable(s_goals);
		s_goals.body.static = true;
    }

    function update () {
    }
	
	function render(){
        /*game.debug.body(r_slider);
        game.debug.body(l_slider);*/
		
	}
	