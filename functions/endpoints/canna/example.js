const functions = require('firebase-functions')
const admin = require('firebase-admin')

exports.example = async (req, res, db) => {
	let sensiseeds = [
	{
      "updated": 1612098852226,
      "title": "Super Skunk Feminized Seeds by White Label",
      "url": "https://sensiseeds.com/en/feminized-seeds/whitelabel/super-skunk-feminised",
      "image": "https://img.sensiseeds.com/en/feminized-seeds/whitelabel/super-skunk-feminised-thumb.png",
      "breeder": "sensiseeds",
      "sku": 1520007,
      "strainType": "Feminized",
      "price": 54.99,
      "numberSeeds": 10,
      "currency": "eur",
      "locale": {
        "en": {
          "itemtype": "Product",
          "id": 1520007,
          "title": "Super Skunk Feminized Seeds by White Label",
          "description": "Super Skunk Feminized by White Label provides the heavy yields and potent high of original Super Skunk in a form that’s easy to grow and even more affordable. With its short flowering time and robust nature, this strain is unsurprisingly popular with growers of all experience levels. This is a great choice for anyone seeking large harvests of trichome-covered buds without a great deal of effort. Growth pattern of Super Skunk Feminized by White LabelWhite Label’s Super Skunk Feminized is 80% indica. As with other indica-dominant variants, the plants are sturdy and strong, with thick stems and branches. They produce large, heavy buds, which grow between the nodes during the flowering stage. The plant’s main cola, if left to its own devices, can take over the top stem. This means it’s well suited to methods such as trimming, fimming, pinching out or topping. These create multiple stems. More experienced growers may achieve good results with lollipopping, and with the Sea of Green (SOG) and Screen of Green (SCROG) techniques. Super Skunk Feminized cannabis seeds grow into average sized plants. They have a short flowering period (around 45 to 50 days), which is surprising, given how plentiful their yields are, and how dense and chunky the buds are. This is due to the Afghan parentage, which has been bred with the original Skunk strain to bring out the indica elements. Beginners can achieve good results with this strain, and experienced growers can definitely capitalise on the plants’ full potential. This strain is well suited to being cultivated indoors (typical for a Skunk variant). However, it is possible to grow the plants outdoors, providing they’re in a climate that benefits from warm, long summers. Super Skunk Feminized thrives in pots, where it will become large and bushy whether outdoors or inside under lights. Outdoors in free soil, the height is likely to be far greater. The strain is also well-suited for growing in greenhouses, though it’s recommended that the plants are kept short, to prevent the plants from pushing against the roof. Effect, taste, and smell of Super Skunk Feminized by White LabelWhite Label’s Super Skunk Feminized, unlike some other types of skunk, has an almost tropical scent, especially after it has been cured. While growing, it produces a pungent, sweet aroma, with nutty, earthy base notes. Once the flowers start to emerge, growers will detect a hint of the classic skunk smell: astringent and immediately recognisable. The scent can become intense, especially during the flowering stage. As this is only seven weeks, indoor growers shouldn’t find it too problematic, as long as they have carbon filters on their air extraction. Many users recommend giving the harvested buds time to cure properly. This enables them to develop a full flavour profile. Upon consumption, Super Skunk Feminized offers a potent relaxing effect, which relieves feelings of stress, and muscle tension. Some people recommend it as the perfect evening strain, as it can also bring about a sense of jollity and fun. Did you know? The original Super Skunk was launched in 1990 It has won numerous awards and accolades since its releaseWhite Label Super Skunk is also available as Super Skunk Regular and Super Skunk Automatic seeds",
          "meta_title": "Super Skunk Feminized Seeds by White Label – Sensi Seeds",
          "meta_description": "Super Skunk Feminized by White Label is an 80% indica, easy-to-grow strain. It offers large yields in a short flowering period, and a relaxing high.",
          "url": "https://sensiseeds.com/en/feminized-seeds/whitelabel/super-skunk-feminised",
          "image": "https://img.sensiseeds.com/en/feminized-seeds/whitelabel/super-skunk-feminised-thumb.png",
          "price": 54.99,
          "currency": "eur",
          "in_stock": "Yes",
          "category": "Feminised Seeds",
          "flowering_min": 45,
          "flowering_max": 50,
          "strain_type": "Feminized",
          "number_of_seeds": 10,
          "climate_zone": "Sunny / Mediterranean",
          "yield": "Heavy Yield",
          "heigh_gain": "Average height gain"
        },
        "nl": {
          "itemtype": "Product",
          "id": 1520007,
          "title": "Super Skunk Gefeminiseerde zaden van White Label",
          "description": "Super Skunk Gefeminiseerd van White Label zorgt voor een grote opbrengst en een krachtige high van de originele Super Skunk, maar dan in een vorm die makkelijk te kweken is en betaalbaarder is. Dankzij de kortbloeiende tijd en robuuste aard is ze verrassend populair onder kwekers van alle ervaringsniveaus. Dit is een geweldige keuze voor iedereen die een grote oogst met trichomen bedekte toppen wil zonder al te veel inspanning. Groeipatroon Super Skunk Gefeminiseerd van White LabelSuper Skunk Gefeminiseerd van White Label is 80% indica. Net als bij andere varianten met vooral indica blijven de planten stevig en sterk, met een dikke stengel en takken. Ze produceren grote, zware toppen die tussen de knopen in groeien tijdens de bloeifase. De hoofdtop van de plant kan zelfs de gehele hoofdstengel overnemen als deze aan zijn lot overgelaten wordt. Daardoor is deze plant zeer geschikt voor methoden zoals snoeien, fimmen, pinchen of toppen. Daarmee worden meerdere stengels gecreëerd, De meer ervaren kwekers kunnen een goed resultaat behalen met lollipoppen en met de Sea of Green (SOG) en Screen of Green (SCROG) technieken. Super Skunk Gefeminiseerde cannabiszaden groeien uit tot middelgrote planten. Ze hebben een korte bloeiperiode (rond de 45 tot 50 dagen), wat vrij verrassend is gezien de grote opbrengst en hoe dik en groot de toppen zijn. Dit komt door de deels Afghaanse afkomst die gecombineerd is met de originele Skunk soort om het indica element goed naar boven te brengen. Beginners kunnen een goed resultaat behalen en ervaren kwekers kunnen de enorme kracht van deze plant optimaal benutten. Deze soort is goed geschikt voor binnen kweken (standaard voor een Skunk variant). Het is echter ook mogelijk om de plant binnen te kweken, mits dit een klimaat is met een warme, lange zomer. Super Skunk Gefeminiseerd groeit goed in een pot, waar hij groot en dichtbegroeid raakt, ongeacht of dit nu buiten is of binnen bij kunstverlichting. Buiten in de losse aarde worden de planten nog groter. Deze soort is tevens geschikt voor kweken in een kas, hoewel aanbevolen wordt dat de plant kort gehouden wordt om te voorkomen dat deze tegen het dak aan komt. Effect, smaak en geur van Super Skunk Gefeminiseerd van White LabelWhite Label’s Super Skunk Gefeminiseerd heeft, in tegenstelling tot andere soorten skunk, een bijna tropische geur, vooral als ze gedroogd is. Tijdens de groei produceert ze een scherp, zoet aroma met een nootachtige, aardse basistoon. Zodra er bloemen beginnen te komen, zullen kwekers een vleugje van de klassieke skunk opmerken: bitter en direct herkenbaar. Deze geur kan intens worden, vooral tijdens de bloeifase. Omdat dit slechts zeven weken is, vinden binnenkwekers dat meestal geen probleem zolang er maar een koolstoffilter op de luchtbehandeling si gemonteerd. Veel gebruikers raden aan de geoogste toppen goed de tijd te geven om te drogen. Daardoor wordt het volledige smaakprofiel goed ontwikkeld. Bij consumptie biedt Super Skunk Gefeminiseerd een krachtig, ontspannen effect dat een gevoel van stress en spierspanning vermindert. Sommige mensen bevelen haar aan als de perfecte soort voor gebruik in de avond omdat ze ook een gevoel van plezier en joligheid kan geven. Wist je dat?De originele Super Skunk in 1990 werd gelanceerd Ze sinds haar lancering vele prijzen heeft gewonnen en lofbetuigingen heeft ontvangen",
          "meta_title": "Super Skunk Gefeminiseerd (White Label) – Sensi Seeds",
          "meta_description": "Super Skunk Gefeminiseerd van White Label is een makkelijke soort met 80% indica. Ze geeft een grote oogst binnen korte tijd en een ontspannen high.",
          "url": "https://sensiseeds.com/nl/gefeminiseerde-zaden/whitelabel/super-skunk-gefeminiseerd",
          "image": "https://img.sensiseeds.com/nl/gefeminiseerde-zaden/whitelabel/super-skunk-gefeminiseerd-thumb.png",
          "price": 54.99,
          "currency": "eur",
          "in_stock": "Yes",
          "category": "Gefeminiseerde Zaden",
          "flowering_min": 45,
          "flowering_max": 50,
          "strain_type": "Feminized",
          "number_of_seeds": 10,
          "climate_zone": "Zonnig / mediterraan klimaat",
          "yield": "Enorme oogst",
          "heigh_gain": "Gemiddelde groei in de hoogte"
        },
        "fr": {
          "itemtype": "Product",
          "id": 1520007,
          "title": "Graines de Super Skunk Féminisées de White Label",
          "description": "La variété Super Skunk féminisée de White Label produit l’important rendement et le puissant high de la variété Super Skunk d’origine dans une forme facile à cultiver encore plus abordable. Grâce à sa courte période de floraison et à sa nature robuste, cette variété est, comme on peut l’imaginer, populaire auprès des cultivateurs de tous les niveaux. Il s’agit d’un bon choix pour toute personne souhaitant obtenir une grosse récolte de têtes recouvertes de trichomes sans trop d’efforts.Schéma de croissance de la Super Skunk féminisée de White LabelLes graines de Super Skunk Féminisées de White Label proviennent d’une variété à 80 % indica. Tout comme avec les autres variantes à dominante indica, les plantes sont robustes et fortes et possèdent des tiges et des branches épaisses. Elles produisent de grosses têtes lourdes qui croissent entre les nœuds lors de la période de floraison. Le cola principal de la plante, si on le laisse à lui-même, peut prendre le dessus sur la tige supérieure. Cela signifie que la variété est bien appropriée pour les méthodes comme l’élagage, le fimming, le pincement et l’étêtage. Celles-ci créent plusieurs tiges. Les cultivateurs plus expérimentés peuvent obtenir de bons résultats lorsqu’ils utilisent la méthode de lollipopping et les techniques Sea of Green (SOG) et Screen of Green (ScrOG). Les graines de Super Skunk Féminisées croissent pour devenir des plantes de taille moyenne. Elles ont une courte période de floraison (d’environ 45 à 50 jours), ce qui est surprenant compte tenu de l’abondance de leurs rendements et de la densité et de la grosseur de leurs têtes. Cela est attribué à son ascendance afghane qui a été mélangée à la variété Skunk d’origine pour faire ressortir les éléments indica. Les débutants peuvent obtenir de bons résultats avec cette variété ; tandis que les cultivateurs expérimentés peuvent sans aucun doute profiter pleinement du potentiel des plantes. Cette variété est bien adaptée à la culture en intérieur (typique pour une variante Skunk). Toutefois, il est possible de cultiver les plantes en extérieur dans un climat qui bénéficie d’étés longs et chauds. La variété Super Skunk Féminisée prospère lorsqu’elle est cultivée en pots où elle deviendra grande et touffue, qu’on les place en extérieur ou en intérieur sous des lampes. Lorsqu’on la cultive en extérieur en liberté, sa taille peut être beaucoup plus importante. La variété est également appropriée à la culture en serre. Il est toutefois recommandé de garder les plantes courtes pour éviter qu’elles ne poussent contre le toit. L’effet, le goût et l’odeur de la Super Skunk Féminisée de White LabelLa variété Super Skunk Féminisée de White Label, contrairement à certains autres types de Skunk, possède une odeur presque tropicale, même après l’affinage. Lors de la croissance, cette variété produit un arôme âcre et sucré aux notes terreuses et de noisette. Dès que les fleurs commencent à apparaître, les cultivateurs détecteront l’odeur classique de la variété Skunk : astringente et immédiatement reconnaissable. L’odeur peut devenir intense, surtout lors de la période de floraison. Puisque cela ne prend que sept semaines, les cultivateurs ne devraient pas trouver l’odeur problématique, tant que leur système d’extraction d’air est muni de filtres au charbon. Plusieurs consommateurs recommandent de laisser le temps de s’affiner correctement aux têtes récoltées. Cela leur permet de développer un profil aromatique complet. Lors de la consommation, la Super Skunk Féminisée procure un puissant effet relaxant qui soulage les sentiments de stress et la tension musculaire. Certaines personnes la recommandent comme variété à consommer en soirée, puisqu’elle peut également apporter un sentiment de gaieté et d’amusement. Le saviez-vous ?La variété Super Skunk d’origine a été lancée en 1990. Elle a été maintes fois primée et a reçu plusieurs distinctions depuis son lancement.La variété Super Skunk de White Label est également proposée dans les variantes Super Skunk Régulière et Super Skunk à Autofloraison.",
          "meta_title": "Super Skunk Féminisée (White Label) - Sensi Seeds",
          "meta_description": "La Super Skunk féminisée de White Label : 80 % indica. Facile à cultiver. Rendement : important. Période de floraison : courte. High : relaxant.",
          "url": "https://sensiseeds.com/fr/graines-feminisees/whitelabel/super-skunk-femelle",
          "image": "https://img.sensiseeds.com/fr/graines-feminisees/whitelabel/super-skunk-femelle-thumb.png",
          "price": 54.99,
          "currency": "eur",
          "in_stock": "Yes",
          "category": "Graines Féminisées",
          "flowering_min": 45,
          "flowering_max": 50,
          "strain_type": "Feminized",
          "number_of_seeds": 10,
          "climate_zone": "Méditerranéen/ Ensoleillé",
          "yield": "Récolte abondante",
          "heigh_gain": "Gain de taille moyen"
        },
        "es": {
          "itemtype": "Product",
          "id": 1520007,
          "title": "Semillas de Super Skunk Feminizadas de White Label",
          "description": "La Super Skunk Feminizada de White Label proporciona los grandes rendimientos y el subidón potente de la Super Skunk en un formato de fácil cultivo, siendo incluso más asequible. Gracias a su corto periodo de floración y a su naturaleza robusta, esta variedad es sorprendentemente popular entre los cultivadores, sin importar su nivel de experiencia. Es una elección fantástica para todo aquel que busque conseguir grandes cosechas de cogollos cubiertos de tricomas sin necesidad de realizar esfuerzos considerables. Patrón de cultivo de Super Skunk Feminizada de White LabelLa Super Skunk Feminizada de White Label es un 80% indica. Como ocurre con otras variantes indica dominante, las plantas son robustas y fuertes, con tallos y ramas gruesas. Producen cogollos grandes, pesados, que crecen entre los nudos durante la etapa de floración. La cola principal de la planta, si se deja crecer libremente, puede invadir el tallo superior. Esto significa que los métodos de trimming, fimming, pinching out o topping funcionan bien, pues crean varios tallos. Los cultivadores más experimentados pueden conseguir buenos resultados con el lollipopping, y con las técnicas de Mar de Verde (SOG) y Pantalla de Verde (SCROG). Las semillas de Super Skunk Feminizadas crecen hasta alcanzar un tamaño medio. Poseen un periodo de floración corto (entre 45 y 50 días), lo que es bastante sorprendente teniendo en cuenta los enormes rendimientos que se obtienen, con cogollos densos y robustos. La explicación la tenemos en su herencia Afghan, cruzada con una variedad de la Skunk original que le proporciona los elementos indica. Los principiantes pueden conseguir buenos resultados con esta variedad, y los cultivadores más veteranos pueden sacar provecho de todo el potencial de la planta. Esta variedad es apta para su cultivo en interiores (algo habitual en una Skunk). Sin embargo, también es posible hacerlo en exteriores, siempre y cuando el clima sea cálido, de largos veranos. La Super Skunk Feminizada crece en tiestos, en los cuales puede alcanzar una buena altura y frondosidad, tanto en exteriores como en interiores bajo las lámparas. Si se planta en terreno abierto, es muy probable que la altura sea bastante mayor. La variedad también es apta para su cultivo en invernaderos, aunque se recomienda mantener la estatura de las plantas bajo control para impedir que empujen el techado.Efecto, sabor y aroma de Super Skunk Feminizada de White LabelLa Super Skunk Feminizada de White Label, a diferencia de otros tipos de skunk, posee un aroma casi tropical, especialmente tras la cura. Mientras crece, produce un aroma penetrante y dulce, con notas de fondo que recuerdan a tierra y nueces. Una vez que las flores comienzan a brotar, los cultivadores notan un rastro del aroma clásico de la skunk: astringente y reconocible de inmediato. Este aroma puede llegar a ser muy intenso, especialmente durante la etapa de floración. Como solo dura siete semanas, los cultivadores de interior no deberían tener demasiados problemas, siempre y cuando tengan filtros de carbón en la extracción de aire. Muchos usuarios recomiendan que la cura de los cogollos cosechados dure el tiempo necesario. Esto les permite desarrollar todo su perfil de sabor. En el consumo, la Super Skunk Feminizada ofrece un potente efecto relajante, el cual alivia el estrés y la tensión muscular. Algunas personas la recomiendan por ser la variedad perfecta para el anochecer, pudiendo también proporcionar una sensación alegre y divertida. ¿Sabías que…?La Super Skunk original se lanzó en 1990. Ha ganado numerosos premios y galardones desde su lanzamiento.La Super Skunk de White Label también está disponible como semillas Super Skunk Regulares y Super Skunk Autoflorecientes.",
          "meta_title": "Super Skunk Feminizada de White Label – Sensi Seeds",
          "meta_description": "La Super Skunk Feminizada de White Label es una 80% indica de fácil cultivo, de grandes rendimientos, un corto periodo de floración y un subidón relajante.",
          "url": "https://sensiseeds.com/es/semillas-feminizadas/whitelabel/super-skunk-feminizada",
          "image": "https://img.sensiseeds.com/es/semillas-feminizadas/whitelabel/super-skunk-feminizada-thumb.png",
          "price": 54.99,
          "currency": "eur",
          "in_stock": "Yes",
          "category": "Semillas Feminizadas",
          "flowering_min": 45,
          "flowering_max": 50,
          "strain_type": "Feminized",
          "number_of_seeds": 10,
          "climate_zone": "Soleado/Mediterráneo",
          "yield": "Rendimiento elevado",
          "heigh_gain": "Aumento medio en altura"
        },
        "de": {
          "itemtype": "Product",
          "id": 1520007,
          "title": "Super Skunk Feminisierte Hanfsamen von White Label",
          "description": "Super Skunk Feminisiert von White Label bietet die großen Erträge und das wirkungsvolle High der Original-Super Skunk in einer Variante, die einfach zu growen und sogar noch bezahlbarer ist. Durch ihre kurze Blütezeit und Robustheit ist die Popularität dieser Sorte bei Growern jedes Erfahrungsgrads nicht überraschend. Es handelt sich um eine gute Wahl für jeden, der große Ernten von mit Trichomen bedeckten Buds ohne viel Aufwand plant. Wachstumsmuster der Super Skunk Feminisiert von White LabelWhite Label Super Skunk Feminisiert besteht zu 80 % Indica. Wie bei anderen Indica-dominanten Varianten sind die Pflanzen kräftig und stark, mit dicken Stämmen und Zweigen. Sie bilden große, schwere Buds aus, die während der Blütezeit zwischen den Nodi wachsen. Die Hauptblütendolde der Pflanze kann den oberen Stamm einnehmen, wenn sie sich selbst überlassen wird. Das heißt, die Sorte ist gut für Methoden wie Trimmen, Fimming, Pinzieren oder Topping geeignet. Dies sorgt für mehrere Stämme. Erfahrenere Grower können gute Ergebnisse mit Lollipopping, Sea of Green (SOG) und Screen of Green (SCROG) erzielen. Aus den Super Skunk Feminisierte Hanfsamen entstehen durchschnittlich große Pflanzen. Sie haben eine kurze Blütezeit (ca. 45 bis 50 Tage), was angesichts der üppigen Erträge und dichten, dicken Buds überraschend ist. Dies liegt am Afghan-Erbe, das mit der Original-Skunk-Sorte gegrowt wurde, um die Indica-Elemente zu betonen. Einsteiger können mit dieser Sorte gute Ergebnisse erzielen und erfahrene Grower definitiv das volle Potenzial der Pflanzen ausschöpfen. Diese Sorte ist für die Kultivierung in Innenräumen geeignet (typisch für eine Skunk-Variante). Es ist jedoch möglich, die Pflanzen draußen anzubauen (in einem Klima mit warmen, langen Sommern). Super Skunk Feminisiert gedeiht in Töpfen, wo sie im Freien oder in Innenräumen unter Lampen groß und buschig wird. Im Beet draußen erreicht sie eine deutlich größere Höhe. Die Sorte ist auch gut für die Kultivierung in Gewächshäusern geeignet, obwohl empfohlen wird, die Pflanzen kurz zu halten, damit sie nicht gegen das Dach drücken. Wirkung, Geschmack und Geruch der Super Skunk Feminisiert von White LabelWhite Label Super Skunk Feminisiert hat im Gegensatz zu einigen anderen Skunk-Typen einen fast tropischen Geruch, besonders nach dem Aushärten. Beim Wachsen verströmt sie ein intensives, süßes Aroma mit nussigen, erdigen Basisnoten. Wenn die Blüten sichtbar werden, kommt ein Hauch des klassischen Skunk-Geruchs zum Vorschein: bitter und sofort erkennbar. Dieser kann besonders während der Blütezeit intensiv werden. Da sie nur 7 Wochen dauert, sollte dies für Indoor-Grower nicht zu problematisch sein, solange sie Aktivkohlefilter an der Entlüftungsanlage haben. Viele Konsumenten empfehlen, den geernteten Buds genug Zeit zum Aushärten zu geben. Dies sorgt dafür, dass sie ein volles Aromaprofil entwickeln. Beim Konsum bietet die Super Skunk Feminisiert eine intensive entspannende Wirkung, die Stress lindert und die Muskeln entspannt. Einige empfehlen sie als perfekte Sorte für den Abend, da sie auch für Ausgelassenheit und Spaß sorgt. Wussten Sie?Die Original-Super Skunk wurde 1990 auf den Markt gebracht. Sie hat seitdem zahlreiche Preise und Auszeichnungen gewonnen.White Label Super Skunk ist auch als Super Skunk Regular und Super Skunk Automatic verfügbar.",
          "meta_title": "Super Skunk Feminisierte Samen (White Label) – Sensi Seeds",
          "meta_description": "White Label Super Skunk Feminisiert: 80 % Indica; leicht anzubauen. Üppige Ernten in einer kurzen Blütezeit; entspannendes High.",
          "url": "https://sensiseeds.com/de/feminisierte-samen/whitelabel/super-skunk-feminisiert",
          "image": "https://img.sensiseeds.com/de/feminisierte-samen/whitelabel/super-skunk-feminisiert-thumb.png",
          "price": 54.99,
          "currency": "eur",
          "in_stock": "Yes",
          "category": "Weibliche Samen",
          "flowering_min": 45,
          "flowering_max": 50,
          "strain_type": "Feminized",
          "number_of_seeds": 10,
          "climate_zone": "Sonniges / Mediterranes Klima",
          "yield": "Üppiger Ertrag",
          "heigh_gain": "Durchschnittliches Höhenwachstum"
        }
      },
}]
	const collectionName = `canna`
	// const canna = await db.collection( collectionName ).get()
	// canna.forEach(doc => {
		// sensiseeds.push(doc.data)
	// })
	return { 
		status: 200, 
		message: `Example cannastore object: Super Skunk Feminized Seeds by White Label`,
		sensiseeds
	}
}
