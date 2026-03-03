import reactIcon from "../assets/react.svg";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import nodeIcon from "../assets/node.png";
import databaseIcon from "../assets/database.png";

export default function Skills({ data }) {
  const iconmap = {
    react: reactIcon,
    html: htmlIcon,
    css: cssIcon,
    js: jsIcon,
    node: nodeIcon,
    database: databaseIcon,
  }; //from backend "icon":"react" is a string React cannot resolve local imports from strings coming from backend.

  //other way create one folder /public in that store images then insert "icon": "/icons/react.svg" in frontend we can item.icon itself
  return (
    <>
      <div className="font-thin bg-[#171A42] text-white md:p-10 p-5">
        <h1 className="text-white font-bold mb-5">Skills</h1>
        <div className="md:flex justify-between md:text-[15px] flex text-xs gap-5">
          {data?.skills.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:gap-5 justify-center items-center mb-5 shadow-xl"
              >
                <img src={iconmap[item?.icon?.toLowerCase()] || htmlIcon} alt={item?.name} className="w-8" />
                <p>{item?.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
