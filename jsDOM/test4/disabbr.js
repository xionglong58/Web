function disabbr()
{
    if((!document.getElementsByTagName)||(!document.createElement)||(!document.createTextNode)) return false;//检查浏览器是否支持DOM的方法。限于检测document对象的方法
    var abbreviations=document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;
    var defs=new Array();
    for(var i=0;i<abbreviations.length;i++)
    {
        var current_abbr=abbreviations[i];
        if(current_abbr.length<1) continue;//在IE早期版本中并没有<abbr>标签，此处是为了平稳退化，IE浏览器在统计<abbr>标签的个数是会返回0值
        var definition=current_abbr.getAttribute("title");
        var key=current_abbr.lastChild.nodeValue;
        defs[key]=definition;//提取简写和对应的全称，并存储在关联数组中
    }
    var dlist=document.createElement("dl");
    for(key in defs)
    {
        var definition=defs[key];
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);//依据上面建立的关联数组，创建表格内容

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length<1) return false;//建立的缩略表为空时（创建失败），返回false

    var header=document.createElement("h2");
    var header_text=document.createTextNode("Attreviations");
    header.appendChild(header_text);

    document.body.appendChild(header);
    document.body.appendChild(dlist);    
}
addLoadEvent(disabbr);