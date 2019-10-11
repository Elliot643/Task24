function placeInfo(){
    $.getJSON("data.json", function(jsonData){
        console.log("in func");
        document.getElementById("titlePlacement").innerHTML=jsonData.name+" - CV";;

    });
}
