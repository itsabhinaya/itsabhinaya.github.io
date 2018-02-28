void function () {

	var depth = 11 , branchWidth = 12, step = 0
	var newDepthPub, depthPub
	var canvas = document.getElementById('mycanvas')
	var ctx = canvas.getContext('2d')
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
    ctx.globalCompositeOperation = 'color';

	var drawTree = function (ctx, startX, startY, length, angle ,depth, branchWidth) {
		var rand = Math.random, newDepth,
			newLength, newAngle, maxBranch = 3, 
			endX, endY, maxAngle = 2*Math.PI /4,
			subBranches, lenShrink;

		ctx.beginPath()
		ctx.moveTo(startX, startY)
		endX = startX + length * Math.cos(angle)
		endY = startY + length * Math.sin(angle)
		ctx.lineCap = 'round'
		ctx.lineWidth = branchWidth
		ctx.lineTo(endX, endY)

		if (depth <= 2) {
			ctx.strokeStyle = 'rgb(0,' +(((rand()*64) + 128) >> 0) + ',0)'
		}else{
			ctx.strokeStyle = 'rgb(' +(((rand()*64) + 64) >> 0) + ',50, 25)'
		}
		ctx.stroke()

		newDepth = depth -1
		if (!newDepth) return


		subBranches = maxBranch -1
		branchWidth *= .7
			console.log("sldfjhlksdjflk;sjdlkfjsdfsdfsdf");
			console.log(subBranches);
			console.log(maxBranch);

		for (var i = 0; i < subBranches; i++) {
			newAngle = angle + rand()*maxAngle - maxAngle*.4
			newLength = length * (.9 + rand()*.3)
			console.log(step);
			setTimeout(function () {
				drawTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth)
				newDepthPub = newDepth
				depthPub = depth
				step++;
			},10)
		}
	}

	var init = function () {
		step = 0
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
    	ctx.globalCompositeOperation = 'color';
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
		console.log("inside the init");
		drawTree(ctx, ~~(window.innerWidth/2), ~~(window.innerHeight/1.02), 60, -Math.PI/2, depth, branchWidth)
	}

	var regrow = function () {
		console.log("inside the regrow");
		if (step < 10) return
		init()
	}

	document.querySelector('.treecanvas').addEventListener('click', function (e) {
		regrow()
	})

	document.addEventListener('DOMContentLoaded',function(){
				console.log("inside the initial event");

		init()
	},false);

	window.onresize = regrow

}();