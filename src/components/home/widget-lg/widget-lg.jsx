import "./widgetLg.css";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLgTitle"> Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">  
            <img
              className="widgetLgImage"
              src="https://images.pexels.com/photos/7302940/pexels-photo-7302940.jpeg?cs=srgb&dl=pexels-norma-mortenson-7302940.jpg&fm=jpg"
              alt=""
              srcset=""
            />
            <span className="widgetLgName">Norma Jason</span>
          </td>
          <td className="widgetLgDate"> 8 Dec 2021</td>
          <td className="widgetLgAmount"> $1222</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImage"
              src="https://images.pexels.com/photos/10396554/pexels-photo-10396554.jpeg?cs=srgb&dl=pexels-raheem-oluwadamilare-10396554.jpg&fm=jpg"
              alt=""
              srcset=""
            />
            <span className="widgetLgName">Raheem Damilare</span>
          </td>
          <td className="widgetLgDate"> 8 Dec 2021</td>
          <td className="widgetLgAmount"> $1222</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImage"
              src="https://images.pexels.com/photos/3484296/pexels-photo-3484296.jpeg?cs=srgb&dl=pexels-michael-adeleye-3484296.jpg&fm=jpg"
              alt=""
              srcset=""
            />
            <span className="widgetLgName">Micheal Adeleye</span>
          </td>
          <td className="widgetLgDate"> 8 Dec 2021</td>
          <td className="widgetLgAmount"> $1222</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImage"
              src="https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?cs=srgb&dl=pexels-vazhnik-7562139.jpg&fm=jpg"
              alt=""
              srcset=""
            />
            <span className="widgetLgName">Ojeh Bikwa</span>
          </td>
          <td className="widgetLgDate"> 8 Dec 2021</td>
          <td className="widgetLgAmount"> $1222</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
