import "./widget.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SliderImage from "../slider-image/SliderImage";
const Widget = ({ name, totalNumber, percentage, sliderImage }) => {
  return (
    <div className="widget">
      <div className="left">
        <p className="name">{name}</p>
        <p className="number">{totalNumber}</p>
      </div>
      <div className="right">
        <MoreVertIcon className="iconVert" />
        {percentage ? (
          <div className="percentage">
            <ArrowUpwardIcon className="iconArrow" />
            <span>{percentage}%</span>
          </div>
        ) : (
          <SliderImage />
        )}
      </div>
    </div>
  );
};

export default Widget;
