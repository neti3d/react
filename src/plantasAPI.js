const plantas = [
    {
      "id": 1,
      "nombre": "Bonsai",
      "categoria": "interior",
      "imagen": "/src/assets/images/planta_arana.png",
      "detalles": "Las plantas Bonsai son plantas de interior fáciles de cultivar que purifican el aire y requieren un mantenimiento mínimo. Tienen hojas largas y arqueadas con rayas blancas."
    },
    {
      "id": 2,
      "nombre": "Romero",
      "categoria": "comestible",
      "imagen": "/src/assets/images/romero.png",
      "detalles": "El romero es una hierba fragante comúnmente utilizada en la cocina. Se caracteriza por sus hojas en forma de aguja y su fuerte aroma. Requiere suelo bien drenado y abundante luz solar."
    },
    {
      "id": 3,
      "nombre": "Lirio de la paz",
      "categoria": "interior",
      "imagen": "/src/assets/images/lirio.png",
      "detalles": "Los lirios de la paz son plantas de interior populares conocidas por sus elegantes flores blancas y sus hojas verdes oscuro. Prosperan en condiciones de poca luz y ayudan a mejorar la calidad del aire interior."
    },
    {
      "id": 4,
      "nombre": "Girasol",
      "categoria": "exterior",
      "imagen": "/src/assets/images/girasol.png",
      "detalles": "Los girasoles son plantas alegres y amantes del sol con grandes flores amarillas brillantes. Son fáciles de cultivar y pueden alcanzar alturas impresionantes. Los girasoles son populares por su belleza y como fuente de alimento para las aves."
    },
    {
      "id": 5,
      "nombre": "Helecho",
      "categoria": "exterior",
      "imagen": "/src/assets/images/helecho.png",
      "detalles": "Los helechos son plantas resistentes. Son fáciles de cultivar y crecen rápidamente."
    },
    {
      "id": 6,
      "nombre": "Menta",
      "categoria": "comestible",
      "imagen": "/src/assets/images/menta.png",
      "detalles": "La menta es la planta aromática más popular. Consta de muchas variedades y está presente en la gastronomía de todo el mundo."
    }
]

// function getDatos(tipo) {
//   return new Promise( resolve => {
//     setTimeout( () => {
//       if(tipo) {
//         const plantasTipo = plantas.filter(pl => pl.categoria == tipo);
//         resolve(plantasTipo)
//       }
//       else
//         resolve(plantas)
//       console.log("Enviando plantas...")
//     }, 1000)
//   })
// }

// function getDatosById(id) {
//   return new Promise( resolve => {
//     setTimeout( () => {
//       if(id) {
//         const planta = plantas.filter(pl => pl.id == id);
//         resolve(planta)
//       }
//       console.log("Enviando planta...")
//     }, 1000)
//   })
// }

// export {getDatos, getDatosById}
