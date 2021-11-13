let Dog = document.querySelector("#Dog");
let Cat = document.querySelector("#Cat");
let Right1 = document.querySelector("#Right");
let Left1 = document.querySelector("#Left");

Left = () =>
{
    Dog.style.display="none";
    Cat.style.display="block";
    Left1.style.width="800px";
    Right1.style.width="0";
}

Both = () =>
{
    Dog.style.display="block";
    Cat.style.display="block";
    Cat.style.width="400px";
    Dog.style.width="400px";
    Left1.style.width="400px";
    Right1.style.width="400px";
}

Right = () =>
{
    Cat.style.display="none";
    Dog.style.display="block";
    Right1.style.width="800px";
    Left1.style.width="0";
}