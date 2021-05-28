var family_names=["Advaith","Shanti","Srinivas","Punya lakshmi","veerabhaddhara rao","Trinaad","Sunitha","Kaarthik"];
var family_images=["https://lh3.googleusercontent.com/ogw/ADGmqu9oH4DBzr5yad1wrUUvP_6RGLTcxn6O1RmLYieFjQ=s192-c-mo","amma.jfif","https://business.bing.com/api/v3/search/person/photo?caller=IP&id=62f020b8-aa29-4cf5-99f4-29fca7692dfc","ammama.jfif","thhathu.jfif","download (15).jfif","OIP.jfif","kaarthik.jfif"];

var i=0;
function update(){

    i++;
    var numberofpeople= "8"
    if (i > numberofpeople){

        i=0;
    }
    var images=family_images[i];
    var names=family_names[i];
    document.getElementById("named").innerHTML=names;
    document.getElementById("img1").src= images;
}