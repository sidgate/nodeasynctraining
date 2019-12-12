function newfun(a=1, b=2)
{
    console.log(a);
    console.log(b);
}

newfun(10);

// newfun.apply(15,13);
newfun.call(" ",15, 13);