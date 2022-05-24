
function arama(){
    const searchInput=document.querySelector("input");
    searchInput.addEventListener("keyup",function(){
        let data=this.value.toUpperCase();
        let li=document.querySelectorAll("ul li");
        for(let i=0;i<li.length;i++){
        console.log(li[i].innerHTML);
        if(li[i].innerHTML.toLocaleUpperCase().indexOf(data)>-1){
            li[i].style.display="";
        }else{
            li[i].style.display="none";
        }
        }
    });
}
arama();

function kayanyazi(){
    var marquee = document.querySelector('.yazz');
 
            var marqueeLength = marquee.clientWidth;
 
            var marqueeTravelTime = Math.ceil( marqueeLength / 100 );
 
            marquee.style.animation = `scrollLeft ${marqueeTravelTime}s linear infinite`;
 
            marquee.addEventListener('mouseover', (e)=>{
            marquee.style['animation-play-state'] = 'paused';
            })
 
            marquee.addEventListener('mouseout', (e)=>{
            marquee.style['animation-play-state'] = 'running';
            })
}
kayanyazi();

function begenbtn(){
    
    var btnSelam=document.getElementById("selam");
	btnSelam.onclick=function(){
		document.getElementById("demo").innerHTML = "Teşekkürler";}
    var btnSelam=document.getElementById("selam1");
    btnSelam.onclick=function(){
        document.getElementById("demo").innerHTML = "Yine Bekleriz";
}}
begenbtn();

function scroll(){
    ScrollReveal().reveal('.parca',{delay:500});
}
scroll();

function mOver(obj){
    obj.src="images/festival.jpg";
}

function mOut(obj){
    obj.src="images/festival1.jpg";
}

function sayfayenile(){
setTimeout(function(){
 window.location.reload(1);
}, 300000);
}
sayfayenile();


function giris()
{
alert("Sitemize hoş geldiniz");
}
giris();

function yakinlastir(){
    var options={
        width:400,
        height:300,
        zoomWidth:500,
        offset:{vertical:0,horizontal:10},
        scale:1.5
    }
    new ImageZoom(document.getElementById("rees"),options);
}
yakinlastir();

function sayfayagit(){
    document.querySelector("#sayfayagit").onclick=function(){
        window.location.href="https://tr.wikipedia.org/wiki/Anasayfa";
    }
}
sayfayagit();

function play() {
    y.play();
 }
 play();
 

function pause() {
 
    x.setAttribute("src", "");
    y.pause();
}  
pause();