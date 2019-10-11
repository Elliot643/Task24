function placeInfo(){
    $.getJSON("data.json", function(jsonData){
        document.getElementById("titlePlacement").innerHTML=jsonData.name+" - CV";;
        document.getElementById("bigName").innerHTML=jsonData.name;
        document.getElementById("name").innerHTML=jsonData.name;
        document.getElementById("copyRightName").innerHTML="© Copyright 2019 "+jsonData.name;

        document.getElementById("phone").innerHTML=jsonData.phone;
        document.getElementById("city").innerHTML=jsonData.address.city;
        document.getElementById("streetAddress").innerHTML=jsonData.address.streetAddress;
        document.getElementById("postal").innerHTML=jsonData.address.postal;
        document.getElementById("name").innerHTML=jsonData.name;

        document.getElementById("email").innerHTML="<a href=\"mailto:"+jsonData.email+"\">"+
            "<i class=\"fas fa-envelope fa-2x\"></i> </a> </a>"+jsonData.email;

        document.getElementById("linkedin").innerHTML="<a target=\"_blank\" href="+jsonData.links.linkedin+">"+ 
            "<i class=\"fab fa-linkedin fa-2x\"></i> </a> LinkedIn";

        document.getElementById("linkedin").innerHTML="<a target=\"_blank\""+ 
            "href="+jsonData.links.github+"> <i class=\" fab fa-github fa-2x\"></i> </a> </a> GitHub";
        
        let allIntrests = "";
        for(let i=0;i<jsonData.intrests.length;i++){
            allIntrests+="<p>"+jsonData.intrests[i]+"</p>";
        }
        document.getElementById("intrests").innerHTML=allIntrests;

    });
}
