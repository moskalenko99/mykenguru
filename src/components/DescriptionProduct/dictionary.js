import _ from "lodash";

const dictionary = {
  manufacturer: "Производитель",
  taste: "Вкус",
  age: "Возраст",
  destination: "Назначение",
  country: "Страна"
};

export default key => dictionary[key] || _.upperFirst(key);
