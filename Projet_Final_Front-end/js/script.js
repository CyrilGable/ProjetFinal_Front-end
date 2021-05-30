/* -------------------- Mes variables -------------------- */
// Je n'ai pas réussi à importer le fichier json donc j'ai écrit du json dans le js (malgré des débuts de solutions, j'ai réussi à l'afficher dans la console du fichier html mais pas à le stocker pour le réutiliser).
var data = '[{"id" : "1","image" : "img/main/coque1.png", "nom" : "The Wave", "categorie" : "Artistic", "materiaux" : "Adamantium", "dimension" : "L * larg * H", "compatible" : "Iphone X", "prix" : "19.99€"},{"id" : "2","image" : "img/main/coque2.png", "nom" : "France", "categorie" : "Pays", "materiaux" : "Adamantium", "dimension" : "L * larg * H", "compatible" : "Iphone X", "prix" : "19.99€"},{"id" : "3","image" : "img/main/coque3.png", "nom" : "Deer", "categorie" : "Animals", "materiaux" : "Pangolonium", "dimension" : "L * larg * H", "compatible" : "Iphone X", "prix" : "22.99€"},{"id" : "4","image" : "img/main/coque4.png", "nom" : "Raimbow", "categorie" : "Artistic", "materiaux" : "Pangolonium", "dimension" : "L * larg * H", "compatible" : "Iphone X", "prix" : "32.99€"},{"id" : "5","image" : "img/main/coque5.png", "nom" : "Canada", "categorie" : "Pays", "materiaux" : "Carton", "dimension" : "L * larg * H", "compatible" : "Iphone 8", "prix" : "9.99€"},{"id" : "6","image" : "img/main/coque6.png", "nom" : "Wolf", "categorie" : "Animals", "materiaux" : "Adamantium", "dimension" : "L * larg * H", "compatible" : "Iphone X", "prix" : "21.99€"},{"id" : "7","image" : "img/main/coque7.png", "nom" : "GreenRelax", "categorie" : "Nature", "materiaux" : "Pangolonium", "dimension" : "L * larg * H", "compatible" : "Iphone 6,Iphone7,Iphone8", "prix" : "16.99€"},{"id" : "8","image" : "img/main/coque8.png", "nom" : "Autumn", "categorie" : "Nature", "materiaux" : "Adamantium", "dimension" : "L * larg * H", "compatible" : "Iphone XS", "prix" : "14.99€"}]'
// Précision sur les images, elles sont toutes libres de droit ou de moi même, excepté pour les images de coques qui viennent de RhinoShield directement (faute de temps). A terme je comptais détourer des images libres de droit ou mes propres design sur un modele de coque de téléphone.
var mydata = JSON.parse(data);

// Je compte les iterations à faire dans le JSON
var countProduits = Object.keys(mydata).length;
var nbProduits = 0
var SelectButtons
sessionStorage.setItem("NombreProduits","nbProduits")



/* -------------------- Global -------------------- */
// Toggle la classe opened afin d'ouvrir la navbar sur mobile
document.querySelector( "body > header > nav > img" ).onclick
= e => {
    e.target.parentNode.classList.toggle( "opened" );
}


/* -------------------- Si on est dans la page Contact -------------------- */
if (document.querySelector( "body > main > #formulaire" ) != null) {
    // J'ajoute l'évènement qui enverrai le formulaire
    document.querySelector( "body > main > #formulaire" ).onload 
    = e => {
        document.querySelector( "body > main > #formulaire" ).addEventListener( "submit", ( event ) => {
            alert("le formulaire va être submit");
        });
    }   
}


/* -------------------- Si on est dans la page Produits -------------------- */
if (document.querySelector( "body > #listeproduits" ) != null) {
    // Au chargement je construis ma liste de produits
    document.querySelector( "body" ).onload 
    = e => {
        createProduits(mydata,countProduits);
        console.log("youpi")
        if (document.querySelectorAll( "button" ) != null) {
            document.querySelector( "#listeproduits > section > #flex > .produit > button").onclick
            = e => {
            nbProduits += 1;
            strProduits = nbProduits
            strProduits.toString();
            sessionStorage.setItem("NombreProduits",strProduits)
            console.log("Ajouté au panier")
            console.log(nbProduits,"mavar")
            var lS = sessionStorage.getItem("NombreProduits");
            console.log(lS,"localstorage")
            document.querySelector("#panier").innerHTML = "<img src='img/nav/panier.svg' alt='panier' id='panier'></img><span>"+nbProduits+"</span>";
            }
        }
    }
}






/* -------------------- Mes fonctions -------------------- */
// Ma fonction qui crée les produits
function createProduits(mydata,countProduits) {
    for (let i = 0; i < countProduits; i++){
        let content = document.querySelector( "body > main > section > div#flex" );
        content.innerHTML += 
            "<div class='produit'><img src='"+ mydata[i].image +"' class='imgproduit'></img><h2 class='nomproduit'>"+ mydata[i].nom +"</h2><ul class='description'><li>Catégorie : "+ mydata[i].categorie +"</li><li>Matériaux : "+ mydata[i].materiaux +"</li><li>Dimensions : "+ mydata[i].dimension +"</li><li>Compatible : "+ mydata[i].compatible +"</li></ul><span class='prix'>" + mydata[i].prix +"</span><button class='add'>Ajouter au Panier</button></div>";
    }
}

// Ma fonction qui crée les paniers
function createProduits(mydata,countProduits) {
    for (let i = 0; i < countProduits; i++){
        let content = document.querySelector( "body > main > section > div#flex" );
        content.innerHTML += 
            "<div class='produit'><img src='"+ mydata[i].image +"' class='imgproduit'></img><h2 class='nomproduit'>"+ mydata[i].nom +"</h2><ul class='description'><li>Catégorie : "+ mydata[i].categorie +"</li><li>Matériaux : "+ mydata[i].materiaux +"</li><li>Dimensions : "+ mydata[i].dimension +"</li><li>Compatible : "+ mydata[i].compatible +"</li></ul><span class='prix'>" + mydata[i].prix +"</span><button class='add'>Ajouter au Panier</button></div>";
    }
}