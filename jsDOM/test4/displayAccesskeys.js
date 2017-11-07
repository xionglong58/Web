function displayAccessKeys()
{
    if((!document.getElementsByTagName)||(!document.createElement)||(!document.createTextNode)) return false;
    var links=document.getElementsByTagName("a");
    var akeys=new Array();
    for(var i=0;i<links.length;i++)
    {
        var curr_key=links[i];
        if(!curr_key.getAttribute("accesskey")) continue;
        var key=curr_key.getAttribute("accesskey");
        var text=curr_key.lastChild.nodeValue;
        akeys[key]=text;        
    }
    var list=document.createElement("ul");
    for(key in akeys)//创建快捷列表
    {
        var text=akeys[key];
        var str=key+":"+text;

        var item=document.createElement("li");
        var item_text=document.createTextNode(str);

        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header=document.createElement("h3");
    var header_text=document.createTextNode("Accesskeys:");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccessKeys);