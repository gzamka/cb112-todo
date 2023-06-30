// element uud barij awah
const $input = document.getElementById("input");
const $btn = document.getElementById("btn");
const $ol = document.getElementById("ol");

let list = [];

// жагсаалт хадгалах array үүсгэх, array -ийн элементийг loop ашиглан зурах
// input -ээс орж ирсэн утгыг хадгалж аван жагсаалт array -руу нэмэх

function draw(params) {
  $ol.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    // Шинээр элементүүд үүсгэх
    let li = document.createElement("li");
    let listContainer = document.createElement("div");
    let checkbox = document.createElement("input");
    let del = document.createElement("button");

    // check хийгдэх үед текстийг дарна.
    checkbox.addEventListener("click", check);

    function check(event) {
      if (event.target.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
      for (let i = 0; i < $checkbox.length; i++) {
        console.log($checkbox[i].checked);
      }
    }

    // delete хийх
    del.addEventListener("click", delet);
    function delet() {
      let newA = [];
      for (let i = 0; i < list.length; i++) {
        if (li.innerText !== list[i]) {
          newA.push(list[i]);
          console.log(newA);
        }
      }
      list = newA;
      draw();
    }

    // add class, content
    del.innerText = "Delete";
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    listContainer.classList.add("listContainer");
    li.classList.add("list");
    li.innerHTML = list[i];

    // үүсгэсэн элементүүдийг нэмэх
    listContainer.append(checkbox);
    listContainer.append(li);
    listContainer.append(del);

    $ol.append(listContainer);
  }
  const $checkbox = document.getElementsByClassName("checkbox");
}
draw();

// 1. add function бичих /input -ийн утгыг хадгалж авах, input -ийн утгыг DOM -руу нэмэх /

function add() {
  // input -с утгыг авч х -д хадгалах
  let x = $input.value;

  list.push(x);

  // шинээр таг үүсгэх list хувьсагчид хадгалах
  // let list = document.createElement("li");

  //li таг -ийн доторх текстийг input ийн утгаар солих
  // list.innerHTML = x;

  // үүсгэсэн li тагийг ol буюу жагсаалт руу нэмэх
  // $ol.append(list);

  //input -ийн утгыг хоослох
  $input.value = "";
  draw();
}
