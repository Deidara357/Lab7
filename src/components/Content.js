import React from 'react';

// Content component as a class
class Content extends React.Component {
    constructor() {
      super();
      this.state = {
        element8Clicked: false,
        element9Clicked: false,
      };
    }
  
    changeColor = (elementId) => {
      this.setState((prevState) => ({
        element8Clicked: elementId === 'element8' ? !prevState.element8Clicked : prevState.element8Clicked,
        element9Clicked: elementId === 'element9' ? !prevState.element9Clicked : prevState.element9Clicked,
      }));
    };
  
    render() {
      const { element8Clicked, element9Clicked } = this.state;
  
      return (
        <div>
          <p>Хобі:</p>
          <ul>
            <li>Баскетбол</li>
            <li>Гра на гітарі</li>
            <li
              id="element8"
              className={`element ${element8Clicked ? 'clicked8' : 'clicked9'}`}
              onClick={() => this.changeColor('element8')}
            >
              Танці
            </li>
          </ul>
  
          <p
            id="element9"
            className={`element ${element9Clicked ? 'clicked9' : 'clicked8'}`}
            onClick={() => this.changeColor('element9')}
          >
            Улюблені книги:
          </p>
          <ol>
            <li> "Мандрівний замок Хаула" - Діана Вінн Джонс</li>
            <li> "Іліада" - Гомер</li>
            <li> "Ромео і Джульєтта" - Вільям Шекспір</li>
          </ol>
  
          <p>Манарола - це чарівне місто в Італії, розташоване на березі Лігурського моря.
          Воно славиться своєю живописною природою, вузенькими вуличками та чудовими видами на море.<br/>
          Жителі Манарола промишляють рибальством і виноробством. Місцеве вино сорту Sciacchetrà досить відоме, 
          ще римські писання відзначали високу якість вина, виробленого в цьому районі.</p>
          <p>В останні роки Манарола і сусідні міста стали популярним туристичним напрямком, особливо в літні місяці.<br/>
          Туристичних визначних пам'яток тут кілька: знаменита "Стежка Любові" (Via dell'Amore) в Ріомаджоре, 
          інші гірські стежки і виноградники над містом.
          </p>
        </div>
      );
    }
}

export default Content
