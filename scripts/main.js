var type = false;
var height;
var canvas;
var width;
var ctx;

function initCanvas(){
	width = document.getElementById('main').offsetWidth;
	height = document.getElementById('main').offsetHeight;
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	canvas.width = width;
	canvas.height = height;
}

document.getElementById("typeObject").style.display = 'none';
document.getElementById("cbObject").addEventListener('change', toggleType);
function toggleType(){
	type = !type;
	if(type){
		document.getElementById("typeSurface").style.display = 'none';
		document.getElementById("typeObject").style.display = 'block';
	} else {
		document.getElementById("typeSurface").style.display = 'block';
		document.getElementById("typeObject").style.display = 'none';
	}
}

document.getElementById("draw").addEventListener('click', draw);
function draw(){
	if(type){
		if(camera != null && object != null){
			var points = object.points;
			ctx.fillStyle = '#FFFFFF';
			
			for(var i=0 ; i<points.length ; i++){
				var p = points[i];
				p = camera.changeCoord(p);
				p = camera.projectize(p);
				ctx.fillRect(p.x, p.y, 1, 1);
			}
		}	
	} else {
		if(camera != null && surface != null){
			var points = surface.mesh;
			ctx.fillStyle = '#FFFFFF';
			
			for(var i=0 ; i<points.length ; i++){
				for(var j=0 ; j<points[0].length ; j++){
					var p = points[i][j];
					p = camera.changeCoord(p);
					p = camera.projectize(p);
					ctx.fillRect(p.x, p.y, 1, 1);
				}
			}
		}
	}
}

initCanvas();
initGrid();


