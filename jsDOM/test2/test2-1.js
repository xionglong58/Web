function insertAfter(newElement,targetElement)//在指定元素的前面插入元素
{
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement)
	{
		parent.appendChild(newElement);
	}
	else
	{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function preparePlaceholder()
{
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imageGallery")) return false;
	
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","file:///E:/Web/Web/jsDOM/test1/cat.jpg");
	placeholder.setAttribute("alt","no picture");
	
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var text=document.createTextNode("choose a picture");
	description.appendChild(text);
	var gallery=document.getElementById("imageGallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);	
}

 function showPic(whichPic)
{
	if(!document.getElementById("placeholder")) 
	return true;
  var source=whichPic.getAttribute("href"); 
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description")) return false;
	
	var text=whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
	var desription=document.getElementById("description");
	if(description.firstChild.nodeType==3)
		description.firstChild.nodeValue=text;
	return false; 
}

function prepareGallery()
{
  if((!document.getElementById)||(!document.getElementsByTagName))
	return false;
  if(!(document.getElementById("imageGallery")))
	return false;
  var gallery=document.getElementById("imageGallery");
  var links=gallery.getElementsByTagName("a");

  for(var i=0;i<links.length;i++)
  {
	links[i].onclick=function()
   {  
		return showPic(this);
    }
   }
}

function addLoadEvent(func)
{
var oldonload=window.onload;
if(typeof window.onload!="functon")
  window.onload=func;
else
{
  window.onload=function()
 {
	oldonload();
	func();
  }
}
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);



