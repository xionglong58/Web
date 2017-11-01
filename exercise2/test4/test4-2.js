function showPic(whichPic)
{
	if(!document.getElementById("placeholder")) return false
        var source=whichPic.getAttribute("href"); 
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description"))
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
	return false;
  if(!(document.getElementById("imageGallery")))
	return false;
  var gallery=document.getElementById("imageGallery");
  var links=gallery.getElementsByTagName("a")
  for(var i=0;i<links.length;i++)
  {
	links[i].onclick=function()
   {  
	return showPic(this)?false:true;
    }
   }
}
//为页面加载时间创建一个需要执行的函数队列
function addLoadEvent(func)
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