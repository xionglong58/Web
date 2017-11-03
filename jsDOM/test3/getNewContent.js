function getNewContent()
{
    var request=getHTTPObject();
    if(request)
    {
        request.open("GET","file:///E:/Web/Web/jsDOM/test3/example.txt",true);
        request.onreadystatechange=function()
        {
            if(request.readyState==4)
            {
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
    request.send(null);
    }
    else
    {
        alert("Sorry, your broswer does not support XMLHTTPRequest");
    }
}

addLoadEvent(getNewContent);