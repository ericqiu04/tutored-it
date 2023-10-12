import { annotate } from "rough-notation";

const Annotations = () => {
  
}
const a1 = annotate(document.querySelector("#title"), { type: "box", color: "yellow", paddingLeft: 5});
const a2 = annotate(document.querySelector("#subtitle"), { type: "underline", color: "yellow" });

a1.show();
a2.show();