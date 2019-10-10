function placeInfo(){
    $.getJSON("data.json", function(jsonData){

        document.getElementById("namePlacement").innerHTML=jsonData.name;
        document.getElementById("phonePlacement").innerHTML="Phone Number: "+jsonData.phone;

        let languages = jsonData.languages;
        let languageOutput="Languages:<br>";
        for(let i=0;i<languages.length;i++){
            let language = languages[i];
            languageOutput+=language.name+", experience level: "+language.experience+"<br>";
        }
        document.getElementById("languages").innerHTML=languageOutput+"<br>";



        document.getElementById("skills").innerHTML="Technical Skills:<br>"+jsonData.skills;
        
        let educationOutput="";
        for(let i=0;i<jsonData.education.length;i++){
            educationOutput+="School: "+jsonData.education[i].school+", Title: "+jsonData.education[i].title;            
        }
        document.getElementById("education").innerHTML=educationOutput+"<br>";
    });
}
