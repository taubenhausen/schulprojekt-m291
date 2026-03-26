    // ── 1) Elemente holen ──────────────────────────────────────────────
    //HTML-Elemente mit JS-Variablen über ihre IDs verknüpfen
    const submitButton = document.getElementById('submitButton');
    const firstName    = document.getElementById('firstName');
    const lastName     = document.getElementById('lastName');

    // ── 2) Button am Start deaktivieren ───────────────────────────────
    // Beim Laden der Seite ist der Button sofort disabled,
    // weil beide Felder noch leer sind.
    submitButton.disabled = true;

    // ── 3) Validierungsfunktion ────────────────────────────────────────
    // Diese Funktion prüft, ob beide Felder ausgefüllt sind.
    // .trim() entfernt Leerzeichen am Anfang/Ende: " " gilt als leer.
    function validateForm() {
      const firstOk = firstName.value.trim() !== '';
      const lastOk  = lastName.value.trim()  !== '';

      if (firstOk && lastOk) {
        // Beide Felder gefüllt: Button freischalten
        submitButton.disabled = false;
      } else {
        // Mindestens ein Feld leer: Button sperren
        submitButton.disabled = true;
      }
    }

    // ── 4) Event Listener ─────────────────────────────────────────────
    // 'input' feuert bei JEDER Tastatureingabe (auch Löschen).
    // validateForm() wird immer dann aufgerufen, wenn sich ein Feld ändert.
    firstName.addEventListener('input', validateForm);
    lastName.addEventListener('input',  validateForm);

    // ── 5) Submit-Handler ─────────────────────────────────────────────
    // Nach dem Klick auf "Absenden" wird eine Erfolgsmeldung angezeigt.
    submitButton.addEventListener('click', function () {
      const vn = firstName.value.trim();
      const nn = lastName.value.trim();
      alert(`Danke für die erfolgreiche Einreichung, ${vn} ${nn}!`);
    });
