class Articles {
    constructor(id,name,price,img){
        this.id = id
        this.name = name
        this.price = price
        this.img = img
    }
    getArtciles(){

    }
}
class Users {
    constructor(id,name,email,password,adress,picture_p){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.adress = adress
        this.picture_p = picture_p
    }
    getUsers(){

    }
}
class Panier {
    constructor(id,id_article){
        this.id = id
        this.id_article = id_article
    }
}

const burgermenu = () => {
    let burgerMenu = document.getElementById("burger-menu");

}

const users = () => {
    let users = document.getElementById("users");
    
}

let cart = document.getElementById("cart");

let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
cart.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
