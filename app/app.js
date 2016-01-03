(function myBlog(){

  var app = {
    myDOMapi: domApiFunc(),
    addSections: addSectionsFunc,
    mainContainer: null,
    init: init
}

app.init();

function init() {

  var xmlhttp = new XMLHttpRequest();
  var url = "app/package.txt";
  var sections;
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          sections = JSON.parse(xmlhttp.responseText);
          app.addSections(sections);
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

}

function addSectionsFunc(section){
    this.mainContainer = this.myDOMapi.getSectionContainer('main-sections');
    
    function addItemHTML(item){
      this.mainContainer.innerHTML += item;
    }
    this.myDOMapi.addItems(section, addItemHTML.bind(this));
}


function domApiFunc(){
  function getSectionContainer(id){
    return document.getElementById(id);
  }
  function addItems(items, callBack){
    for (var i = 0; i < items.length; i++) {
        callBack('<section>'+     
      '<header class="article_header">'+
          '<h4 class="article_title">'+items[i].title+'</h4>'+
          '<a href="#">'+
                        '<div class="icon">'+
                            '<span class="icon-search">'+
                            '</span>'+
                        '</div>'+
                    '</a>'+
        '</header>'+
        '<article class="article_container">'+
            '<img src="'+items[i].urlimage+'"/>'+
            '<div class="article_description">'+
            items[i].text+
            '</div>'+
        '</article>'+
    '</section>'
          );
    };
  }
  var publicAPI = {
    getSectionContainer: getSectionContainer,
    addItems: addItems
  }
  return publicAPI;
};

})();