

let productos ={
    producto1:{
    nombre:"chachitos",
    descripcion:"cereal a base de trigo muy delicioso",
    precio:15,
    cantidad:250,
    foto:"https://tenor.com/es/ver/john-cena-chachitos-cereal-gif-19932615"
},
producto2:{

    nombre:"nutrileche",
    descripcion:"leche muy deliciosa",
    precio:10,
    cantidad:1,
    foto:"https://m.media-amazon.com/images/I/719v5gI5teL._AC_SX425_.jpg"
},

producto3:{

    nombre:"chocoTavo de fresa",
    descripcion:"chocomilk muy delicioso",
    precio:18.50,
    cantidad:500,
    foto:"https://http2.mlstatic.com/D_NQ_NP_875348-MLM43826141959_102020-V.jpg"
    
}
}


let venta={
    articulos: function(){
        return(productos.producto1.nombre+"\n "+productos.producto2.nombre +"/n"+productos.producto3.nombre )
    },
    total: function (){
return (productos.producto1.precio + productos.producto2.precio + productos.producto3.precio);
    },
    id: 1234456,
    email: "atlas_hokage97@gmail.com"
}
 
document.getElementById("ticket").innerHTML= venta.articulos()+venta.total();




/*
CLASES EN JS
class persona {
    constructor(name, year){
      this.name = name;
      this.year = year;
    }
  }
  
  const persona1 = new persona("Guillermo",1987);
  const persona2 = new persona("Angeles", 2000);
  
  console.log(persona1);
  console.log(persona2);
  
  document.getElementById("ID").innerHTML=persona1;
  
  // var objeto = {
  //   name = "Guillermo",
  //   year = 1987
  // }
  
  // var objeto2 = {
  //   name = "David",
  //   year = 1987
  // }
  */