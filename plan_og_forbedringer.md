# Prosjektplan: Standalone Ventilatorsimulator (Articulate Rise)

Denne planen beskriver stegene vi skal ta for å gjøre ventilatorsimulatoren klar til bruk i Articulate Rise som et frittstående produkt (Option A - Web Object).

---

## Valg og beslutninger tatt:
1. **Pakking (Option A):** Simulatoren forblir i en mappestruktur med relative filbaner. Du ziper `dist`-mappen og laster den opp som et Web Object i Rise.
2. **Lagring av scenarier:** Siden det ikke er noen backend-database, fjerner vi "Save Scenario"-knappen og modalen helt for å holde UI-en ren og enkel.
3. **Språk:** Grensesnittet forblir på engelsk for å unngå oversettelsesfeil av kliniske begreper.
4. **Reset:** Reset-funksjonaliteten beholdes lokalt.

---

## Sjekkliste for gjennomføring (Steg-for-steg)

- [x] **Steg 1: Fjerne umiddelbar krasj ved oppstart (Global Mock)**
  - Legge inn en global `window.$wire`-mock i `<head>` på `index.html`.
  - Dette forhindrer at nettleseren kaster feilmeldinger når den evaluerer Livewire-variabler eller knapper.

- [x] **Steg 2: Fjerne "Save Scenario"-knapper og modal**
  - Rense `index.html` for "Save Scenario"-modalen og trigger-knapper.
  - Rense `ventilator_simulator.js` for referanser til lagring av scenarier.

- [x] **Steg 3: Fjerne Lærer/synkroniserings-modus**
  - Fjerne "Push to Learner"-knapper og Lærer-innstillinger.
  - Slette websocket- og kringkastingsmetoder (`broadcastSettings`) fra koden.

- [x] **Steg 4: Opprensking av HTML og gjenværende bindinger**
  - Fjerne server-side Blade-kommentarer (`<!--[if BLOCK]><![endif]-->`).
  - Gå igjennom og rydde opp i eventuelle inline `$wire`-kall i HTML-attributter.

- [x] **Steg 5: Sluttesting og konsollsjekk**
  - Kjøre filen lokalt og verifisere at nettleserens utviklerverktøy (Console) har 0 feilmeldinger.
  - Sjekke at asynkroni-scenariene (Presets) og alle brytere fungerer feilfritt.
