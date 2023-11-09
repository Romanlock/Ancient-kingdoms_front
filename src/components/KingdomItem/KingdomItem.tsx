import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import { Api } from "../../utils/api/api";

interface Kingdom {
  ID: number,
  Name: string,
  Area: number,
  Capital: string,
  Image: string,
  Description: string;
  State: string;
}

interface Props {
  kingdoms: Kingdom[];
}

const KingdomItem: React.FC<Props> = ({kingdoms}) => {
  const api = new Api();

  console.log(kingdoms);

  const kingdomAboutFunc = () => {
    console.log('about');
  }

  const kingdomDeleteFunc = () => {
    // api.getKingdoms('All', '')
    //   .then((data) => {
    //     console.log(data);
    //   })
    // //console.log(a);
    console.log('delete');
  }

  return (
      <div className="feed-kingdoms">
        {kingdoms.map((kingdom, index) => (
          <div className={`feed-kingdom feed-kingdom__kingdom${index}`} key={index}>
            <div className="feed-kingdom__kingdom__title">
              <h2>{kingdom.Name}</h2>
            </div>
            <div className="feed-kingdom__kingdom__description">
              <p>{kingdom.Description}</p>
              </div>
            <div className="feed-kingdom__kingdom__img">
              <img src={kingdom.Image} alt={kingdom.Name} />
            </div>
            <div className="feed-kingdom__kingdom__btns">
              <div className="feed-kingdom__kingdom__about-btn btn-primary-defautl">
                <Link to="/kingdom">
                  <MyButton>Подробнее</MyButton>
                </Link>
              </div>
              <div className="feed-kingdom__kingdom__delete-btn btn-primary-default">
                <MyButton onClick={kingdomDeleteFunc}>Удалить</MyButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default KingdomItem;