
var table_of_decks = "#decktable";

function getSum(total, num)
{
    return total + num;
}
function calculateManaCurve()
{
  // obtencion de variables
    var blueMana = parseInt(document.querySelector("#bluemana").value);
    var redMana = parseInt(document.querySelector("#redmana").value);
    var greenMana = parseInt(document.querySelector("#greenmana").value);
    var blackMana = parseInt(document.querySelector("#blackmana").value);
    var whiteMana = parseInt(document.querySelector("#whitemana").value);
    var lands = parseInt(document.querySelector("#lands").value);
    // calculo de pesos
    var weights = [blueMana,redMana,greenMana,blackMana,whiteMana];
    var sum = weights.reduce(getSum);
    blueMana= (blueMana/sum)*lands;
    redMana = (redMana/sum)*lands;
    blackMana = (blackMana/sum)*lands;
    whiteMana = (whiteMana/sum)*lands;
    greenMana = (greenMana/sum)*lands;
    return [blueMana,redMana,greenMana,blackMana,whiteMana,lands]
}


function insertDeck(data) {
    var table = document.querySelector(table_of_decks);
    var row = table.insertRow(table.querySelectorAll("tr").lenght);
    for (var i in data)
    {
      var cell = row.insertCell(i);
      cell.innerHTML = String(data[i]);
    }
}
