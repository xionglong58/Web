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
function addAfter(newElement,targetElement)
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
        newClassName=element.className;//先保存原有的类名
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
    
    for(var i=0;i<links.lenght;i++)
    {
        linkurl=links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl)!=-1)
        links[i].className="here";
    }
}
addOnLoadEvent(highLightPage);