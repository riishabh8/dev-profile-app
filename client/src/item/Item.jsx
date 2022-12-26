import "./item.css";
import accLogo from "../assets/Icons _ Illustrations/account_circle-24px.svg";
import hyperlink from "../assets/Icons _ Illustrations/north_east-24px.svg";
export default function Item(props) {

  return (
    <div>
      <img src={props.img} alt="" className="accountLogo" />
      <p className="itemName">{props.id}</p>
      <img src={hyperlink} alt="" className="itemlink" />
    </div>
  );
}
