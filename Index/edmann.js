var edamamurl = "https://api.edamam.com/search?";
var appid="93a32907"
var appkey ="533efb2900bb580754384019ef169620";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
function searchbutn()
{
    
var card_deck = document.createElement("div");
card_deck.setAttribute("class", "card-deck");
card_deck.style.marginTop = "10px";
let dishName = document.getElementById("search").value;
fetch(edamamurl + "q="+dishName + "&app_id=" + appid + "&app_key=" + appkey)
.then((responce) => {
    return responce.json();
    })
.then((result)=> {
    var hits=result["hits"];
    for (var i of hits) 
    {
    var column = document.createElement("div");
    column.setAttribute("class", "col-sm-4");
    column.style.marginTop="10px";
    var card = document.createElement("div");
    card.setAttribute("class","card")
    card.setAttribute("margin-top","10px")
    var title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerHTML =`${i["recipe"]["label"]}`;
    title.style.textAlign="center"
    title.style.marginTop = "10px";
    var card_body = document.createElement("div");
    card_body.setAttribute("class", "card-body");
    var image = document.createElement("img");
    image.src = `${i["recipe"]["image"]}`;
    image.setAttribute("class", "card-img-top");
    var healthlabel=document.createElement("h3")
    healthlabel.innerText="Health Labels"
    healthlabel.textAlign="center"
    var health=document.createElement("ul")
    var healthtext = `${i["recipe"]["healthLabels"]}`.split(",");
    for(j of healthtext)
    {
        var li1 = document.createElement("li");
        li1.innerText = j;
        li1.textAlign="center"
        health.append(li1);
    }
    var ingrediantlabel = document.createElement("h3");
    ingrediantlabel.innerText = "Ingredian List";
    ingrediantlabel.textAlign = "center";
    var ingredian = document.createElement("ul");
    var ingrediantext = `${i["recipe"]["ingredientLines"]}`.split(",");
    for (k of ingrediantext) {
    var li1 = document.createElement("li");
    li1.innerText = k;
    li1.textAlign = "center";
    ingredian.append(li1);
    }

    var calorieslabel = document.createElement("h3");
    calorieslabel.innerText = "Calories";
    calorieslabel.textAlign = "center";
    var calory=document.createElement("h5")
    calory.innerText = `${i["recipe"]["calories"]}`;

    card_body.append(image,healthlabel,health,ingrediantlabel,ingredian,calorieslabel,calory);
    card.append(title, card_body);
    column.append(card);
    card_deck.append(column);
    }
});

document.body.append(card_deck)
}
