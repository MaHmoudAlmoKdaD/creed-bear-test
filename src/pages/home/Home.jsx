import "./home.scss";
import Filtering from "../../components/filtering/Filtering";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Header />
        <div className="widgets">
          <Widget
            name={"Total Customers"}
            totalNumber={"2,420"}
            percentage={20}
          />
          <Widget name={"Members"} totalNumber={"1,210"} percentage={15} />
          <Widget name={"Active Now"} totalNumber={316} sliderImage={true} />
        </div>
        <div className="filtering">
          <Filtering />
        </div>
        <div className="tableWrapper">
          <Table />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
