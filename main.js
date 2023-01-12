let textarea = document.getElementById("text");
let filename = document.getElementById("filename");
let selectoption = document.getElementById("selected");
let btn = document.getElementById("saved");
btn.addEventListener("click", () => {
  const blop = new Blob([textarea.value], { type: selectoption.value });
  const url = URL.createObjectURL(blop);
  let link = document.createElement("a");
  link.download = filename.value;
  link.href = url;
  link.click();
});

selectoption.onchange = function () {
  let select = selectoption.options[selectoption.selectedIndex].text;
  select.split(" ")[0];
  btn.value = "Save As " + select;
};
