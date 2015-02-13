var slide ;
var but;
var _name, nameList =[];
var move;
var wrapper;
var myScroll;
var page;
var show = false;
var div;

function CreatePage(){
    for(i=0; i< 7; i++){
        slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = 'url(img/'+(i+1)+'.jpg)';
        slide.style.left = (i*1024)+'px';
        //nameList[i] = new Image();
        //nameList[i].src = 'img/name-'+(i+1)+'.png';
        move.appendChild(slide);
	if(i==0) div = slide;
    }
    //name = document.createElement('img');
    //name.className = 'name';
    //name.style.opacity = 0;
}

function loaded() {
	myScroll = new iScroll('wrapper', {
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function () {
			//document.querySelector('#indicator > li.active').className = '';
			//document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
                        /*var n = this.currPageX-1;
                        var obj = document.getElementById('forcus');
                        obj.className = 'but-blur';
                        obj.id = '';
                        but[n+1].className = 'but-forcus';
                        but[n+1].id = 'forcus';*/
                        //_name.src = nameList[n+1].src;
                        //_name.className = 'name1';
                        //name.style.opacity = 1;
		}
	 });
};

function Popup(){
    if(show==false){
        popup.style.opacity = 1;
        show = true;
    }
    else{
        popup.style.opacity = 0;
        show = false;
    }
};

function ClosePopup(){
    popup.style.opacity = 0;
    show = false;
};


window.onload = function(){
    move = document.getElementById('move');
    page = document.getElementById('but');
    but = page.getElementsByTagName('div');
    //popup = document.getElementById('popup');
    //_name = document.getElementById('name');
    //_name.addEventListener('click',Popup,false);
    //popup.addEventListener('click',ClosePopup,false);
     var style = 'imgDiv';
    var imgFolder = 'img/seri/';
    var imgCount = 26;
    CreatePage();
    loaded() ;
    rotate = new Move360(div,imgFolder,imgCount,style);
}