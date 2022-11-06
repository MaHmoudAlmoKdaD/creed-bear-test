import "./filtering.scss";
import CloseIcon from "@mui/icons-material/Close";
import SortIcon from "@mui/icons-material/Sort";
import SearchIcon from "@mui/icons-material/Search";
const Filtering = () => {
  return (
    <div className="filtering">
      <div className="buttonsFiltering">
        <button>
          <p>All Time</p> <CloseIcon className="buttonIcon"/>
        </button>
        <button>
          <p>USA, AU, +4</p> <CloseIcon className="buttonIcon"/>
        </button>
        <button>
          <SortIcon className="buttonIcon"/> <p>More Filter</p>
        </button>
      </div>
      <div className="inputSearch">
        <SearchIcon className="SearchIcon" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Filtering;
