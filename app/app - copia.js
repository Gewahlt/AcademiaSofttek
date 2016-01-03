(function myBlog(){

  var app = {
    myDOMapi: domApiFunc(),
    addSections: addSectionsFunc,
    mainContainer: null,
    init: init
}

app.init();

function init() {

  this.addSections();
}

function addSectionsFunc(){
   this.mainContainer = this.myDOMapi.getSectionContainer('main-sections');
  var titulo = "NISSAN GTR";
  var urlimage = "http://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/bugatti-veyron-super-sport-223_1.jpg?itok=WCepnsSr";
  //var urlimage = "./images/nissangtr.jpg";
  var texto = "oscarLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do e";
  var sections = [   //do request for sections(AJAX)
    '<section>'+     
      '<header class="article_header">'+
          '<h4 class="article_title">'+titulo+'</h4>'+
          '<a href="#">'+
                        '<div class="icon">'+
                            '<span class="icon-search">'+
                            '</span>'+
                        '</div>'+
                    '</a>'+
        '</header>'+
        '<article class="article_container">'+
            '<img src="'+urlimage+'"/>'+
            '<div class="article_description">'+
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
                  'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
                  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
                  'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'+
                  'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'+
                  'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'+
            '</div>'+
        '</article>'+
    '</section>'
    ];
    function addItemHTML(item){
      this.mainContainer.innerHTML += item;
    }
    this.myDOMapi.addItems(sections, addItemHTML.bind(this));
}


function domApiFunc(){
  function getSectionContainer(id){
    return document.getElementById(id);
  }
  function addItems(items, callBack){
    for (var i = 0; i < items.length; i++) {
        callBack(items[i]);
    };
  }
  var publicAPI = {
    getSectionContainer: getSectionContainer,
    addItems: addItems
  }
  return publicAPI;
};

})();