$(function() {
    var availableTags = [
      "Canadian Tire",
      "Home Depot",
      "Ikea",
      "Loblaws",
      "Longo's",
      "Metro",
      "No Frills",
      "T&T",
      "Wal-Mart",
    ];
    $("#tags").autocomplete({
      source: availableTags,
      position: {
              offset: '10 8' // Shift 20px to the left, 4px down.
          }
    });
  });