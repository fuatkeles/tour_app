import "./main.scss"
import {data} from "../../helper/data.js";
import Card from "./Card.js";

const main = () => {
    console.log(data);
  return (
    <div className = "card-container">
        {data.map((item, index) => (
            <Card {...item} key={index}/>
        ))}
    </div>
  )
}

export default main