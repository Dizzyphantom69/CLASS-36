class Form{
constructor(){}

display(){
    var title = createElement("h2")
    title.html("GO CARS");
    title.position(150,0);

    var greeting = createElement("h3");
    
    var input = createInput("Name");
    input.position(150,200);

    var button = createButton("START");
    button.position(180,250);

    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount += 1;
        player.update(name);
        player.updateCount(playerCount);

       
        greeting.html("welcome "+name+ " to the race of your lives");
        greeting.position(100,250);

    } )
}



}