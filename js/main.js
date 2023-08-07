
var ellist = document.querySelector(".site-main__list");


function pakemo(array) {
    // ellist.innerHTML = "";
    
    array.forEach(function(item, index, arr) {
        // bu yerda xar bir kartochka uchun <li></li> larni yaratdim va class qoshdim
        var elitem = document.createElement("li");
        elitem.classList.add("site-main__item")
        
        // bu yerda pakimolar rasm tagini yaratib unga class qoshdim
        var elimg = document.createElement("img");
        elimg.classList.add("site-main__item-img");
        
        // bu yrda img tagiga src va alt atribudini qoshdim
        elimg.setAttribute("src", item.img);
        elimg.setAttribute("alt", item.title);
        
        // bu yerda pakimoni og'irligi ucun span yaratdim, qiymat olib kedim va class qoshdim
        var elwight= document.createElement("span");
        elwight.classList.add("site-main__inneritem-span1");
        elwight.textContent = `weight: ${item.weight}` ;
        
        // bu yerda pakimoni balandligi ucun span yaratdim, qiymat olib kedim va class qoshdim
        var elheight= document.createElement("span");
        elheight.classList.add("site-main__inneritem-span2");
        elheight.textContent = `Height: ${item.height}`;
        
        
        // bu yerda pakimoni tuxumi ucun span yaratdim, qiymat olib kedim va class qoshdim
        var eleggs= document.createElement("span");
        eleggs.classList.add("site-main__inneritem-span3");
        eleggs.textContent = `Egg: ${item.egg}`;
        
        
        // bu yerda pakimoni tuxum bosish vaqti ucun span yaratdim, qiymat olib kedim va class qoshdim
        var elspawn= document.createElement("span");
        elspawn.classList.add("site-main__inneritem-span4");
        elspawn.textContent = `Swapn time: ${item.spawn_chance}`;
        
        
        // bu yerda pakimoni nomi ucun span yaratdim, qiymat olib kedim va clasa qoshdim
        var elname = document.createElement("h3");
        elname.classList.add("site-main__item-title");
        elname.textContent = item.name;
        
        
        //  bu yerda taglarni bir biriga svarka qildim
        elitem.appendChild(elimg);
        elitem.appendChild(elwight);
        elitem.appendChild(elheight);
        elitem.appendChild(eleggs);
        elitem.appendChild(elspawn);
        elitem.appendChild(elname);
        
        ellist.appendChild(elitem);
        
        
    });
    
}


// funcsiyani chaqirdim
pakemo(pokemons)

// SEARCH

let elForm = document.querySelector(".site-header__form");
let elinp = document.querySelector(".site-header__userSearch-name");
let elexit = document.querySelector(".site-header__exitbtn");
let elinpegg = document.querySelector(".site-header__userSearch-egg");
let elswapntime = document.querySelector(".site-header__userSearch-swapntime");


elForm.addEventListener("keyup", function(evt) {
    ellist.innerHTML = "";
    evt.preventDefault();
    let elinpvalue = elinp.value.trim().toUpperCase();
    // let  elinpeggvalue = elinpegg.value.trim().toUpperCase();
    // let  elswapntimevalue = elswapntime.value.trim().toUpperCase();
    
    let mySearch = pokemons.filter(function (item,index,arr) {
        let item_name =String( item.name.toUpperCase());
        return item_name.startsWith(elinpvalue);   

    })
 
    pakemo(mySearch);
    console.log(mySearch);

})


elexit.addEventListener("click", function() {
    pakemo(pokemons);
})

