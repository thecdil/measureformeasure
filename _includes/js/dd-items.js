/* Load items from Sheets, store in sessionStorage, or load from sessionStorage */
var dd_items = [];
var dd_scenes = [];
var scenesNav = [];

if (sessionStorage.getItem("dd_metadata_set")){
  var current_metadata = sessionStorage.getItem("dd_metadata_set");}

// function to process items from Sheets and store
function dd_items_init(results) {
  dd_items = results.data.filter(item => item["dataline"]);
  dd_scenes = $.unique(dd_items.map(function (d) {return d.actscene;}));
  sessionStorage.setItem("dd_items_store", JSON.stringify(dd_items));
  sessionStorage.setItem("dd_scenes_store", JSON.stringify(dd_scenes));
  sessionStorage.setItem("dd_title", dd_items[1].play);
  console.log(dd_items[1].play);
  pageInit(dd_items,dd_scenes);
  initial_scenes();
}

// check for sessionStored items
if (sessionStorage.getItem("dd_items_store")) {
  dd_items = JSON.parse(sessionStorage.getItem("dd_items_store"));
  pageInit(dd_items,dd_scenes);

} else if (current_metadata){ 
  /* use papaparse to get metadata from google sheets, then init page */

  Papa.parse(current_metadata, {
    download: true,
    header: true,
    complete: (results) => dd_items_init(results)
  });
} else { 
  /* use papaparse to get metadata from google sheets, then init page */
  Papa.parse("{{ site.play | relative_url }}", {
    download: true,
    header: true,
    complete: (results) => dd_items_init(results)
  });
}





function reset_dd_items(){
  
  sessionStorage.removeItem('dd_items_store');  
  location.reload(); 
};

//for initial loads



function initial_scenes(){
  for (var i = 0, len = dd_scenes.length; i < len; i++) {
    var ref_url = "{{ '/?scene=' | relative_url }}";
      var act = dd_scenes[i].split('.')[0];
      var scene = dd_scenes[i].split('.')[1];
      console.log(dd_scenes[i] + "-- Act" + act + " scene " + scene );
      var sceneClass = 'act' + act + 'scene' + scene;
      scenesNav += '<li class="dropdown-item"><a class="link-dark rounded " href="'+ ref_url +'act' + act + 'scene' + scene +'">Act ' + act + ', Scene ' + scene +'</a></li>'
      
  } 
  $("#scenesNavDropdown").html(scenesNav);}
