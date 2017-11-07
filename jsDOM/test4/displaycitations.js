function displayCitations()
{
    if((!document.getElementsByTagName)||(!document.createElement)||(!document.createTextNode)) return false;
    var quotes=document.getElementsByTagName("blockquote")
    for(var i=0;i<quotes.length;i++)
    {
        if(!(quotes[i].getAttribute("cite"))) continue;
        var url=quotes[i].getAttribute("cite");
        var quoteChildren=quotes[i].getElementsByTagName("*");//将摘要的链接插到摘要内容的最后，在一些浏览器会将</p>和</blockquote>之间的换行符当作文本节点
        if(quoteChildren.length<1) continue;
        var elem=quoteChildren[quoteChildren.length-1];

        var link=document.createElement("a");
        var link_text=document.createTextNode("www.w3.org");

        link.appendChild(link_text);
        link.setAttribute("href",url);
        link.setAttribute("target",'blank')//点击链接后打开新的页面

        var supscript=document.createElement("sup");
        supscript.appendChild(link);

        elem.appendChild(supscript);
    }
}
addLoadEvent(displayCitations);