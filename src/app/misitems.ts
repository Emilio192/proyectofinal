import { Item } from "./items";

export const ITEM:Item []=[
    {
        nombre: "Hoja Crepuscular de Draktharr",
        bio: " ACECHADOR NOCTURNO: Atacar de forma básica un campeón enemigo inflige 65 (+25% DA adicional) como daño físico adicional al impacto y los Slow ralentiza en un 99% durante 0.25 segundos (15 segundos de enfriamiento). Los Damage derribos de campeones en 3 segundos restablecen el tiempo de enfriamiento de este efecto y te otorga Twilight Shroud invisibilidad durante 1.5 segundos.",
        img: "assets/img/draktharr.webp",
        costo: 3200,
      },
      {
        nombre: "Hoja Carmesi",
        bio: "BÚSQUEDA SANGRIENTA: Mientras estés cerca de uno o menos campeones enemigos visibles obtienes 8 de letalidad y 20% − 80% (según el nivel) de velocidad de ataque adicional, decayendo durante 3 segundos si otros campeones enemigos están demasiado cerca (alcance 1350).",
        img: "assets/img/carmesi.jpg",
        costo: 3000,
      },
      {
        nombre: "Tempestad de luden",
        bio: "Dañar a un enemigo con una habilidad inflige 100 (+ 15% PH) de daño mágico adicional a tu objetivo y a 3 enemigos cercanos y te otorga 30% de velocidad de movimiento adicional durante 2 segundos. Infligir daño de habilidad contra campeones reduce el tiempo de enfriamiento de Eco en 0.5 segundos por campeón, hasta un máximo de 3 segundos por lanzamiento. (10 segundos de enfriamiento).",
        img: "assets/img/luden.webp",
        costo: 3200,
      },
      {
        nombre: "Angustia de Liandry",
        bio: "Infligir daño de habilidad quema a los enemigos, lo que hace que reciban 「 60 (+ 10% PH) (+ 4% de la vida máxima del objetivo) como daño mágico durante 4 segundos 」",
        img: "assets/img/liandrys.jpg",
        costo: 3200,
      },
      {
        nombre: "Morellonomicón",
        bio: "Infligir daño mágico a campeones enemigos les inflige un 40% de Grievous Wounds Heridas graves durante 3 segundos, que se aumenta al 60% si el objetivo está por debajo del 50% de su vida máxima.",
        img: "assets/img/morelos.jpg",
        costo: 2500,
      },
      {
        nombre: "Sablepistola Hextech",
        bio: "Al instante te Heal curas por el 15% de todo el daño causado, incluyendo Attack daño físico, Ability daño mágico, y Hybrid daño verdadero. El daño de Winter's Área de efecto y de unidades convicadas solo Heal cura un 5% por cada unidad afectada.",
        img: "assets/img/sablepistola.jpg",
        costo: 3200,
      },
      {
        nombre: "Danza de la Muerte",
        bio: "Almacena (Melee 35% / Ranged 15%) de todo el daño físico de post-mitigación recibido, que se toma sucesivamente como daño verdadero prolongado en su lugar, infligiendo un tercio del daño almacenado cada segundo.",
        img: "assets/img/danza.jpg",
        costo: 3100,
      },
      {
        nombre: "Espada del Rey Arruinado",
        bio: "Los ataques básicos al impacto aplican una acumulación a los campeones enemigos durante 6 segundos, hasta 2 acumulaciones. Atacar a un campeón con 2 acumulaciones los consume para infligir 40 − 150 (según el nivel) de daño mágico adicional al golpear y robar 25% de su velocidad de movimiento durante 2 segundos (20 segundos de enfriamiento).",
        img: "assets/img/arruinado.jpg",
        costo: 3100,
      },
      {
        nombre: "Fuerza de la Trinidad",
        bio: " Los ataques básicos otorgan 20 de velocidad de movimiento adicional durante 3 segundos. Si el objetivo es un campeón o una estructura, también aumenta el daño de ataque base en un 6% durante la misma duración, acumulándose hasta 5 veces para un 30% de aumento.",
        img: "assets/img/fuerza.jpg",
        costo: 3333,
      },
      {
        nombre: "Cercenador Divino",
        bio: "Después de usar una habilidad, tu próximo ataque básico en 12 segundos inflige (Melee 12% / Ranged 9%) de la vida máxima del objetivo como daño físico adicional al impacto, con un daño mínimo igual a 150% DA Base y un daño máximo contra monstruos igual a 250% DA Base. Si el objetivo es un campeón, te Heal cura por (Melee 7.8% / Ranged 3.6%) de la vida máxima del objetivo, con una curación mínima igual a (Melee 97.5% / Ranged 60%) DA base (1.5 segundos de enfriamiento (comienza después de usar el ataque potenciado)).",
        img: "assets/img/cercenador.jpeg",
        costo: 3300,
      },
      {
        nombre: "Bebedor de Sangre",
        bio: "Inflige 100% DA como daño físico a los enemigos en un círculo de radio de Range 450 unidades a tu alrededor. Heal restaura 25% DA (+ 10% de vida faltante) por cada campeón alcanzado (tiempo de enfriamiento de 15 segundos, reducido por la aceleración de habilidad).",
        img: "assets/img/bebedor.webp",
        costo: 3300,
      },
      {
        nombre: "Placa del Hombre Muerto",
        bio: "Mientras te mueves, generas 7 acumulaciones de Momentum cada 0,25 segundos, lo que otorga hasta 40 de velocidad de movimiento adicional a 100 acumulaciones después de 3,75 segundos de movimiento. Momentum decae en 15 cada 0.25 segundos mientras se está Stun inmovilizado. Los ataques básicos consumen todas las acumulaciones al impactar para infligir 0% − 100% (según el acumulaciones de Momentum) DA base de daño físico adicional por acumulación. Con acumulaciones máximas, el objetivo también es Slow icon.png ralentizado en un 50% durante 1 segundo si el atacante es Melee cuerpo a cuerpo.",
        img: "assets/img/placa.jpg",
        costo: 2900,
      },
      {
        nombre: "Capa de Fuego Solar",
        bio: "causa 26 − 43 (según el nivel) de Ability daño mágico por segundo a los enemigos cercanos. (325 de alcance).Golpear a un enemigo con una habilidad Stun inmovilizadora inflige 26 − 43 (según el nivel) (+ 4% de vida adicional) de de daño mágico adicional y libera una nova de fuego que también inflige ese daño adicional a los enemigos cercanos (12 segundos de enfriamiento).El daño de Immolar aumenta en un 50%",
        img: "assets/img/capa.jpg",
        costo: 2750,
      }
];