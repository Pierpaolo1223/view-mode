# Capitolo 8: I tre tipi di debito
## Ovvero: quando il codice non è l'unica cosa che si rompe

### Premessa: cos'è il debito, veramente?

Nel mondo dei puri e dei teorici, il debito tecnico è una «scelta consapevole di velocità contro qualità, che verrà ripagata in futuro con un refactoring». Una bella storia.

La verità è che il debito è quello che succede quando qualcuno decide che consegnare oggi è più importante che funzionare domani. È il «tanto lo sistema il prossimo» come preghiera laica del developer. Ma il debito, come gli interessi di un mutuo, cresce finché non diventa un macigno che schiaccia il team. Esistono tre tipi di debito: quello che puoi gestire, quello che ti gestisce e quello che uccide.

---

### Debito Tipo 1: Il debito tecnico gestibile
*«Quello che scegli, lo misuri, e un giorno ripaghi»*

È il debito **consapevole**. È quando tu, l’ingegnere, accetti una soluzione non perfetta per una deadline reale, ma accendi un faro sopra il problema invece di nasconderlo.

**Come lo riconosci:**
*   **C'è un ticket:** non è una cosa da ricordare a voce, è tracciata nel backlog.
*   **C'è un piano:** esiste una data o uno sprint preciso per il refactoring.
*   **C'è consapevolezza:** tutti sanno che quel codice è un cantiere aperto e nessuno lo tocca senza conoscere il rischio.
*   **Non si propaga:** resta circoscritto. È un incendio in un camino: brucia, ma non distrugge la casa.

### Momento mistico #101
Il debito gestibile è come una variabile dichiarata ma non inizializzata: sai che c'è e che dovrai metterci un valore, ma intanto il programma compila. Sei tu ad avere il controllo. Nel debito ingestibile, invece, la variabile esplode in runtime e si porta dietro mezza applicazione.

### Tip #34 – Il ticket salva-coscienza
Se devi fare una scelta di compromesso, apri un ticket subito. Se non c'è un ticket, quel debito non esiste per il sistema, esiste solo nella tua testa come angoscia. E il silenzio è il primo passo verso il disastro.

---

### Debito Tipo 2: Il debito tecnico ingestibile
*«Quello che ti divora mentre dormi»*

È il debito **inconsapevole**. È un'emorragia silenziosa dove la fretta non è l'eccezione, ma la regola. Il codice cresce come un tumore fino a impedire al sistema di respirare.

**Come lo riconosci:**
*   **Non c'è traccia:** il debito è ovunque ma non è scritto da nessuna parte.
*   **Effetto domino:** toccare una riga ne rompe tre a caso. Nessuno ha più la mappa del sistema.
*   **La gente ha paura:** i developer evitano certi moduli come la peste.
*   **La documentazione mente:** è scritta per far contento il cliente, non per descrivere il codice.
*   **Tempi imprevedibili:** non sai mai quanto ci vorrà per un task, perché ogni modifica è un salto nel buio.

### I sintomi fisici (perché il debito si sente)
1.  **Il batticuore del deploy:** ogni rilascio è un trauma perché non hai test affidabili.
2.  **La sindrome del venerdì pomeriggio:** l'ansia che il sistema muoia proprio quando stai per staccare.
3.  **L'insonnia della notifica:** lasci il telefono acceso perché sai che prima o poi ti chiameranno.

### Momento mistico #102
Il debito ingestibile non è un problema tecnico, è un problema di **governance**. È l'assenza di qualcuno che dica «stop, adesso ripaghiamo».

### Tip #35 – Il test del sonno
Prova a spegnere il telefono per una notte. Se non ce la fai perché hai l'ansia di non essere reperibile, il problema non è il telefono: è il tuo codice, o meglio l'azienda che ti ha convinto che il software valga più del tuo riposo.

---

### Debito Tipo 3: Il debito sociale
*«Quando il codice non è l'unica cosa che si rompe»*

Il debito sociale è la traduzione umana del debito tecnico. Succede quando la tossicità del sistema inizia a mangiare le persone. Non si ripaga con un refactoring, ma con lacrime e dimissioni.

### 1. Debito sociale lieve: la stanchezza
Le giornate si allungano «solo per questa settimana», ma non finiscono mai. L'ironia muore e la domenica diventa il giorno dell'ansia invece che del riposo.

### 2. Debito sociale medio: la rassegnazione
Smetti di segnalare i problemi perché tanto non ti ascoltano. Taci, fai e consegni. Sei diventato quello che l'azienda voleva: un corpo che scrive codice senza chiedersi perché.

### 3. Debito sociale grave: la patologia
I colleghi si ammalano (gastrite, ansia, depressione). Chi se ne va lo fa in silenzio, senza saluti. L'azienda diventa una prigione dove resti solo perché hai un mutuo e il mercato fuori ti sembra un loop infinito.

### Momento mistico #103
Il debito sociale è il prodotto principale delle aziende che trattano il codice come l'unica cosa che conta. Non capiscono che le persone infelici scrivono codice malato, alimentando un loop infinito (while true) che non si ferma mai.

---

## Come azzerare il debito sociale

Non si gestisce, si azzera.
1.  **Licenziando i bugiardi:** la menzogna non deve pagare.
2.  **Proteggendo chi dice la verità:** valorizza chi solleva critiche costruttive.
3.  **Persone prima dei numeri:** ferma i progetti che stanno uccidendo il team, anche se il CEO deve rinunciare alla BMW.
4.  **Accettando la responsabilità:** la colpa è del management, non del «mercato».

---

### Tip #36 – Il test della dignità

Rispondi onestamente (Sì/No):
1.  La domenica sera hai il magone allo stomaco?
2.  Appena accendi il PC il primo pensiero è «quando esco»?
3.  Hai smesso di proporre idee perché tanto è inutile?
4.  I tuoi colleghi prendono ansiolitici per reggere il ritmo?
5.  Quando qualcuno si dimette pensi «fortunato lui»?
6.  Il tuo telefono è sempre acceso anche in ferie?
7.  Se potessi, cambieresti lavoro domani mattina?

**Il verdetto:**
*   **0-2 sì:** Stai bene.
*   **3-4 sì:** Debito sociale in corso. Inizia a guardarti intorno.
*   **5-6 sì:** Debito grave. Non aspettare il bonus, il momento di uscire è adesso.
*   **7 sì:** Non stai lavorando, stai sopravvivendo. Esci subito, anche senza alternativa, perché restare lì ti sta uccidendo.