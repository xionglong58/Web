function showPic(whichPic)
{
	if(!document.getElementById("placeholder")) return false//检查id值是否存在
        var source=whichPic.getAttribute("href"); 
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;//检查页面是否指定需要显示的图片，若为false则导致触发点击链接事件，按照链接打开新页面显示图片
	placeholder.src=source;//在DOM应用在HTML上时，可以使用object.attribute代替object.getAttribute("attribute")
	if(document.getElementById("description"))//检查图片描述是否存在
	{		
	var text=whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
	var desription=document.getElementById("description");
	if(description.firstChild.nodeType==3)
	description.firstChild.nodeValue=text;
	} 
	return true; 
}

function prepareGallery()
{
  if(!document.getElementById||!document.getElementsByTagName)
	return false;//用于检测浏览器是否理解getElementById和getElementsByTagName
  if(!(document.getElementById("imageGallery")))
	return false;//检查是否存在标签，若不存在则返回false，导致在页面进行加载时不会触发事件
  var gallery=document.getElementById("imageGallery");
  var links=gallery.getElementsByTagName("a")
  for(var i=0;i<links.length;i++)//为图片链接绑定事件
  {
	links[i].onclick=function()
   {  
	return showPic(this)?false:true;
    }
   }
}
//为页面加载时间创建一个需要执行的函数队列
function addLoadEvent(func)//在页面加载时只能执行一个函数，需要将所有需要的函数封装在一个函数中
{
var oldonload=window.onload;
if(typeof window.onload!="functon")
  window.onload=func;//事件未绑定任何函数时，执行当前函数
else
{
  window.onload=function()
 {
	oldonload();
	func();
  }
}
}

addLoadEvent(prepareGallery);