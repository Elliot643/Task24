function placeInfo(){
    $.getJSON("data.json", function(jsonData){
        document.getElementById("titlePlacement").innerHTML=jsonData.name+" - CV";;

    });
}
