// for show sub category list
let toggleSubCategory=()=>{
    
    let subCat = document.getElementById("subCategoryList");
    if (subCat.style.display === "none") {
      subCat.style.display = "block";
    } else {
      subCat.style.display = "none";
     
    }
}

// show items from left in item detail
let items = ["bamboo-tea-set3.png","bamboo-tea-set10.png","bamboo-tea-set8.png","bamboo-tea-set4.png","bamboo-tea-set6.png"];

let i=0;
let leftItems=()=>{
 i--;
 if(i == -1)
 {
   i = items.length-1;
 }
 centerItem.src="../img/"+items[i];
}

let rightItems=()=>{
  i++;
  if(i == items.length)
  {
    i=0;
  }
  centerItem.src="../img/"+items[i];
}

// Change aside image to center
let changeCenter=(i)=>{
  let newCenterImg = i.src;
  centerItem.src=newCenterImg;
}

// Increase and Decrease Quantity
let decreaseQty=()=>{
  let current = parseInt(currentQty.innerHTML);
  // alert(current);
  // alert(typeof current);
  if(current != 1)
  {
    currentQty.innerHTML = current-1;
  }
  else{
    currentQty.innerHTML = 1;
  }
  
}

let increaseQty=()=>{
  let current = parseInt(currentQty.innerHTML);
  currentQty.innerHTML = current+1;
}
