// assumed data that the html page would be consuming
var archives = [
  {title:"Lorem ipsum dolor"},
  {title:"Lorem ipsum dolor"},
  {title:"Lorem ipsum dolor"},
  {title:"Lorem ipsum dolor"},
  {title:"Lorem ipsum dolor"},
  {title:"Lorem ipsum dolor"},
  {title:"Lorem ipsum dolor"},
  {title:"Lorem ipsum dolor"}]
var awesomeList = [
    "Lorem ipsum dolor sit amet.",
    "Aliquam tincidunt mauris eu risus.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Vestibulum auctor dapibus neque."
]
var newsData = [{headline:"Lorem ipsum dolor",article:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis"},
  {headline:"Lorem ipsum dolor",article:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis"},
  {headline:"Lorem ipsum dolor",article:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis"}]

//Generates list of reasons why Ally is awesome
function generateAwesomeList(){
  for(var i = 0; i<awesomeList.length; i++){
    $("#awesomeList").append("<li>" + awesomeList[i] + "</li>");
  }
}
//generates list of archives based on data in array archives
function generateArchives(){
  $("#sidebarInfo").html('');
  for(var i=0;i<archives.length;i++){
    $("#sidebarInfo").append("<h3><a href='#' class='sideBarLinks'>"+ archives[i].title + "</a></h3>");
  }
}
//generates list of news based on data in newsData
function generateNews(){
  $("#sidebarInfo").html('');
  for(var i=0;i<newsData.length;i++){
    $("#sidebarInfo").append("<h3><a href='#' class='sideBarLinks'>" + newsData[i].headline + "</a></h3><p>" + newsData[i].article + "</p>");
  };
}
//Populates data from json
function populateTable(data){
  var color = "#eef5f0";
  data.sort(function(a,b){
    return b.earnings - a.earnings;
  });
  for(var a=0;a<data.length;a++){
    if(a===0){
      $("#tableData").append("<tr class='tableData-boldText' style='background-color:" + color + "'><td>" + data[a].name + "</td><td>" + data[a].apy + "</td><td>" + data[a].earnings + "</td></tr>")
    }else{
      $("#tableData").append("<tr style='background-color:" + color + "'><td>" + data[a].name + "</td><td>" + data[a].apy + "</td><td>" + data[a].earnings + "</td></tr>");
    }
    if(color=="#eef5f0"){
      color = "#ddebe1";
    }else{
      color = "#eef5f0";
    }
  }
  $("#tableData").append("<tr><td></td><td></td><td class='tableHeaders'>*Based on $50,000 deposit.</td></tr>" );
}
function getData(){
  $.getJSON('code-test.json', function(json) {
    populateTable(json);
  });
}
function hamMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
// begin scripts for modal
var modal = $("#myModal");
$("#myBtn").click(function() {
  modal.show();
})
$("#close").click(function() {
    modal.hide();
})

function changeClass(e){
  var target = e.target;
  if(target.id == "archive"){
    target.className = "currentTab";
    $("#news").addClass("unselectedTab").removeClass("currentTab");
    $("#archive").addClass("currentTab").removeClass("unselectedTab");
    generateArchives();
  }else if(target.id=="news"){
    $("#archive").addClass("unselectedTab").removeClass("currentTab");
    $("#news").addClass("currentTab").removeClass("unselectedTab");
    generateNews();
  }
}
function signOn(){
  var userName = $("#Username").val();
  var password = $("#Password").val();
  alert("Thanks for signing in!");
  modal.hide();
}

$("#archive").click(changeClass);
$("#news").click(changeClass);
$("#submit").click(signOn)
generateAwesomeList();
getData();
generateNews();