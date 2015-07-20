var img;
var height;
var width;
var offsetL;
var offsetT;
var ball;
var l,t;
var coordl = [];
var coordt = [];
var j=1,c;
var counter=0;
var position_id;
var r = 0;
var array = [];

function set()
{
    j=1;
    r=0;
    counter=0;
    
    img = document.getElementById("image");
    heightI = img.clientHeight;
    widthI = img.clientWidth;
    offsetL = img.style.left;
    offsetT = img.style.top;

    ball = document.getElementById("ball");
    ball.style.width = "4.5vmax";
    ball.style.height = "4.5vmax";

    ball.style.left = 0.5*widthI+"px";
    ball.style.top = 0.5*heightI+"px";

    if(array.length == 7)
	array=[];

    for(var i=1; i<=7; i++)
    {
	calculate_coord(i);
	coordl[i] = l;
	coordt[i] = t;
    }

    while(1)
    {
	position_id = Math.floor(Math.random()*7+1);
	alert(position_id);
	for(c  = 0;c<array.length;c++)
	{
	    if(array[c] == position_id)
		break;
	}
	if(c == array.length)
	    break;
	
    }
    array[c] = position_id;
    
}


function move(){
   
    ball.style.left = coordl[j]+"px";
    ball.style.top = coordt[j]+"px";
    
    if(j == r)
    {
	clearTimeout(animate);
	r = 0;j=1;
	return;
    }
    j++;
    if(j==8)
    {
	j=1;
	counter++;
    }
    if(counter == 1)
    {
	r = position_id;
    }
    animate = setTimeout(move,500); // call moveRight in 20msec
}
            
            function stop(){
               clearTimeout(animate);
            //   ball.style.left = '0px'; 
            }

function calculate_coord(id)
{
    var dispx,dispy;
    switch(id)
    {
	case 1:
	dispx = 0.065;
	dispy = 0.8;
	break;

	case 2:
	dispx = 0.37;
	dispy = 0.57;
	break;

	case 3:
	dispx = 0.53;
	dispy = 0.33;
	break;

	case 4:
	dispx = 0.67;
	dispy = 0.53;
	break;

	case 5:
	dispx = 0.88;
	dispy = 0.52;
	break;

	case 6:
	dispx = 0.75;
	dispy = 0.08;
	break;

	case 7:
	dispx = 0.8;
	dispy = 0.8;
	break;
    }

    l = dispx*widthI + offsetL;
    t = dispy*heightI + offsetT;

}

