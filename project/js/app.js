// for show sub category list


let toggleSubCategory=()=>{
    
    let subCat = document.getElementById("subCategoryList");
    if (subCat.style.display === "none") {
      subCat.style.display = "block";
    } else {
      subCat.style.display = "none";
     
    }
}

$(document).ready(function(){
    $('.slide').slick({
        dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
adaptiveHeight: true
});
});

$(document).ready(function(){
    $('.slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});