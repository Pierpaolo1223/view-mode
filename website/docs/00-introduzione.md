# Introduzione

## Il manifesto di Anastasio: perché la dignità non è in modalità “sola lettura”

Benvenuti in **VIEW MODE**.

Se state leggendo queste pagine, probabilmente sapete già cosa significa trovarsi dentro un sistema in cui si hanno i permessi per scorgere ogni bug, ogni falla logica, ogni idiozia architettonica – ma mancano i privilegi di root per cambiare anche una sola riga di codice della propria vita professionale. Siete spettatori pagati (poco) per assistere a un incendio, senza poter usare l’estintore: non è nel job description.

In questo libro non troverete consigli su come centrare un div o ottimizzare una query SQL. Troverete invece la cronaca di chi ha camminato sotto il sole con un laptop da tre chili in mano, perché quella che gli era stata presentata come “un’opportunità all’interno di un’azienda d’eccellenza” era, in realtà, soltanto un’esca per pescare pesci fessi. Troverete il resoconto di colloqui con persone che non sanno distinguere un bus di messaggi da un bus dell’EAV, ma che si sentono comunque in dovere di spiegarvi perché non siete “abbastanza senior” per il loro schema di subappalto umano.

Anastasio è ognuno di voi. È l’ingegnere che risponde “no” ai microservizi quando sono inutili, sapendo che quel “no” gli costerà il posto, ma gli salverà il fegato. È colui che ha capito che la seniority non si misura in anni di esperienza, ma nel numero di volte in cui si è avuto il coraggio di dire alla manager stalker: no, non voglio andare alla festa aziendale per parlare un inglese maccheronico mentre mangio patate bollite; no, non posso mettere su un task su un prodotto che sta già andando alla deriva.

Questo libro è un **debug collettivo**. È il tentativo di capire perché il mercato del lavoro IT in Italia sia diventato una sorta di Triangolo delle Bermuda, dove il talento entra e scompare, lasciando spazio soltanto a slide, voucher e recruiter che vi ghostano il venerdì pomeriggio.

Mettetevi comodi. Ma non troppo: il manager – o il recruiter – potrebbe passare a controllare che siate “allineati alla cultura aziendale”.

---

## Glossario dei termini tecnici

I termini che seguono sono utilizzati in questo libro in chiave metaforica. Per ciascuno di essi viene fornita una breve definizione tecnica, seguita dall’uso che ne fa Anastasio.

### VIEW MODE / Sola lettura
*   **Definizione tecnica:** Stato di un file o di un sistema in cui l’utente può visualizzarne il contenuto, ma non può modificarlo.
*   **Nel libro:** La condizione del lavoratore che vede tutti i problemi — i bug, le falle logiche, le ingiustizie — ma non ha l’autorità per cambiarli, perché “non è nel suo job description”. Lo spettatore pagato (poco) che assiste all’incendio senza poter usare l’estintore.

### Permessi di scrittura
*   **Definizione tecnica:** Privilegi che permettono di modificare un file, una directory o un sistema.
*   **Nel libro:** La capacità di agire sulla propria carriera e sulla propria dignità professionale. Non si ottengono per concessione di un manager o di un’azienda. Si prendono: con un “no” detto al momento giusto, con un confine difeso, con una scelta che mette se stessi prima della paura. Costituiscono il controaltare di VIEW MODE e il tema centrale del libro.

### Debug / Debuggare
*   **Definizione tecnica:** Processo di analisi di un sistema per identificare e correggere errori (bug).
*   **Nel libro:** L’atto di osservare criticamente il mondo del lavoro per capire cosa non funziona. “Questo libro è un debug collettivo” significa che non racconta una storia individuale, ma offre strumenti per analizzare un sistema malato. Debuggare la propria carriera è il primo passo per smettere di subirla.

