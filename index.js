
function off()
{
    document.getElementById("red").classList.remove('redSelected');
    document.getElementById("yellow").classList.remove('yellowSelected');
    document.getElementById("green").classList.remove('greenSelected');
}
function red()
{
    off();
    document.getElementById("brake").classList.add("warning");
    document.getElementById("red").classList.add("redSelected");
    var accelerator=document.getElementById("accelerator");
    accelerator.classList.remove("go");
    content.innerHTML="Stop !!";
    if(accelerator.classList.contains("pressed"))
        accelerator.classList.add("warning");
}
function yellow()
{
    off();
    document.getElementById("yellow").classList.add("yellowSelected");
    document.getElementById("brake").classList.add("warning");
    document.getElementById("accelerator").classList.remove("go");
    document.getElementById("content").innerHTML="Wait";
}
function green()
{
    off();
    document.getElementById("content").innerHTML="Go !";
    document.getElementById("green").classList.add("greenSelected");
    document.getElementById("accelerator").classList.add("go");
    document.getElementById("brake").classList.remove("warning");
}
function stop()
{
    var brake=document.getElementById("brake");
    brake.classList.remove("warning");
    brake.classList.toggle("pressed");
}
function go()
{
    var accelerator=document.getElementById("accelerator");
    accelerator.classList.remove("go");
    accelerator.classList.remove("warning");
    accelerator.classList.toggle("pressed");
}
