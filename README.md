Erik{
-boostrap instalado
-footer creado como componente con su exportacion
-instalado font awesome para usar iconos de redes sociales
-configurado color de fondo de root
-configurado color de fondo footer
-configurado el fontawesome tamaño
-agregado logo al footer
-se agregan copyrigth
-se agrega css especifico para footer

          -instalamos carousel para poder ocupar carousel
          -configuramos carousel
          -agregamos imagenes necesarias
          -aun no configuro css de el carousel

          -avanzando npm install firebase (para instalar firebasehosting y pasar a deploys)
          -npm install -g firebase-tools

          firebase login
          firebase init{
          ? Are you ready to proceed? Yes
          ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase           Hosting and
          (optionally) set up GitHub Action deploys
          ? Please select an option: Use an existing project
          ? Select a default Firebase project for this directory: finalbadrequest (FinalBadRequest)
          ? What do you want to use as your public directory? public
          ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
          ? Set up automatic builds and deploys with GitHub? No
          - Wrote public/index.html
            }
            npm run primero (compila)
            npm run segundo (manda al hosting los cambios produccion)
}
Gerardo{

            -se crea la carpeta views
            -se crea vista Home,heder
            -se crea componente NAvbarapp,Header
            -se configura Routes from "react-router-dom";
            -se crea css del componente home ,se cambia de ubicacion
            -Se agrega campo buqueda
            -Se agrega link Login/registro
            -Se agregar campo de busqueda y su botton
}
Tansuani{
-su crea nuevo componente NewCard
01/03/2024
-se agrega título a la CARD y NEWCARD
-se mmodifica formulario de card
-agregué botones agregar y borrar en newcard
-agregué boton favoritos en card
-se crea la vista Favoritos, pero se rompe el código si la activo en app.jsx
-se crea la vista Admin, pero se rompe el código si la activo en app.jsx
-se agrega la URL del .json para completar la CARD, cómo poder probar si se generan las CARDS?
-se crea carpeta de Admin y Favoritos con su respectivo jsx y css
-se reubica home dentro de views
02/03/2024
-sólo maquillaje
-sigo intentando hacer q funcione las vistas sin éxito
03/03/2024 limpieza del código
-se corrige de h a H en la dirección en app.jsx para acceder a views home
-Corregí mensaje en "Errors"
-en la vista home se elimina import "footer" y "navbar"
-se elimina componente Gallery
-se elimina componente NewCard
-de la carpeta "public" se elimina "vite.svg"
-se corrige CSS de home para igualar tamaño de imagenes en tienda, favoritos y carro. Pendiente carusel.
}
<<<<<<< HEAD
=======

>>>>>>> 773282321ab456bdac35615e95c952f691db8375
nacho{

           -holi
           -02-03 : - register and log in components + views 
           -03-03 : - añadidas varias visatas, falta aun usuario y administrador (vistas) no se calienten la cabeza por la funcionalidad con backend.. solo usar ejemplos
                    - modifique unas cartas para ponerlas y reutilziarlas, son reusables para todas las visatas, vean como se ve, ya que en el carrusel se ve extraño, estube viendo que es por las iamgines ( se deberia usar imagenes del mismo tamaño para estandarizar todo).
                    - las imagenes se pueden standarizar a la mala por css
                    - tbn tienen la funcionalidad lista de favoritos y carrito, faltaria agragar la matematica del asunto (Que lo tengo en otro proyecto despues lo veo)
                    - context andando y alimentando a las cartas segun donde se ocupen.
          - 05-03   - añadido, suma de productos en carta,  total productos en navbar, SWAL2 para alertas de esto, 
                    - Carpeta Utils con funciones de Swal2 para mas orden. 
<<<<<<< HEAD
                    - 

}
ximena{
  Se corrigieron las relaciones de la BD, los CSS se mejoraron, el código arrojaba un error en un componente.
  También se cambió el carrusel.
}
=======
}
Ximena{
Se corrigieron las relaciones de la BD,
El código arrojaba un error en un componente.
También cambió el carrusel.
mejora de CSS
Agregué el componente de red social (login)
instalación del paquete npm reactjs-social-login
}
>>>>>>> 773282321ab456bdac35615e95c952f691db8375
