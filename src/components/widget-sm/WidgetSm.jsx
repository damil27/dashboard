import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
const WidgetSm = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmTitle">New Join members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/10083861/pexels-photo-10083861.jpeg?cs=srgb&dl=pexels-daniel-adeyelu-10083861.jpg&fm=jpg"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Obioma Bello</span>
            <span className="widgetSmRole">Software Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/7874966/pexels-photo-7874966.jpeg?cs=srgb&dl=pexels-anthony-chinweuba-7874966.jpg&fm=jpg"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Musa Funmilayo</span>
            <span className="widgetSmRole">Software Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/6109284/pexels-photo-6109284.jpeg?cs=srgb&dl=pexels-thirdman-6109284.jpg&fm=jpg"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Ikenna Agboola</span>
            <span className="widgetSmRole">Software Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3280901/pexels-photo-3280901.jpeg?cs=srgb&dl=pexels-muhammadtaha-ibrahim-ma%27aji-3280901.jpg&fm=jpg"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Titi Wasiu</span>
            <span className="widgetSmRole">Software Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/6109504/pexels-photo-6109504.jpeg?cs=srgb&dl=pexels-thirdman-6109504.jpg&fm=jpg"
            alt=""
            className="widgetSmImage"
          />
          <div className="widgetSmUser"> 
            <span className="widgetSmUserName">Ifeoma Ajakaiye</span>
            <span className="widgetSmRole">Software Engineer</span>
          </div>
          <button className="widgetSmBtn">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
