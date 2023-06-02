const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // Definisci una stringa di lettere maiuscole

let interval = null;  // Inizializza una variabile per memorizzare l'ID dell'intervallo

document.querySelector("h1").onmouseover = event => {  // Assegna un gestore di eventi all'evento 'mouseover' del primo elemento 'h1'
  let iteration = 0;  // Inizializza la variabile di iterazione
  
  clearInterval(interval);  // Cancella eventuali intervalli precedentemente impostati
  
  interval = setInterval(() => {  // Imposta un nuovo intervallo che esegue la funzione di callback ripetutamente
    event.target.innerText = event.target.innerText  // Aggiorna il contenuto testuale dell'elemento 'h1'
      .split("")  // Suddivide il testo in un array di caratteri
      .map((letter, index) => {  // Mappa ogni carattere nell'array
        if(index < iteration) {  // Verifica se l'indice è inferiore all'iterazione corrente
          return event.target.dataset.value[index];  // Restituisci la lettera originale in quell'indice
        }
      
        return letters[Math.floor(Math.random() * 26)]  // Restituisci una lettera casuale selezionata
      })
      .join("");  // Unisci l'array modificato in una stringa per aggiornare il testo dell'elemento 'h1'
    
    if(iteration >= event.target.dataset.value.length){  // Verifica se l'animazione è completata
      clearInterval(interval);  // Cancella l'intervallo per interrompere l'animazione
    }
    
    iteration += 1 / 3;  // Incrementa l'iterazione di una frazione (1/3)
  }, 37);  // Imposta l'intervallo per eseguire ogni 37 millisecondi
}