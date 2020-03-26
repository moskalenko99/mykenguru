import React from "react";
import dictionary from "./dictionary";

import "./styles.scss";

class DescriptionProduct extends React.Component {
  render = () => {
    const { data } = this.props;
    var titles = [];
    return (
      <div className="product_tabs_description">
        <div className="product_tabs_description_info col-md-4">
          <div className="row">
            {_.map(data, (item, index) => {
              titles.push(index);
              var title = dictionary(
                titles[_.size(titles) - 1] || "manufacturer"
              );

              return (
                <React.Fragment>
                  <div className="product_tabs_description_info_item col-md-12">
                    <div>{title}</div>
                    <div>{item}</div>
                  </div>
                  <span className="item__dots product_tabs_description_info_item_dots" />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="product_tabs_description_text col-md-8">
          <p>
            Когда мы решили создать этот интернет-магазин товаров для животных,
            мы хотели лишь одного: сделать современный и удобный сервис, а не
            просто очередной сайт зоотоваров.
          </p>
          <p>
            Мы в Барбосу.ру заботимся обо всех: шерстяных, пернатых, пушистых и
            не очень и работаем для того, чтобы им и Вам жилось комфортно. Мы
            постарались представить максимально разнообразный каталог
            зоотоваров: от любых кормов для собак и кошек до обогревателей и
            систем аэрации для аквариумов и не собираемся этим ограничиваться.
          </p>
          <p>
            Любовь к животным и качественному сервису – то, что вдохновляет нас
            в нашей работе. Именно ее мы хотим разделять с Вами и сделать
            эталоном для всех зоомагазинов.
          </p>
          <p>
            Ведь согласитесь, наши питомцы – по сути, наши дети, и заслуживают
            они самого лучшего.
          </p>
        </div>
      </div>
    );
  };
}

export default DescriptionProduct;