### while(true)
*   **Definizione tecnica:** Costrutto di programmazione che crea un ciclo infinito. Se non contiene un’istruzione di uscita (break), il programma non si ferma mai.
*   **Nel libro:** Descrive la condizione di chi resta nel mercato del lavoro IT senza via d’uscita. Il “Grande Ciclo dei Colloqui” è un while(true) progettato dal sistema per tenerti dentro: colloquio dopo colloquio, promessa dopo promessa, ghosting dopo ghosting, senza mai trovare una soluzione.

### Null pointer / Puntatore nullo
*   **Definizione tecnica:** Riferimento a un indirizzo di memoria che non esiste. Tentare di accedervi genera un errore.
*   **Nel libro:** La promessa che non ha alcun riferimento reale. “Settembre Fantasma” è un null pointer: un manager ti dice “ne parliamo a settembre”, ma settembre non esiste. Tentare di accedere a quella promessa genera solo un crash. La lezione: se non c’è una firma, non esiste.

### sudo
*   **Definizione tecnica:** Comando Unix che esegue un’operazione con privilegi di amministratore (superuser). `sudo rm -rf` è uno dei comandi più pericolosi: cancella tutto senza possibilità di recupero.
*   **Nel libro:** Il “no” definitivo, l’atto di prendere il controllo. “La mia risposta è stata un sudo rm -rf” significa: ho detto no con la fermezza di chi cancella un problema alla radice. Alla fine, “l’unico vero sudo che conta” è smettere di aspettare che qualcuno ti dia i permessi di scrittura e prenderteli da soli.

### Boot / Avvio
*   **Definizione tecnica:** Processo di avvio di un computer o di un sistema operativo. Un boot fallito significa che il sistema non si avvia.
*   **Nel libro:** Descrive sia l’hardware obsoleto delle aziende tossiche (“un computer che faticava a caricare persino il blocco note”) sia il fallimento organizzativo (“l’applicativo non partiva”). Il boot fallito è il sintomo di un’azienda che non investe nemmeno nell’essenziale.

### Commit
*   **Definizione tecnica:** Nel controllo di versione (Git), l’azione di salvare una modifica nel repository. Un commit documenta chi ha fatto cosa e quando.
*   **Nel libro:** L’atto di prendere una posizione chiara, documentata, assumendosene la responsabilità. “Commit di solidarietà” significa schierarsi quando un collega viene attaccato. La mancanza di commit — il silenzio complice — è ciò che rende tossico un ambiente.

### Memory leak / Perdita di memoria
*   **Definizione tecnica:** Difetto per cui un programma non rilascia la memoria non più utilizzata, consumando risorse fino al collasso del sistema.
*   **Nel libro:** Il debito tecnico e sociale che le aziende tossiche accumulano senza mai ripagarlo. Ogni compromesso non documentato, ogni “facciamo dopo”, ogni ingiustizia non affrontata è una perdita. Il sistema va avanti fino a quando le risorse finiscono e tutto collassa.

### Refactoring
*   **Definizione tecnica:** Riscrittura del codice per migliorarne la struttura, la leggibilità o la manutenibilità, senza cambiarne il comportamento esterno.
*   **Nel libro:** La possibilità di cambiare la propria carriera, riorganizzarla, ripulirla dalle scelte sbagliate. Ma il refactoring richiede tempo e coraggio. Nessuno te lo concederà mai: devi prendertelo. A volte significa cambiare azienda, cambiare mestiere o smettere di fare ciò che ti brucia dentro.

### Exception / Eccezione
*   **Definizione tecnica:** Evento imprevisto che interrompe il normale flusso di esecuzione di un programma. Se non gestita, fa crashare il sistema.
*   **Nel libro:** Tutto ciò che il sistema aziendale non sa gestire: un ingegnere che dice “no”, un dato che contraddice la narrazione, una richiesta di dignità. Le aziende tossiche non gestiscono le eccezioni: le ignorano finché il crash non è inevitabile. Anastasio impara a lanciare eccezioni per farsi sentire.

