

fetch('chocolatier.json')
    .then(response => response.json())
    .then(data => {

        console.log(data)

        /*  afficherProduit(data) */

        //objet

        console.log(data.nomEntreprise)

        console.log(data.bouton)

        console.log(data.slogan)

        //liste de client
        /*
              data.clients.forEach(client => {
        
                //nom client
                let nom = client.nom
        
                //client prestation
        
                let typePrestation = client.typePrestation
        
                // client commentaire
        
                let commentaire = client.commentaire
        
                // note client
        
                let note = client.note
                
              });
              
        
              data.listeBeneficesClients.forEach(client => {
        
                //benefice client 1
        
                //benefice client 2
        
                //benefice client 3
        
                //benefice client 4
        
        
              });
              */






        //pour chaque produit
        data.produits.forEach(produit => {

            //l'afficher dans mon html via ma section et injecter les element dans mon html
            document.getElementById("produit").innerHTML += `
             <!--DIV CARTE PRODUIT -->
                <div class="w25 bgcube card">


                    <!--IMAGE DU PRODUIT 1-->
                    <img src="${produit.imageUrl}" alt="" class="W100">

                    <!--NOM DE LA CARTE-->
                    <h3>${produit.titre}</h3>

                    <!--DESCRIPTION DU PRODUIT-->
                    <P>${produit.presentation}</P>

                    <!--PRIX-->
                    <p>24$</p>

                    <!--PHOSPHORICONE-->
                    <i class="ph ph-handbag"></i>

                    <section>
                    <h3>L’ART DU PALAIS DU CHOCOLAT</h3>

                    <div class="flex" id="produit">
                    </div>

        </section>
                </div><!--FIN DIV CARTE-->
    `


        })

         data.clients.forEach(client => {

            //l'afficher dans mon html via ma section et injecter les element dans mon html
            document.getElementById("avisClient").innerHTML += `
             <!--DIV AVIS-->
                <div class="w25 bgcube card">

                    <!--NOM-->
                    <h3>${client.nom}</h3>

                    <!--SERVICE-->
                    <p>${client.typePrestation}</p>

                    <!--5 ETOILE-->

                    <nav>
                        
                            <i class="ph-fill ph-star"></i>
                       

                        
                            <i class="ph-fill ph-star"></i>
                        

                        
                            <i class="ph-fill ph-star"></i>
                        

                        
                            <i class="ph-fill ph-star"></i>
                        

                        
                            <i class="ph-fill ph-star"></i>
                       
                    </nav>

                    <!--AVIS-->
                    <p>${client.commentaire}</p>
                </div>  <!--FIN DIV AVIS-->
    `


        })




        fetch('chocolatier.json')
 .then(response => response.json())
 .then(data => {
   data.listeBeneficesClients.forEach(benefice => {
       document.getElementById("listeBeneficesClients").innerHTML += `<li>${benefice}</li>`;
   });
 });

            
     


    


    });
