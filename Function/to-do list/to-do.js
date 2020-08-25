document
  .getElementsByClassName("input_button")[0]
  .addEventListener("click", addList);
document
  .getElementsByClassName("del_total")[0]
  .addEventListener("click", deltotal);
document
  .getElementsByClassName("del_button")[0]
  .addEventListener("click", delCheck);

function addList() {
  var contents = document.querySelector(".input-to-do");
  if (!contents.value) {
    alert("내용을 입력해주세요");
    contents.focus();
    return false;
  }
  var tr = document.createElement("tr");
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "checkbox");

  var td_1 = document.createElement("td");
  td_1.appendChild(input);
  tr.appendChild(td_1);

  var td_2 = document.createElement("td");
  td_2.innerHTML = contents.value;
  tr.appendChild(td_2);

  document.getElementsByClassName("list-body")[0].appendChild(tr);
  contents.value = "";
  contents.focus();
}

function delCheck() {
  var body = document.getElementsByClassName("list-body")[0];
  var check = document.querySelectorAll(".checkbox");
  for (var i in check) {
    if (check[i].nodeType == 1 && check[i].checked == true) {
      body.removeChild(check[i].parentNode.parentNode);
    }
  }
}

function deltotal() {
  var list = document.getElementsByClassName("list-body")[0];
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
