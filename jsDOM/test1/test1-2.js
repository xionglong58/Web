function showPic(whichPic)
{
	if(!document.getElementById("placeholder")) return false//���idֵ�Ƿ����
        var source=whichPic.getAttribute("href"); 
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;//���ҳ���Ƿ�ָ����Ҫ��ʾ��ͼƬ����Ϊfalse���´�����������¼����������Ӵ���ҳ����ʾͼƬ
	placeholder.src=source;//��DOMӦ����HTML��ʱ������ʹ��object.attribute����object.getAttribute("attribute")
	if(document.getElementById("description"))//���ͼƬ�����Ƿ����
	{		
	var text=whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
	var desription=document.getElementById("description");
	if(description.firstChild.nodeType==3)
	description.firstChild.nodeValue=text;
	} 
	return true; 
}

function prepareGallery()
{
  if(!document.getElementById||!document.getElementsByTagName)
	return false;//���ڼ��������Ƿ����getElementById��getElementsByTagName
  if(!(document.getElementById("imageGallery")))
	return false;//����Ƿ���ڱ�ǩ�����������򷵻�false��������ҳ����м���ʱ���ᴥ���¼�
  var gallery=document.getElementById("imageGallery");
  var links=gallery.getElementsByTagName("a")
  for(var i=0;i<links.length;i++)//ΪͼƬ���Ӱ��¼�
  {
	links[i].onclick=function()
   {  
	return showPic(this)?false:true;
    }
   }
}
//Ϊҳ�����ʱ�䴴��һ����Ҫִ�еĺ�������
function addLoadEvent(func)//��ҳ�����ʱֻ��ִ��һ����������Ҫ��������Ҫ�ĺ�����װ��һ��������
{
var oldonload=window.onload;
if(typeof window.onload!="functon")
  window.onload=func;//�¼�δ���κκ���ʱ��ִ�е�ǰ����
else
{
  window.onload=function()
 {
	oldonload();
	func();
  }
}
}

addLoadEvent(prepareGallery);