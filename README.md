<h1>Webanimatie | Kunstwerk</h1>

<em>Note: zie in mijn repository de volledige versies van deze opdracht.</em>

<p>Tijdens deze opdracht heb ik voor het eerst kennis gemaakt met HTML, CSS en Javascript. Allereerst koos ik een kunstwerk die ik vervolgens nagemaakt heb in een webbrowser. Het doel van deze opdracht was om interactie toe te voegen aan het kunstwerk en om te experimenteren CSS animaties en transities. Wat eerst een statisch kunstwerk was, is nu een dynamisch geheel.</p>

<h3>Gekozen Kunstwerk</h3>
<p>Het kunstwerk dat ik heb gekozen is een boekcover van het boek "Stephen Ormandy, Only Dancing". Stephen Ormandy is een Australische ontwerper en kunstenaar met een hele authentieke stijl. Zijn stijl is gelijk te herkennen aan de combinatie van meerdere kleurrijke organische vormen. Dit boek is geen werk van hem zelf, maar van Mark Gowing. In dit boek onderzoekt hij de stijl van Stephen. Het is de eerste publicatie die gewijd is aan het onderzoeken van Ormandy's levendige olieverfschilderijen en de speelsheid die hij toevoegt bij alles wat hij doet. Deze speelsheid wilde ik ook graag meegeven in mijn animaties.</p>
<img width="375" height="400" src="Boekcover-Only-Dancing.jpg">
<p>Dit kunstwerk heb ik gekozen omdat de vele verschillende kleuren mij aanspraken. Ik zag gelijk dingen die ik ermee kon doen. Daarnaast ga ik hiermee uit mijn comfort-zone omdat ik nog nooit met zo'n stijl gewerkt heb. Tijdens het zoeken naar een kunstwerk dacht ik ook praktisch na. Het is de eerste keer dat ik aan de slag ga met HTML, CSS en Javascript. Ik wilde dus dat het kunstwerk ook niet te ingewikkeld in elkaar stak.

<h3>Iteratie 1</h3>
<p>Allereerst ben ik begonnen met het namaken van het kunstwerk in Illustrator. Dit bestand heb ik vervolgens geëxporteerd als SVG en in mijn html geplaatst. Vervolgens heb ik veel tijd gestoken in het ordenen van de SVG, kijken hoe dit werkt en het positioneren van de SVG op het scherm. Toen alles stond zoals ik het wilde hebben, ben ik gaan experimenteren met animaties in CSS. Daarbij maakte ik gebruik van keyframes. Hierbij heb ik verschillende bronnen gebruikt (zie bronnenlijst).</p>
<img "375" height="400" src="Screen-iteratie1.png">
<p>Naast het animeren met keyframes heb ik mij ook verdiept in pseudo classes. Ik vond de :hover het meest geschikt voor mijn kunstwerk omdat je hiermee op een interactieve manier kleuren kunt laten veranderen. Dit voegt de speelsheid toe die ik graag wilde meegeven aan mijn kunstwerk omdat je de kleuren als het ware kunt laten 'dansen'.</p>
 
<h3>Iteratie 2</h3>
<p>Tijdens de eerste iteratie heb ik mij vooral gefocust op CSS animatie. Deze animatie wilde ik nu interactief maken door middel van Javascript. Waar eerst de verschillende vlakken automatisch verplaatsten, moet je dit nu met een klik zelf activeren. Wanneer je klikt op een vlak verplaatst hij over de Y-as (soms ook over de X-as). Het kunstwerk wordt als het ware uit elkaar getrokken en je kunt dit vervolgens als een soort puzzel weer in elkaar klikken.</p>
<p>Ook wilde ik interactie toevoegen met het toetsenbord. Ik maakte een knop onder het kunstwerk met de tekst 'press spacebar to dance'. Wanneer je nu op de spatiebalk klikt beginnen de letters als het ware te dansen. Ik heb ervoor gekozen om alleen de woorden 'Only Dancing' te laten bewegen vanwege de betekenis van de woorden. Ik heb letters laten draaien met Transform: rotate. Daarnaast wilde ik ook nog een andere beweging toevoegen. Hiervoor heb ik gekeken in de CSS Almanac en kwam ik bij Transform: skew.<p>

