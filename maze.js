window.onload=function()
{
    var bounds= $$("div#maze div.boundary");
   
    for(var x=0;x<bounds.length;x++)
    {
        bounds[x].onmouseover= changeColor;
    }
    
    
    $("end").onmouseover= win;
    
    $("start").onmouseover=reset;
    
    $("maze").onmouseleave=changeColor;
    
};

var done=true,start_game=false,w=false;

function changeColor()
{
    if(start_game&&!w)
    {
    done=false;
    start_game=false;
    //$("boundary1").style.backgroundColor="red";
    var bounds= $$("div#maze div.boundary");
    
    for(var x=0;x<bounds.length;x++)
    {
        bounds[x].addClassName("youlose");
    }
    
    }
}

function win()
{
    if(start_game&&done)
    {
        //alert("You win!");
        $("status").innerHTML="You win!";
        w=true;
    }
}

function reset()
{
    var bounds= $$("div#maze div.boundary");
    
    for(var x=0;x<bounds.length;x++)
    {
        bounds[x].removeClassName("youlose");
    }
    
    done=true;
    start_game=true;
    w=false;
    
    $("status").innerHTML="";
}