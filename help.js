function Helper() {
    let name = prompt("Як вас звати?");

    if (name !== null && name !== "") {
        alert("Привіт, " + name + "! Готовий вам допомогти :)");

        let choice = confirm("Чи бажаєте ви дізнатися ще якусь цікаву інформацію?");
        if (choice) {
            alert("Ось декілька посилань:");
            let links = [
                "https://www.cntraveller.com/gallery/most-beautiful-places-in-the-world",
                "https://travel.usnews.com/rankings/worlds-best-vacations/",
                "https://www.lonelyplanet.com/best-in-travel"
            ];
            for (let i = 0; i < links.length; i++) {
                alert((i + 1) + ": " + links[i]);
            }
        } else {
            alert("Дякую за увагу. До побачення!");
        }
    } else {
        alert("Будь ласка, введіть ваше ім'я.");
    }
}

function SL() {
  if(confirm("Бажаєте перейти на сайт?")){
    location.href = "https://fortunatour.com.ua/ua/touristic-vocabulary";
  }
}
function N() {
  let el = document.querySelectorAll('ol > li:first-child');
  for (let elem of el){
    alert(elem.innerHTML + " + " + elem.outerHTML);
  }
}