<h3>Experiment</h3>
<p>Naast deze properties heb ik ook gekeken naar andere properties die ik nog niet kende. Zo kwam ik bijvoorbeeld bij de verschillende filters die je kunt gebruiken. Ik wilde gebruik maken van de filter 'invert' om kleuren om te draaien. Dit vond ik passen bij het kunstwerk omdat kleur sterk aanwezig is in het kunstwerk. Ik had de code zo geschreven dat de kleuren zouden omdraaien als het scherm zo klein werd als een mobiel scherm. Later heb ik dit effect toch weggehaald omdat het mij helaas niet lukte om de zwarte achtergrond ook naar wit te veranderen. Nu waren de letters niet meer leesbaar en dat was ook niet de bedoeling. Zie onderstaande screenshot.</p>
<img width="250" height="400" src="Invert.png">
<p>Een ander idee waar ik graag nog mee had willen experimenteren is het gebruiken van audio. Ik zou dan muziek willen laten afspelen wanneer je op de spatiebalk drukt om de letters te laten dansen. Ik denk dat dit goed bij mijn kunstwerk en de stijl van Stephen Ormandy zou passen. Dit is iets waarin ik mij had verdiept als ik nog meer tijd over zou hebben gehad.</p>

<h3>Responsive</h3>
<p>Zoals je op bovenstaande afbeelding kunt zien, is het kunstwerk grotendeels responsive. Dit was voor mij een grote uitdaging om voor elkaar te krijgen. Wat mij opvalt is dat er heel veel verschillende manieren zijn om je elementen te positioneren. De ene property werkt wel in combinatie met de ander en de andere property werkt niet in combinatie met een andere. Dit vond ik erg lastig. Uiteindelijk heb ik het met de volgende code voor elkaar gekregen om de elementen in het midden uit te lijnen en kleiner te laten worden wanneer het scherm ook kleiner wordt.</p>
<img width="250" height="200" src="Responsive.png">
<p>Waarschijnlijk kan dit op een betere manier en hierin zou ik mij de volgende keer meer in willen verdiepen. Zoals je ziet, is de knop wel responsive maar de tekst erin niet helemaal. Dat vind ik jammer en hierin zou ik dus nog een slag kunnen slaan.</p>

<h3>Mobiele functies</h3>
<p>Wanneer je het kunstwerk op een telefoon opent zijn de meeste functies nog werkbaar. Zo kun je op de verschillende vlakken 'klikken' en verschuiven deze nog steeds uit elkaar en verandert de kleur. Je kunt natuurlijk nu niet de spatiebalk gebruiken om de letters te laten dansen. Wat ik nog had willen toevoegen is deze knop ook klikbaar maken, zodat ook de letters op de mobiele versie kunnen dansen. Misschien zou zelfs de tekst wel kunnen veranderen in de knop. Hier heb ik helaas geen tijd meer voor gehad.</p>

<h3>Resultaat</h3>
<p>Klik op de link om het resultaat in de webbrowser te bekijken: <br>https://misscage.github.io/WebAnimation/Versie%205.0/index.html</p>
<img src="Resultaat.png">

<h3>Reflectie</h3>
<p>Over het algemeen ben ik trots op wat ik heb kunnen neerzetten zonder enige ervaring met HTML, CSS en Javascript. Door hier veel tijd en energie in te hebben gestoken, kan ik nu zeggen dat ik de basis begrijp. Ik weet dat er heel veel mogelijk is en waar ik informatie vandaan kan halen om dit uit te kunnen voeren. Wat ik lastig vond en waar ik nog op wil verbeteren is positionering. Ik heb gemerkt dat er heel veel 'regeltjes' en manieren zijn om elementen te positioneren. Wanneer je dit niet weet, is het lastig om erachter te komen waarom iets niet werkt. Daarbij wil ik ook verbeteren op het gebied van het responsive maken van mijn ontwerpen.</p>
<p>Tijdens deze opdracht heb ik veel dingen uitgeprobeerd en later ook weer weggehaald omdat het toch niet werkte voor mijn kunstwerk. Dit maakt deze opdracht voor mij een geslaagd experiment aangezien ik nu weet dat eigenlijk (bijna) alles mogelijk is met HTML, CSS en Javascript. Ik weet nu veel meer over coderen dan dat ik van te voren gehoopt had!</p>

<h3>Bronnenlijst</h3>
https://designarchives.aiga.org/#/entries/%2Bcollections%3A%2250%20Books%20%7C%2050%20Covers%20of%202017%22/_/detail/relevance/asc/83/7/21941/stephen-ormandy-only-dancing/1<br>
https://formisteditions.co/products/stephen-ormandy-only-dancing<br>
https://css-tricks.com/almanac/<br>
https://www.youtube.com/watch?v=gWai7fYp9PY<br>
https://www.w3schools.com/cssref/css3_pr_filter.asp<br>
https://stackoverflow.com/
