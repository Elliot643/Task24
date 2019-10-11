function placeInfo(){
    $.getJSON("data.json", function(jsonData){
        document.getElementById("titlePlacement").innerHTML=jsonData.name+" - Curriculum Vitae";
        document.getElementById("bigName").innerHTML=jsonData.name;

        document.getElementById("emailPlacement").innerHTML="<a  href=\"mailto:"+jsonData.email+
        "\" target=\"_blank\">"+jsonData.email+"</a>";


        document.getElementById("phonePlacement").innerHTML="Phone "+jsonData.phone;

        document.getElementById("agePlacement").innerHTML="Age "+jsonData.age;
        document.getElementById("addressPlacement").innerHTML=jsonData.address.streetAddress+", "+
            jsonData.address.postal+" "+jsonData.address.city+", "+jsonData.address.country;

        document.getElementById("linkedinPlacement").innerHTML="<a  href=\""+jsonData.links.linkedin+
        "\" target=\"_blank\">LinkedIn</a>";
        
    });
}
