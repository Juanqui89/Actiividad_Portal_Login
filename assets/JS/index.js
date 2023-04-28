




let user = prompt("Ingrese el nombre de usuario");
let pass = parseInt(prompt("Ingrese la contraseña"));

if (user === 'juan' && pass === 123456){
   alert("Acceso concedido");
   let div = document.createElement('div');
   div.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/RqURCjWMeeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
   document.body.appendChild(div);
   
}else{
    alert("Acceso denegado, por favor entre un usuario y contraseña correcto");
    window.location.href = "404.html"
};



