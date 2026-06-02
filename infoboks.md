# Asynkroni-eksempler

### 1. Reverse Triggering (Early Trigger) – Trykkontroll (PC)
* **Hva er dette?** Det er respiratoren som trigger pasienten, ikke pasienten som trigger respiratoren. Hvert andre maskinelle innpust utløser en ufrivillig sammentrekning av pasientens mellomgolv.
* **Hvorfor oppstår det?** I dette scenariet har pasienten en innstilt "entrainment ratio" på 1:2. Det betyr at den faste maskinelle trykkstøtten (PC på 15 over en PEEP på 10) stimulerer pasientens respirasjonssenter til å trekke pusten *etter* at maskinens innpust allerede har startet (forsinket med 0.4 sekunder).
* **Hvordan lese verdiene og grafene:** Siden vi er i trykkontroll, holder maskinen trykket stabilt. Når pasienten plutselig trekker inn ekstra (Pmus på 10) midt i maskinens innpust, vil du i *Measurements* se at det målte tidevolumet (V_TE) plutselig blir høyere enn forventet for den gitte trykkstøtten. 
* **Pedagogisk tiltak:** Bytt til en ren spontan modus (som PS) hvis pasienten har en egen, sterk pustestasjon. Hvis pasienten krever kontrollert ventilering, kan dypere sedasjon/relaksantia eller justering av maskinens frekvens være nødvendig for å bryte mønsteret.

---

### 2. Reverse Triggering (Early Trigger) – Volumkontroll (VC)
* **Hva er dette?** Det samme nevrologiske fenomenet som over, men konsekvensene på skjermen blir annerledes fordi vi nå er i Volumkontroll (VC).
* **Hvorfor oppstår det?** Maskinen pumper trofast inn nøyaktig 450 ml med en fast flow (60 L/min). Når maskinens innblåsing utløser et ufrivillig innpust hos pasienten (Pmus på 8), skapes det et kraftig undertrykk i pasientens brysthule.
* **Hvordan lese verdiene og grafene:** Siden volumet og flowen er fastlåst av maskinen, vil pasientens sugekraft føre til et tydelig dropp i luftveistrykket. Se på trykkurven (Pressure): Du vil se en dyp "grop" (scooping) midt i innpustet. Maskinen må jobbe *mindre* for å levere volumet, så PIP (Peak Inspiratory Pressure) synker i *Measurements*.
* **Pedagogisk tiltak:** Møt pasientens flow-behov ved å bytte til trykkontroll (PC), eller la dem styre pusten selv i en støttemodus.

---

### 3. Ineffektive forsøk (Failed Trigger)
* **Hva er dette?** Pasienten forsøker å puste inn, men klarer ikke å "vekke" respiratoren til å gi et pust. Innsatsen er bortkastet.
* **Hvorfor oppstår det?** Her har pasienten høy trykkstøtte (PS 20) kombinert med høy motstand og høy compliance. Dette fører til at det tar lang tid før luften kommer ut. Pasienten puster raskt (RR 24), og lungene rekker ikke tømme seg. Det bygger seg opp Auto-PEEP. Pasientens svake innpust (Pmus 4) klarer rett og slett ikke å overvinne denne Auto-PEEPen for å trigge flow-sensoren (som krever 2 L/min).
* **Hvordan lese verdiene og grafene:** Se på respirasjonsfrekvensen (RR) i *Measurements*; den er lavere (f.eks. 15) enn pasientens reelle pustefrekvens. På flow-kurven (Flow) vil du se små "humper" opp mot null-linjen i utpustsfasen, uten at maskinen gir luft.
* **Pedagogisk tiltak:** Reduser trykkstøtten (for å redusere volumet som skal pustes ut), forleng utpuststiden, eller øk ekstern PEEP forsiktig for å utligne den innvendige Auto-PEEPen slik at triggeren blir lettere å nå.

---

