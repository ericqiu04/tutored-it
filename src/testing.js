import { annotate } from "rough-notation"

console.log("h")
  document.addEventListener('DOMContentLoaded', function() {
    console.log("workign?")
    //var a1 = document.getElementById('root').getElementsByClassName('randomName');
    //var a2 = annotate(a1[0], { type: 'circle', color: "yellow" })
    //a2.show();
    var brotha = document.getElementById('root').getElementsByClassName('randomName');
    console.log(brotha);
    console.log("HIIII");
    console.log(brotha.item(0));
  });