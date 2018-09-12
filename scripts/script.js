function changeFont()
{
    if (String(document.getElementById("page-top").style.fontFamily) == "Impact, Charcoal, sans-serif")
    {
        document.getElementById("page-top").style.fontFamily = "Arial,Helvetica,sans-serif";
    }
    else
    {
        document.getElementById("page-top").style.fontFamily = "Impact,Charcoal,sans-serif";
    }
}

function makeBold()
{
    if (String(document.getElementById("page-top").style.fontWeight) == "bold")
    {
        document.getElementById("page-top").style.fontWeight = 'normal';
    }
    else
    {
        document.getElementById("page-top").style.fontWeight = 'bold';
    }
}

function changeBackColor()
{
    if (String(document.body.style.background) == "red none repeat scroll 0% 0%")
    {
        document.body.style.background = "grey";
    }
    else
    {
        document.body.style.background = "red";
    }
}

function changeColor()
{
    if (String(document.body.style.color) == "red")
    {
        document.body.style.color = "black";
    }
    else
    {
        document.body.style.color = "red";
    }
}

function pictureChange()
{
    var scr = String(document.getElementById('big_pic').src);
    if(scr.includes("eldrazi"))
    {
        document.getElementById('big_pic').src="images/red.jpg";
    }
    else
    {
        document.getElementById('big_pic').src="images/eldrazi.png";
    }

}
