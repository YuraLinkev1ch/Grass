import Inputmask from "inputmask";

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+375 (99) 999-99-99');
im.mask(selector);