### Breakpoint / Punto di interruzione
*   **Definizione tecnica:** Nel debugging, un punto in cui si ferma l’esecuzione del programma per osservare lo stato del sistema (variabili, memoria, flusso).
*   **Nel libro:** Il momento in cui ci si ferma a osservare ciò che sta accadendo prima di subire o reagire. Mettere un breakpoint è un atto di consapevolezza: smetti di essere eseguito e inizi a osservare.

### Cronjob
*   **Definizione tecnica:** Attività programmata per eseguirsi a intervalli regolari senza intervento umano.
*   **Nel libro:** La routine alienante di chi fa un lavoro che non sopporta più. “La sveglia è suonata con la crudeltà di un cronjob impostato per farti del male”. È il risveglio automatico che ti costringe a ripetere lo stesso disagio senza staccare.

### Hard reset
*   **Definizione tecnica:** Ripristino di un dispositivo alle condizioni di fabbrica. Cancella tutto e ricomincia da zero.
*   **Nel libro:** La decisione radicale di uscire da un ambiente tossico senza cercare un’alternativa immediata. A volte l’unica soluzione è azzerare tutto e ripartire della propria carriera.

### Log
*   **Definizione tecnica:** File o flusso di dati che registra eventi, errori e informazioni sull’esecuzione di un sistema.
*   **Nel libro:** La memoria di ciò che si è vissuto. “Ho raccolto i log” significa documentare i fatti per non farsi manipolare dalla narrazione aziendale. I log sono la prova che ti dà ragione.

### Kernel
*   **Definizione tecnica:** Il nucleo di un sistema operativo. Se il kernel va in panico, tutto il sistema si blocca.
*   **Nel libro:** La salute mentale e l’integrità personale. “Avere il kernel in panico” significa essere a pezzi prima di iniziare la giornata. Il “9-18 Sereno” è colui che ha ancora “il kernel integro”.

### Crash
*   **Definizione tecnica:** Arresto improvviso e anomalo di un programma o di un sistema.
*   **Nel libro:** Il collasso di un’azienda, di un progetto o di una carriera. Il licenziamento è il “Crash Log Finale”. A volte il crash è l'inizio del momento in cui smetti di far finta che tutto funzioni.

### Loop / Ciclo
*   **Definizione tecnica:** Sequenza di istruzioni eseguita ripetutamente fino al verificarsi di una condizione di uscita.
*   **Nel libro:** La trappola. Il “Loop dei Colloqui” è progettato per tenerti dentro. Imparare a mettere un break è ciò che ti salva.

---

## Disclaimer

**Leggere attentamente prima di procedere all’esecuzione del codice.**

Ogni riferimento a persone esistenti, aziende reali o recruiter in carne e ossa è puramente casuale. O meglio: è il risultato di una sovrascrittura di memoria collettiva.

Se leggendo queste pagine avvertite un fastidioso bruciore di stomaco, riconoscete la vostra scrivania nella descrizione di un “Mausoleo Zombie” o vi sentite chiamati in causa dalle gesta del Sommelier della Fuffa, sappiate che il problema non è la mia cronaca, ma il vostro sistema operativo aziendale.

Questo libro è un’opera di satira basata su fatti talmente assurdi da sembrare inventati, ma che ogni ingegnere ha dovuto debuggare almeno una volta tra una call su Teams e un caffè imbevibile in un ufficio open-space.

Nessun recruiter è stato maltrattato durante la stesura di questo libro (sebbene la tentazione di lanciargli un’eccezione non gestita sia stata forte).

L’autore declina ogni responsabilità per eventuali dimissioni di massa, improvvisi desideri di trasferimenti esteri o allergie fulminanti ai post motivazionali sui social network che dovessero insorgere dopo la lettura.

**Procedete a vostro rischio e pericolo. I permessi di scrittura non sono inclusi.**