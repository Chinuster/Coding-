name_of_the_students=[];

function submit() {

    var N1=document.getElementById("S1").Value;
    var N2=document.getElementById("S2").Value;
    var N3=document.getElementById("S3").Value;
    var N4=document.getElementById("S4").Value;

    name_of_the_students.push(N1);
    name_of_the_students.push(N2);
    name_of_the_students.push(N3);
    name_of_the_students.push(N4);

    console.log(name_of_the_students);

    document.getElementById("display_names").innerHTML=name_of_the_students;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting() {

    name_of_the_students.sort();
    console.log(name_of_the_students);

    document.getElementById("display_names").innerHTML=name_of_the_students;

    
}