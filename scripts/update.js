function updateDeck(res)
{
   document.querySelector("#bluemana").value = res[0]
   document.querySelector("#redmana").value = res[1];
   document.querySelector("#greenmana").value = res[2];
   document.querySelector("#blackmana").value = res[3];
   document.querySelector("#whitemana").value = res[4];
   document.querySelector("#lands").value = res[5];

}

function getDeckValues()
{
    var deckNumber = parseInt(document.querySelector("#rownumber_update").value);
    var row = document.querySelector(table_of_decks).rows[deckNumber];
    res = []
    for (i = 0; i < row.cells.length; i++)
    {
      res.push(parseInt(row.cells[i].innerHTML));
    }
    return res;

}

function saveChanges()
{
  var deckNumber = parseInt(document.querySelector("#rownumber_update").value);
  // alert("1");
  document.querySelector(table_of_decks).deleteRow(deckNumber);
  var table = document.querySelector(table_of_decks);
  var row = table.insertRow(deckNumber);
  // alert("2");
  var data = calculateManaCurve();
  // alert("3");
  for (var i in data)
  {
    var cell = row.insertCell(i);
    cell.innerHTML = String(data[i]);
  }
}
