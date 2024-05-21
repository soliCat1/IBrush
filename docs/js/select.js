const ddData = [
  {
      text: "JavaScript ниндзя",
      value: "JavaScript ниндзя",
      selected: false
  },
  {
      text: "Pragmatic Guide to JavaScript",
      value: "Pragmatic Guide to JavaScript",
      selected: false
  },
  {
      text: "Pro JavaScript Techniques",
      value: "Pro JavaScript Techniques",
      selected: false
  },
  {
      text: "Выразительный JavaScript",
      value: "Выразительный JavaScript",
      selected: false
  }
];

const select = document.querySelector('#select');
 
const initSelect = () => {
  if (select) {
    $(select).ddslick({
      data: ddData,
      selectText: "Выберите книгу",
    });
  }
};

export {initSelect}
