const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyABuL-7eNKklrt8QgWThsfoxxfHlaxczuk",
    authDomain: "epping-books.firebaseapp.com",
    projectId: "epping-books"
});
var db = firebase.firestore();
var books = [
    {
        category: 'Terror',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624633/books/carrie_ysn1tu.jpg",
        bookTitle: 'Carrie',
        price: 950,
        stock: 7,
        description: 'Atormentada por sus compañeros y sobreprotegida por una madre fanática religiosa, una adolescente tímida desarrolla poderes sobrenaturales cuando una broma pesada la humilla especialmente. A partir de ese momento, su venganza será terrible.',
    },
    {
        category: 'Terror',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/salems_lot_qbwp9w.jpg",
        bookTitle: 'Salem´s Lot',
        price: 1540,
        stock: 4,
        description: 'Un escritor sabe que algo anda mal cuando extraños sucesos preceden a su regreso a su pueblo natal en Nueva Inglaterra.',
    },
    {
        category: 'Terror',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624635/books/shining_bqbode.jpg",
        bookTitle: 'El Resplandor',
        price: 650,
        stock: 2,
        description: 'Un joven con muchos problemas, tanto económicos como personales, y, debido a esto, Jack Torrance (el protagonista) se ve obligado a aceptar un empleo como cuidador de un hotel durante el invierno junto a su familia. A éste le resulta una oportunidad perfecta, ya que él es escritor y la paz y tranquilidad es justo lo que necesita para terminar su obra.',
    },
    {
        category: 'Suspenso',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624635/books/stand_sa1duv.jpg",
        bookTitle: 'The Stand',
        price: 1480,
        stock: 14,
        description: 'Un virus gripal, creado artificialmente como posible arma bacteriológica, se extiende por Estados Unidos y el mundo, provocando la muerte de la mayor parte de la población. Los supervivientes tienen sueños comunes, en los que aparece una anciana y un hombre joven.',
    },
    {
        category: 'Ciencia Ficción',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/dead_zone_rzce1t.jpg",
        bookTitle: 'La Zona Muerta',
        price: 650,
        stock: 22,
        description: 'Johnny Smith, quien resulta herido en un accidente automovilístico y queda en coma durante casi cinco años; cuando despierta, puede ver acontecimientos futuros.',
    },
    {
        category: 'Ciencia Ficción',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624633/books/cujo_j6rhhr.jpg",
        bookTitle: 'Cujo',
        price: 1380,
        stock: 1,
        description: 'La historia se enfoca en la familia Trenton: Victor, un diseñador de publicidad, su esposa, Donna, y su hijo de cuatro años, Tad. Los últimos son aterrorizados por Cujo, un San Bernardo rabioso.',
    },
    {
        category: 'Fantasia',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624633/books/dark_tower_skmqzo.jpg",
        bookTitle: 'La Torre Oscura',
        price: 2350,
        stock: 2,
        description: 'La historia se centra en "el Pistolero", que ha estado persiguiendo durante varios años a su adversario, el "Hombre de Negro". Este primer libro es una crónica del recorrido del pistolero, Roland, a través de un inmenso desierto y, luego, de una montaña, con el objeto de alcanzar al Hombre de Negro por lo que él le puede brindar: información sobre la Torre Oscura.',
    },
    {
        category: 'Ciencia Ficción',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624633/books/christine_hla2lg.jpg",
        bookTitle: 'Christine',
        price: 1250,
        stock: 14,
        description: 'El oscuro protagonista de esta novela es un automóvil marca Plymouth de 1958 llamado Christine, un superviviente de un tiempo en que la gasolina era barata y el rock and roll marcaba el ritmo de la época. ... Pero mientras trabaja en la ardua tarea de restaurarlo, el coche da muestras de una terrible vida propia.',
    },
    {
        category: 'Terror',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/pet_sematary_tnuxzx.jpg",
        bookTitle: 'Pet Sematary',
        price: 850,
        stock: 10,
        description: 'Un viejo cementerio indio encierra terribles secretos para una inocente familia recién llegada a un pueblo.',
    },
    {
        category: 'Fantasia',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624635/books/talisman_iejkbh.jpg",
        bookTitle: 'El Talisman',
        price: 1250,
        stock: 14,
        description: 'Un chico de doce años, de nombre Jack, ha llegado aquí empujado por las circunstancias: su padre ha fallecido, su madre está agonizando y nada tiene ya sentido. Pero para Jack todo está a punto de cambiar, pues, aunque aún lo ignora, ha sido elegido para emprender un viaje a través de los misteriosos Territorios. Jack Sawyer, en su desesperado intento de salvarle la vida a su madre, ha de buscar el Talismán en aquel paisaje épico, hogar de monstruos e inocentes, donde habita la esperanza y también mucho más.',
    },
    {
        category: 'Suspense',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/maleficio_wyzehg.jpg",
        bookTitle: 'Maleficio',
        price: 2850,
        stock: 20,
        description: 'Billy Halleck es un obeso y exitoso abogado que vive en la ciudad de Fairview, en Connecticut, con su esposa e hija. Al salir de una reunión social, Billy sufre un accidente automovilístico, matando a una anciana que cruzaba la calle.',
    },
    {
        category: 'Terror',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624633/books/dark_half_hp2ykj.jpg",
        bookTitle: 'La Mitad Oscura',
        price: 250,
        stock: 4,
        description: 'Thad Beaumont es un autor y un alcohólico en recuperación que vive en el pequeño pueblo de Ludlow en Maine (el mismo de Pet Sematary y alrededor de una hora lejos de la ciudad ficticia de King de Castle Rock). Los propios libros de Thad - la literatura de ficción cerebral - no son muy exitosos.',
    },
    {
        category: 'Suspense',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/gerald_mhg3l1.jpg",
        bookTitle: 'El juego de Gerald',
        price: 750,
        stock: 5,
        description: 'Nos narra lo que sucede tras el trágico desenlace del juego sexual de Gerald Burlingame (que consistía en esposar a su mujer, Jessie Mahout, a la cabecera de una cama). Después de su muerte por un ataque cardiaco, Gerald termina en el suelo, dejando a su esposa atrapada y alejada de la civilización, pues todo sucede en su casa en el bosque. Jessie comenzará una travesía de dolor y lucha por su supervivencia, atormentada por los fantasmas de su oscuro pasado, un perro hambriento y un individuo macabro al que apoda "Luz de Luna", quién es un hombre muy raro.',
    },
    {
        category: 'Ciencia Ficción',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/dolores_ospyt5.jpg",
        bookTitle: 'Dolores Claiborne',
        price: 1250,
        stock: 12,
        description: 'Una mujer enfrenta a su hija y su pasado como víctima de violencia doméstica cuando es acusada de asesinar a su jefe.',
    },
    {
        category: 'Suspense',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/gerald_mhg3l1.jpg",
        bookTitle: 'El juego de Gerald',
        price: 750,
        stock: 5,
        description: 'Nos narra lo que sucede tras el trágico desenlace del juego sexual de Gerald Burlingame (que consistía en esposar a su mujer, Jessie Mahout, a la cabecera de una cama). Después de su muerte por un ataque cardiaco, Gerald termina en el suelo, dejando a su esposa atrapada y alejada de la civilización, pues todo sucede en su casa en el bosque. Jessie comenzará una travesía de dolor y lucha por su supervivencia, atormentada por los fantasmas de su oscuro pasado, un perro hambriento y un individuo macabro al que apoda "Luz de Luna", quién es un hombre muy raro.',
    },
    {
        category: 'Ciencia Ficción',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/dolores_ospyt5.jpg",
        bookTitle: 'Dolores Claiborne',
        price: 1250,
        stock: 12,
        description: 'Una mujer enfrenta a su hija y su pasado como víctima de violencia doméstica cuando es acusada de asesinar a su jefe.',
    },
    {
        category: 'Suspense',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/green_mile_toafkp.jpg",
        bookTitle: 'La Milla Verde',
        price: 1450,
        stock: 8,
        description: 'Stephen King ambienta su novela en una penitenciaría de presos condenados a muerte, una antesala del infierno de la que se sirve para trazar una radiografía del horror en estado puro.',
    },
    {
        category: 'Suspense',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/colorado_gseeu5.jpg",
        bookTitle: 'Colorado Kid',
        price: 1550,
        stock: 1,
        description: 'En una isla de las costas de Maine, un hombre es encontrado muerto. No hay identificación de su cuerpo. Solo el esforzado trabajo de un par de periodistas locales y de un graduado en medicina forense logra descubrir algunas pistas para, después de un año, saber quién es el muerto.',
    },
    {
        category: 'Ciencia Ficción',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/lisey_uu2lns.jpg",
        bookTitle: 'La Historia de Lisey',
        price: 1150,
        stock: 11,
        description: 'Lisey Debusher había quedado viuda hacía 2 años. Su esposo fue un famoso novelista llamado Scott Landon, ganador del Pulitzer. Al principio de su relación, Lisey tuvo que aprender mucho de Scott sobre libros, sangre y dálivas. Más adelante supo que había un lugar donde Scott se refugiaba; un sitio que le inspiraba las ideas que necesitaba para vivir, pero que también lo aterrorizaba.',
    },
    {
        category: 'Terror',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624635/books/niebla_uuiqip.jpg",
        bookTitle: 'La Niebla',
        price: 1900,
        stock: 2,
        description: 'La mañana después de una violenta tormenta eléctrica, una niebla espesa se propaga rápidamente por la pequeña ciudad de Bridgton, Maine, reduciendo la visibilidad y provocando la aparición de numerosas criaturas ocultas que atacan a cualquier persona que se encontraba en su casa.',
    },
    {
        category: 'Ciencia Ficción',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/jfk_xxfq26.jpg",
        bookTitle: '22/11/63',
        price: 1350,
        stock: 18,
        description: 'narra la historia de Jake Epping, de 35 años y profesor de inglés en una escuela de Lisbon Falls, Maine,16​ recién divorciado, que encuentra en el restaurante local de su amigo Al Templeton un pasadizo temporal que le traslada a las 11:58 del 9 de septiembre de 1958. El viaje en el tiempo, sin embargo, se refleja en su presente (2011) como el simple transcurso de dos minutos.',
    },
    {
        category: 'Policial',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/mercedes_pixac0.jpg",
        bookTitle: 'Mr. Mercedes',
        price: 900,
        stock: 12,
        description: 'Mr. Mercedes, primera novela de la «Trilogía Bill Hodges», es la historia de una guerra entre el Bien y el Mal. Un retrato inolvidable de la mente de un asesino obsesionado y demente.',
    },
    {
        category: 'Policial',
        image: "https://res.cloudinary.com/epping/image/upload/v1623624634/books/sangre_manda_uolily.jpg",
        bookTitle: 'La Sangre Manda',
        price: 600,
        stock: 19,
        description: 'Cuatro novelas cortas de Stephen King sobre las fuerzas ocultas que nos acechan. En esta colección única nos ofrece un impactante noir paranormal, protagonizado por la carismática Holly Gibney, y tres relatos más que ponen de manifiesto el incomparable talento, la imaginación sin par y la diversidad de registros de este legendario narrador.',
    },
]
books.forEach((obj) => {
    db.collection("books").add({
        category: obj.category,
        image: obj.image,
        bookTitle: obj.bookTitle,
        price: obj.price,
        stock: obj.stock,
        description: obj.description
    }).then((docRef) => {
        console.log("Producto registrado con ID: ", docRef.id);
    })
        .catch((error) => {
            console.error("Error al agregar un documento: ", error);
        });
});