### 4. For tidlig sykling (Early Cycling)
* **Hva er dette?** Respiratoren slår over til utpust (ekspirasjon) mens pasienten fortsatt er i full gang med å puste inn.
* **Hvorfor oppstår det?** I dette trykkontrollerte moduset har maskinen en fastsatt kort I-tid på 0.7 sekunder. Pasientens hjerne, derimot, sender signaler til mellomgolvet om å fortsette innpustet i hele 1.1 sekunder.
* **Hvordan lese verdiene og grafene:** Maskinen stenger trykket, men pasienten "suger" fortsatt. I trykkurven faller trykket ned mot PEEP (5), men i flow-kurven ser du en kort forsinkelse (eller en "bule") før flowen blir negativ (utpust). Pasientens fortsatte sug holder luften tilbake.
* **Pedagogisk tiltak:** Forleng I-tiden (I-Time) på respiratoren for å matche pasientens nevrale innpuststid, eller bytt til Trykkstøtte (PS) med Flow Cycle, slik at pusten avsluttes basert på pasientens eget flow-mønster.

---

### 5. For sen sykling (Late Cycling)
* **Hva er dette?** Pasienten er ferdig med innpustet og ønsker å puste ut, men respiratoren fortsetter å presse luft ned i lungene.
* **Hvorfor oppstår det?** Det motsatte av eksempelet over: Pasientens nevrale innpust er kort (0.8 sekunder), men maskinens I-tid er låst til hele 1.0 sekund. Pasienten begynner utpusten sin aktivt *mot* maskinens innblåsing.
* **Hvordan lese verdiene og grafene:** Siden pasienten "presser imot" mot slutten av innpustet, vil luftveistrykket øke. I trykkurven vil du se en tydelig pigg (spike) helt på slutten av innpustsfasen. I *Measurements* vil du også merke at PIP (Topptrykk) stiger.
* **Pedagogisk tiltak:** Reduser maskinens I-tid for å matche pasientens korte innpust, eller bytt til Trykkstøtte (PS) slik at pasienten får puste ut når de selv ønsker.

---

### 6. Pustestabling (Breath-Stacking)
* **Hva er dette?** Pasienten drar i gang et nytt innpust før den forrige utpusten er i nærheten av å være ferdig. Volumene "stables" oppå hverandre inne i lungene.
* **Hvorfor oppstår det?** Pasienten har en meget sterk og lang pusterefleks (Pmus 12, varighet 1.1s). Maskinens I-tid er kort (0.6s) med et fastsatt tidalvolum. Pasienten "dobbeltrigger" fordi deres eget lange sug utløser to påfølgende maskinelle pust før utpusten får skje.
* **Hvordan lese verdiene og grafene:** Se på volumkurven (Volume)! Den vil gå opp under det første pustet, så vidt starte på veien ned igjen, for så å skyte enda høyere opp ved neste pust. Den når ikke grunnlinjen (0). VTE (utåndet volum) vil i en periode være mye lavere enn levert VT (400 ml).
* **Pedagogisk tiltak:** Dette er farlig og øker risikoen for lungeskade (barotraume). Øk VT (tidalvolum) eller flowen betydelig for å tilfredsstille pasientens store "lufthunger" i ett enkelt pust, eller bruk tung sedasjon dersom pasienten må være i kontrollert modus.

---

### 7. Auto-trigging (False Trigger)
* **Hva er dette?** Maskinen leverer et pust helt av seg selv, uten at det er noen nevrologisk pusteinnsats fra pasienten i det hele tatt.
* **Hvorfor oppstår det?** I denne simulasjonen puster ikke pasienten selv (Spont Rate = 0). Men de har et hjerte som slår med 100 slag i minuttet (Cardiac Oscillations). Hvert hjerteslag dytter litt på lungene og skaper ørsmå bølger i luften. Fordi maskinens Flow Trigger er stilt ekstremt sensitivt (2 L/min), forveksler den hjerteslagets luftbølge med pasientens pusteforsøk.
* **Hvordan lese verdiene og grafene:** Respirasjonsfrekvensen (RR) i *Measurements* vil vise 24, selv om pasienten ligger helt i ro. På flow-kurven, like før innpustet starter, vil du se ørsmå, rytmiske svingninger forårsaket av hjertet.
* **Pedagogisk tiltak:** Gå inn i trigger-innstillingene. Gjør flow-triggeren litt mindre følsom (f.eks. øk til 3-4 L/min), eller bytt til trykk-trigger, slik at hjerteslagene ignoreres og maskinen bare reagerer på reelle pusteforsøk. Undersøk også alltid om det kan være lekkasje i slangesettet.
