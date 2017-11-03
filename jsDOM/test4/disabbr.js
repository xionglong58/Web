function disabbr()
{
    var abbreviations=document.getElementsByClassName("abbr");
    if(abbreviations.length<1) return false;
    var defs=new Array();
    for(var i;i<abbreviations.length;i++)
    {
        var current_abbr=abbreviations[i];
        var definition=current_abbr.getAttribute("title");
        var key=current_abbr.lastChild.nodeValue;
        defs[definition]=key;
    }
    var dlist=document.createElement("dl");
    for(key in defs)
    {
        var definition=defs[key];
        var dtitle=document.createAttribute("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createAttribute("dd");
        var ddesc_text=document.createTextNode("definition");
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtile);
        dlist.appendChild(ddesc);
    }

    var header=document.createAttribute("h2");
    var header_text=document.createTextNode("Attreviations");
    header.appendChild(header_text);

    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(dlist);    
}
addLoadEvent(disabbr);