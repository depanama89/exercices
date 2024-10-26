// function returnCode(code) {
//   return code
//     .split("")
//     .map((letter) => (letter.charCodeAt(0) % 32) + 0x1f1e5)
//     .map((emojicode) => String.fromCodePoint(emojicode))
//     .join("");
// }
// console.log(returnCode("cd"));
document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#countries");
  const p = document.querySelector("#test");
  // const selectDrop =

  fetch("https://restcountries.com/v3.1/all ")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let outPut = "";
      let img = "";
      //   data.map((country) => {
      //     // console.log(country.ccn3);
      //     outPut += `<option>${country.name.common}</option>`;
      //   });
      data.forEach((country, index) => {
        outPut += `<option>${country.name.common} </option>`;
        img = `<img src="${data[200].flags.svg}" />`;
      });

      selectDrop.innerHTML = outPut;
      p.innerHTML = img;
    })
    .catch((err) => {
      console.log(err);
    });
});
