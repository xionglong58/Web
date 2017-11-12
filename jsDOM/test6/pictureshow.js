function addOnLoadEvent(func)
{
    var oldLoadEvent=window.onload;
    if(typeof window.onload!="function")
        window.onload=func();
    else
    {
        window.onload=function()
        {
            oldLoadEvent();
            func();
        }
    }
}
function insertAfter(newElem,target)
{
    var parent=target.parentNode;
    if(parent.lastChild==target)
        parent.appendChild(newElem);
    else
    {
        parent.insertBefore(newElem,target.nextSilding);
    }
}
 function addElement()
{
    var newDiv=document.createElement("div");
    newDiv.setAttribute("id","pictureshow");
    var newElem2=document.createElement("img");
    newElem2.setAttribute("src","file:///E:/Web/Web/jsDOM/test6/monkey.jpg");
    newElem2.setAttribute("alt","no pictures");
    newElem2.setAttribute("id","picture");

    newDiv.appendChild(newElem2);
    var div=document.getElementById("range");
    insertAfter(newDiv,div);   
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
function showPicture()
{
    if(!document.getElementsByTagName||!document.getElementById) return false;
    if(!document.getElementById("linklist")||!document.getElementById("pictureshow")) return false;

    var picture=document.getElementById("picture");
    picture.style.position="absolute"
    picture.style.left="0px";
    picture.style.top="0px";

    var list=document.getElementById("linklist");
    var parts=list.getElementsByTagName("li");

    parts[0].onmouseover=function(){
        moveElement("picture",-200,-120,10);
    }

    parts[1].onmouseover=function(){
        moveElement("picture",-100,0,10);
    }

    parts[2].onmouseover=function(){
        moveElement("picture",-120,50,10);
    }
}
addOnLoadEvent(addElement);
addOnLoadEvent(showPicture);