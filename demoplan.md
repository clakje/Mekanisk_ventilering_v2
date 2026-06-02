# Spesifikasjon for pedagogiske infobokser i respiratorsimulator

Dette dokumentet beskriver innholdet og logikken for infobokser (tooltips/popups) som skal implementeres i respiratorsimulatoren. Målet er å bygge klinisk forståelse ("nanolæring") ved å koble visuelle endringer i grafene med konkrete, medisinske forklaringer. 

AI-assistent: Din oppgave er å bygge UI-komponentene og visningslogikken for disse seks boksene basert på funksjonsbeskrivelsene under.

## 1. Normal ventilering (BPAP) – "Den ideelle pasienten"
* **Trigger/Når:** Vises 3-4 sekunder etter at scenariet er lastet inn (lar brukeren se 1-2 pust først).
* **UI-plassering:** Sentrert mellom trykkurven (øverst) og flow-kurven (i midten). Visuelt knyttet til overgangen mellom inspirasjon og ekspirasjon.
* **Tittel:** Normal ventilering (Grunnlinjen)
* **Tekstinnhold:**
  * **Hva ser du?** Trykkurven stiger jevnt og mykt til innstilt IPAP. Se spesielt på flow-kurven (grønn): Den returnerer helt til null-linjen før neste innpust starter.
  * **Klinisk betydning:** Dette viser perfekt synkroni. Pasienten får tid til å tømme lungene helt for luft, noe som forhindrer opphopning av karbondioksid og ubehag.

## 2. Autotrigging (Feiltolket pusteforsøk)
* **Trigger/Når:** Vises umiddelbart når scenariet starter (0 sekunder forsinkelse).
* **UI-plassering:** Festet nær måleverdien for *Respirasjonsfrekvens (Rate)* i brukergrensesnittet, eventuelt med en peker mot de tette, raske utslagene i flow-kurven.
* **Tittel:** Fare: Autotrigging
* **Tekstinnhold:**
  * **Hva ser du?** Maskinen leverer pust mye raskere enn pasienten egentlig ber om (høy frekvens). Flow-kurven hakker og trigges uten dype, naturlige innpust.
  * **Klinisk betydning:** Maskinen er for sensitiv og feiltolker støy (f.eks. maskelekkasje eller hjerteslag) som pasientens pust. Dette stresser pasienten, kan gi hyperventilering, og utløser falske alarmer. Løsningen er ofte å gjøre triggeren mindre følsom, eller tette lekkasjer.

## 3. For rask stigetid ("Trykkpigg")
* **Trigger/Når:** Vises etter to fullførte pustsykluser.
* **UI-plassering:** Posisjonert rett ved toppen av trykkurven (PIP), slik at den markerer den visuelle "piggen" (overshoot) i det trykket treffer maks.
* **Tittel:** Ubehag: For rask stigetid
* **Tekstinnhold:**
  * **Hva ser du?** Trykkurven har en skarp "pigg" (overshoot) helt i starten av innpustet før den flater ut.
  * **Klinisk betydning:** Maskinen dytter luften inn for brutalt. Dette kjennes ofte ubehagelig for pasienten ("som å få hodet ut av vinduet i høy fart"), og det øker risikoen for at luften presses ut av masken som en lekkasje. Stigetiden (Rise Time) bør forlenges noe.

## 4. For langsom stigetid ("Luftsult")
* **Trigger/Når:** Vises idet det *andre* pustet i sekvensen starter.
* **UI-plassering:** Festet ved startfasen av trykkurven, pekende på "gropen" (den konkave formen) som oppstår.
* **Tittel:** Asynkroni: Luftsult (Scooping)
* **Tekstinnhold:**
  * **Hva ser du?** I stedet for å stige rett opp, buer trykkurven innover som en skje (scooping).
  * **Klinisk betydning:** Pasientens muskelinnsats er sterkere og raskere enn maskinens luftlevering. Pasienten trekker luften ut av slangene raskere enn maskinen klarer å fylle på. Dette oppleves som "luftsult" og gir økt pustearbeid. Stigetiden må gjøres raskere.

## 5. Forsinket inspiratorisk avslutning (Late Cycling)
* **Trigger/Når:** Vises etter at 1-2 pustsykluser er tegnet ferdig. Valgfritt: Frys gjerne graf-animasjonen i 2 sekunder for å understreke poenget.
* **UI-plassering:** Dekkende for høyre side av det pågående innpustet, med visuell referanse til *slutten* av trykkurven (hvor trykket stiger unormalt) og *slutten* av inspiratorisk flow.
* **Tittel:** Kamp: Forsinket avslutning (Late Cycling)
* **Tekstinnhold:**
  * **Hva ser du?** Trykket stiger litt helt på slutten av innpustet. Samtidig ser vi at flow-kurven presses kunstig ned mot null.
  * **Klinisk betydning:** Pasienten er ferdig med innpustet og strammer magemusklene for å puste ut, men maskinen tviholder på trykket. Pasienten ender med å kjempe *mot* respiratoren. Flow-sykleringsprosenten (Cycle Off) må heves slik at maskinen slipper opp tidligere.

## 6. Dobbelt støttede pust (Double Triggering)
* **Trigger/Når:** Vises umiddelbart etter at det første dobbeltslaget inntreffer (identifiseres ved at flow-kurven snur brått opp igjen før utpusten er over).
* **UI-plassering:** Nær volumkurven (nederst), med visuell referanse til arealet som stables opp over null-linjen.
* **Tittel:** Fare for traume: Double Triggering
* **Tekstinnhold:**
  * **Hva ser du?** Et nytt pust starter før pasienten har fått pustet ut det forrige (vises tydelig på flow-kurven). Volumkurven viser at luftmengden "stables" og dobles.
  * **Klinisk betydning:** Respiratoren har avsluttet pustet for tidlig. Fordi pasienten fortsatt prøver å trekke inn luft, utløses en ny trigging. Dette gir svært store tidalvolumer (breath stacking) og fare for overdistensjon og lungeskade. Maskinen må gi lengre innpuststid.