let select = {
  'Iran': ["Dezful", "Ahvaz", "Tehran", "Tabriz", "Isfehan"],
  'USA': ["New York", "Tegzas", "Kalefornea", "Las Vegas"],
  "Iraq": ["Bagdad", "Arbel", "Basre", "Mosel", "Karbala"]
}

let selectElem1 = document.getElementById("contris")
let selectElem2 = document.getElementById("cites")

selectElem1.addEventListener("change", () => {
  let cites = Array()
  cites = select[selectElem1.value]
  selectElem2.innerHTML = ""
  cites.forEach((cite) => {
    selectElem2.innerHTML += "<option value=" + cite + ">" + cite + "</option>"
  })

})




