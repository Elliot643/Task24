function placeInfo(){
    $.getJSON("data.json", function(jsonData){
        document.getElementById("titlePlacement").innerHTML=jsonData.name+" - CV";;
        //document.getElementById("bigName").innerHTML=jsonData.name;
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

        document.getElementById("github").innerHTML="<a target=\"_blank\""+
            "href="+jsonData.links.github+"> <i class=\" fab fa-github fa-2x\"></i> </a> </a> GitHub";
        
        let allIntrests = "";
        for(let i=0;i<jsonData.intrests.length;i++){
            allIntrests+="<p>"+jsonData.intrests[i]+"</p>";
        }
        document.getElementById("intrestsInfo").innerHTML=allIntrests;

        let allExperience = "";
        for(let i=0;i<jsonData.experience.length;i++){
            let localExperience = jsonData.experience[i];
            allExperience+="<p><b><font size=\"4\">"+localExperience.title+" at "+localExperience.company+"</font></b><br>"+
                localExperience.yearStart+"-"+localExperience.yearEnd+"<br>"+localExperience.description+"</p>";
        }
        document.getElementById("experienceInfo").innerHTML=allExperience;

        let allEducation = "";
        for(let i=0;i<jsonData.education.length;i++){
            let localEducation = jsonData.education[i];
            allEducation+="<p><b><font size=\"4\">"+localEducation.title+"</font></b><br>"+localEducation.school+", "+
                localEducation.yearStart+"-"+localEducation.yearEnd+"</p>";
        }
        document.getElementById("educationInfo").innerHTML=allEducation;

        let allSkills = "";
        for(let i=0;i<jsonData.skills.length;i++){
            allSkills+="<p>"+jsonData.skills[i]+"</p>";
        }
        document.getElementById("skillsInfo").innerHTML=allSkills;

    });
}
