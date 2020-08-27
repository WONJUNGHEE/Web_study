function modal(id) {
  var zIndex = 9999;
  var modal = document.getElementById(id);

  var div1 = document.createElement("div");
  div1.setStyle({
    position: "fixed",
    zIndex: zIndex,
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    overflow: "auto",
    background: "rgba(0,0,0,0.4)",
  });
  document.body.append(div1);

  modal.querySelector(".cancel").addEventListener("click", function () {
    div1.remove();
    modal.style.display = "none";
  });

  modal.setStyle({
    position: "fixed",
    display: "flex",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2), 0 6px 20px rbga(0,0,0,0.19)",
    zIndex: zIndex + 1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    msTransform: "translate(-50%,-50%)",
    webkitTransform: "translate(-50%,-50%)",
  });
}

Element.prototype.setStyle = function (styles) {
  for (var k in styles) this.style[k] = styles[k];
  return this;
};

document.getElementById("modal_button").addEventListener("click", function () {
  modal("modal1");
});
