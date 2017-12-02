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
        parent.appendChild(newElement)
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
{//该函数的作用是，当鼠标over某一链接时，在当前页面预览目标内容，若没有动作，则显示当前页面的内容，并且要显示的内容可以自定义。
    if(!(document.getElementById)||!(document.getElementsByTagName)) return false;
    if(!document.getElementById("intro")) return false;
    var intro=document.getElementById("intro");
    var slideShow=document.createElement("div");
    slideShow.setAttribute("id","slideshow");
    var frame=document.createElement("img");//给slides加上边框
    frame.setAttribute("src","file:///F:/Web/Web/jsDOM/test7end/images/frame.gif");
    frame.setAttribute("alt","none");
    frame.setAttribute("id","frame");
    slideShow.appendChild(frame);
    var preview=document.createElement("img");
    preview.setAttribute("src","file:///F:/Web/Web/jsDOM/test7end/images/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what you awaits you");
    preview.setAttribute("id","preview");
    slideShow.appendChild(preview);
    insertAfter(slideShow,intro);
    var links=document.getElementsByTagName("a");//在页面的任何地方检测到相应的url都能达到切换图片的目的
    //var links=intro.getElementsByTagName("a");//该语句使得切换动作只发生在从intro模块中才能触发
    var destination;
    for(var i=0;i<links.length;i++)
    {
        links[i].onmouseover=function(){
            destination=this.getAttribute("href");
            if(destination.indexOf("home.html")!=-1)
            {
                moveElement("preview",0,0,5);
            }
            if(destination.indexOf("about.html")!=-1)
            {
                moveElement("preview",-150,0,5);
            }
            if(destination.indexOf("photos.html")!=-1)
            {
                moveElement("preview",-300,0,5);
            }
            if(destination.indexOf("live.html")!=-1)
            {
                moveElement("preview",-450,0,5);
            }
            if(destination.indexOf("contact.html")!=-1)
            {
                moveElement("preview",-600,0,5);
            }      
        }
    }
}
function showSection(id)
{
    var sections=document.getElementsByTagName("section");
    for(var i=0;i<sections.length;i++)
    {
        if(sections[i].getAttribute("id")!=id)
            sections[i].style.display="none";
        else
            sections[i].style.display="block";
    }
}
function prepareInternalnav()//可以改进的地方是：设置默认下的显示block，以及对当前显示内容的url进行标注a.idname:visited
{//该函数的作用是，在页面内不建立导航，只显示当前导航下的内容，对于导航链接外的其他内容，则保持隐藏。
    if(!(document.getElementById)||!(document.getElementsByTagName)) return false;
    var articles=document.getElementsByTagName("article");
    if(articles.lenght==0) return false;
    var navs=articles[0].getElementsByTagName("nav");
    if(navs.lenght==0) return false;
    var nav=navs[0];
    var links=nav.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        var sectionID=links[i].getAttribute("href").split("#")[1];//将ID名取出来，split()函数将字符串分割为数组元素存储在数组中
        if(!document.getElementById(sectionID)) continue;
        document.getElementById(sectionID).style.display="none";//将sectionID标示的内容默认设置为不可见，在点击相应链接后才可见
        links[i].destination=sectionID;//将sectionID绑定到links[i]的属性中，目的是在伪函数中继续保证作用（延伸作用域）
        links[i].onclick=function(){
            showSection(this.destination);
            return false;
        }
    }
}

function showPicture(whichPic)
{//为要显示的图片绑定说明
    if(!document.getElementById("placeholder")) return true;
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(!document.getElementById("description")) return false;
    if(whichPic.getAttribute("title")){
        var text=whichPic.getAttribute("title")
    }
    else{
        var text="";
    }
    var description=document.getElementById("description")
    if(description.firstChild.nodeType==3){
        description.firstChild.nodeValue=text;
    }
    return false;
}
function preparePlaceholder()
{//函数的功能是为图片的显示选择合适的位置，并为要显示的图片设置相应的属性，以便其他函数识别、操作
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;    
    if(!document.getElementById("imagegallery")) return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","file:///F:/Web/Web/jsDOM/test7end/images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");

    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery=document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}
function prepareGallery()
{//该函数的作用则是为点击链接后添加动作。以此为每个链接a绑定动作。
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        links[i].onclick=function(){
            return showPicture(this);
        }
    }
}
addOnLoadEvent(preparePlaceholder);
addOnLoadEvent(prepareGallery);

addOnLoadEvent(highLightPage);
addOnLoadEvent(prepareSlideShow);
addOnLoadEvent(prepareInternalnav);


