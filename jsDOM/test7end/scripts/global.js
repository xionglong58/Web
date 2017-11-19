function addOnLoadEvent(func)
{
    var oldLoad=window.onload;
    if(typeof window.onload!="function")
    {
        window.onload=func;
    }
    else
    window.onload=function(){
        oldLoad();
        func();
    }
}
function insertAfter(newElement,targetElement)
{
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement)
        parent.appendchild(newElement)
    else{
        parent.insertBefore(newElement,targetElement.nextsibling);
    }
}
function addClass(element,value)
{
    if(!element.className)
    {
        element.className=value;
    }
    else{
        newClassName=element.className;//先保存原有的类名(一个标签可以有多个类名)
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}
function highLightPage()
{
    if((!document.getElementsByTagName)||(!document.getElementById)) return false;
    var headers=document.getElementsByTagName("header");
    if(headers.lenght==0) return false;
    var navs=headers[0].getElementsByTagName("nav");
    if(navs.lenght==0) return false;
    var links=navs[0].getElementsByTagName("a");
    var linkurl;    
    for(var i=0;i<(links.length);i++)
    {
        linkurl=links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl)!=-1)
        {
            links[i].className="here";
            var location=links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",location);//为每个链接设置一个id，便于针对不同的页面来设置风格
            // alert(location);
        }
    }    
}
function moveElement(elementId,final_x,final_y,iteral)
{

    var element=document.getElementById(elementId);
    if(element.movement)//判断上一次动作绑定的对象是否还存在 
        clearTimeout(element.movement);
    if(!element.style.top)
        element.style.top="0px";
    if(!element.style.left)
        element.style.left="0px";
        
    var xpos=parseInt(element.style.left);
    var ypos=parseInt(element.style.top);
    var dist=0;
    if((xpos==final_x)&&(ypos==final_y))
        return true;
     if(xpos<final_x)
     {  
        dist=Math.ceil((final_x-xpos)/10);
        xpos+=dist;  
     }
    if(xpos>final_x)
    {
        dist=Math.ceil((xpos-final_x)/10);
        xpos-=dist;
    }  
    if(ypos<final_y)
    {
        dist=Math.ceil((final_y-ypos)/10);
        ypos+=dist;
    }
    if(ypos>final_y)
    {
        dist=Math.ceil((ypos-final_y)/10);
        ypos-=dist;
    }
    element.style.left=xpos+"px";
    element.style.top=ypos+"px";
    var repeat="moveElement('"+elementId+"',"+final_x+","+final_y+","+iteral+")";
    element.movement=setTimeout(repeat,iteral);  
}
function prepareSlideShow()
{
    if(!(document.getElementById)||!(document.getElementsByTagName)) return false;
    if(!document.getElementById("intro")) return false;
    var intro=document.getElementById("intro");
    var slideShow=document.createElement("div");
    slideShow.setAttribute("id","slideshow");

    var frame=document.createElement("img");//给slides加上边框
    frame.setAttribute("src","file:///E:/Web/Web/jsDOM/test7end/images/frame.gif");
    frame.setAttribute("alt","none");
    frame.setAttribute("id","frame");
    slideShow.appendChild(frame);
    var preview=document.createElement("img");
    preview.setAttribute("src","file:///E:/Web/Web/jsDOM/test7end/images/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what you awaits you");
    preview.setAttribute("id","preview");
    slideShow.appendChild(preview);
    insertAfter(slideShow,intro);
    var links=document.getElementsByTagName("a");
    var destination;
    for(var i=0;i<links.length;i++)
    {
        links[i].onmouseover=function(){
            destination=this.getAttribute("href");
            if(destination.indexOf("about.html")!=-1)
            {
                moveElement("preview",-150,0,5);
            }
        }
    }
}
addOnLoadEvent(highLightPage);
addOnLoadEvent(prepareSlideShow);
