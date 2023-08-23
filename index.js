function off()
{
    document.getElementById("red").classList.remove('redSelected');
    document.getElementById("yellow").classList.remove('yellowSelected');
    document.getElementById("green").classList.remove('greenSelected');
}
function red()
{
    off();
    var brake=document.getElementById("brake");
    document.getElementById("red").classList.add("redSelected");
    var accelerator=document.getElementById("accelerator");
    accelerator.classList.remove("go");
    content.innerHTML="Stop !!";
    if(!brake.classList.contains("pressed"))
        brake.classList.add("warning");
    if(accelerator.classList.contains("pressed"))
        accelerator.classList.add("warning");
}
function yellow()
{
    off();
    var brake=document.getElementById("brake");
    document.getElementById("yellow").classList.add("yellowSelected");
    document.getElementById("accelerator").classList.remove("go");
    document.getElementById("content").innerHTML="Wait";
    if(!brake.classList.contains("pressed"))
        brake.classList.add("warning");
    if(accelerator.classList.contains("pressed"))
        accelerator.classList.add("warning");
}
function green()
{
    off();
    var accelerator=document.getElementById("accelerator");
    document.getElementById("content").innerHTML="Go !";
    document.getElementById("green").classList.add("greenSelected");
    if(!accelerator.classList.contains("pressed"))
        document.getElementById("accelerator").classList.add("go");
    document.getElementById("brake").classList.remove("warning");
}
function stop()
{
    var brake=document.getElementById("brake");
    brake.classList.remove("warning");
    brake.classList.toggle("pressed");
    brake.classList.toggle("control");
}
function go()
{
    var accelerator=document.getElementById("accelerator");
    accelerator.classList.remove("go");
    accelerator.classList.remove("warning");
    accelerator.classList.toggle("pressed");
    accelerator.classList.toggle("control");
}
