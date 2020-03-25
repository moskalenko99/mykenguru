import _ from "lodash";

const dictionary = {
  home: "Зоотовары",
  catalog: "Каталог",
  cat: "Кошки"
};

export default key => dictionary[key] || _.upperFirst(key);
