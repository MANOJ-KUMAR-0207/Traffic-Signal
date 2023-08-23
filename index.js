function off()
{
    document.getElementById("red").classList.remove('redSelected');
    document.getElementById("yellow").classList.remove('yellowSelected');
    document.getElementById("green").classList.remove('greenSelected');
}
function warn()
{
    var accelerator=document.getElementById("accelerator");
    var brake=document.getElementById("brake");
    if(!brake.classList.contains("pressed"))
        brake.classList.add("warning");
    if(accelerator.classList.contains("pressed"))
        accelerator.classList.add("warning");
    accelerator.classList.remove("go");
}
function red()
{
    off();
    var brake=document.getElementById("brake");
    document.getElementById("red").classList.add("redSelected");
    warn();
}
function yellow()
{
    off();
    var brake=document.getElementById("brake");
    document.getElementById("yellow").classList.add("yellowSelected");
    warn();
}
function green()
{
    off();
    var accelerator=document.getElementById("accelerator");
    document.getElementById("green").classList.add("greenSelected");
    if(!accelerator.classList.contains("pressed"))
        document.getElementById("accelerator").classList.add("go");
    document.getElementById("brake").classList.remove("warning");
}
function stop()
{
    var speedometer=document.getElementById("speedometer");
    var brake=document.getElementById("brake");
    brake.classList.remove("warning");
    brake.classList.toggle("pressed");
    brake.classList.remove("accelerate");
}
function go()
{
    var accelerator=document.getElementById("accelerator");
    var speedometer=document.getElementById("speedometer");
    accelerator.classList.remove("go");
    accelerator.classList.remove("warning");
    accelerator.classList.toggle("pressed");
    accelerator.classList.toggle("control");
    speedometer.classList.toggle("accelerate");

}
document.addEventListener("keydown",function(event)
{
    var steering=document.getElementById("steering");
    var accelerator=document.getElementById("accelerator");
    var brake=document.getElementById("brake");
    var speedometer=document.getElementById("speedometer");
    switch(event.key)
    {
        case 'ArrowLeft':
            steering.classList.add("turnLeft");
            steering.classList.remove("turnRight");
            break;
        case 'ArrowRight':
            steering.classList.add("turnRight");
            steering.classList.remove("turnLeft");
            break;
        case 'ArrowUp':
            accelerator.classList.add("pressed");
            accelerator.classList.remove("go");
            speedometer.classList.add("accelerate");
            break;
        case 'ArrowDown':
            stop();
            break;
        case ' ':
            stop();
            break;
        case 'R':
            off();
            red();
            break;
        case 'r':
            off();
            red();
            break;
        case 'Y':
            off();
            yellow();
            break;
        case 'y':
            off();
            yellow();
            break;
        case 'G':
            off();
            green();
            break;
        case 'g':
            off();
            green();
            break;
        case 'H':
            horn();
        case 'h':
            horn();
    }
})
document.addEventListener("keyup",function(event)
{
    var steering=document.getElementById("steering");
    var accelerator=document.getElementById("accelerator");
    var speedometer=document.getElementById("speedometer");
    var brake=document.getElementById("brake");
    switch(event.key)
    {
        case 'ArrowLeft':
            steering.classList.remove("turnLeft");
            break;
        case 'ArrowRight':
            steering.classList.remove("turnRight");
            break;
        case 'ArrowUp':
            accelerator.classList.remove("pressed");
            speedometer.classList.remove("accelerate");
            break;
        case 'ArrowDown':
            brake.classList.remove("pressed");
            break;
        case ' ':
            brake.classList.remove("pressed");
            break;
    }
})
function horn()
{
    var horn=new Audio("Assets/Audio/Horn.mp3");
    horn.play();
}