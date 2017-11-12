function addLoadEvent(func)
{
    var oldOnLoad=window.onload;
    if(typeof window.onload!="function")
        window.onload=func;
    else
    {
        window.onload=function()
        {
            oldOnLoad();
            func();
        }
    }
}
function moveElement(elementId,final_x,final_y,iteral)
{

    var element=document.getElementById(elementId);
    var xpos=parseInt(element.style.left);
    var ypos=parseInt(element.style.top);
    if((xpos==final_x)&&(ypos==final_y))
        return true;
     if(xpos<final_x)
        xpos++;
    if(xpos>final_x)
        xpos--;   
    if(ypos<final_y)
        ypos++;
    if(ypos>final_y)
        ypos--;
    element.style.left=xpos+"px";
    element.style.top=ypos+"px";
    var repeat="moveElement('"+elementId+"',"+final_x+","+final_y+","+iteral+")";
    movement=setTimeout(repeat,iteral);   
}
/* function positionMessage()
{
    if(!document.getElementById) return false;
    if(!document.getElementById('message')) return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    moveElement('message',500,500,10);    
} */
function positionMessage(elementID,final_x,final_y,iteral)
{
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem=document.getElementById(elementID);
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    moveElement(elementID,final_x,final_y,iteral);    
}
addLoadEvent(positionMessage("message",500,500,10));