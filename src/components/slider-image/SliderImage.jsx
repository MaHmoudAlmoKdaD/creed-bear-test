import "./sliderImage.scss";

const SliderImage = () => {
  return (
    <div className="sliderImage">
      <img src="https://reqres.in/img/faces/7-image.jpg" alt="avatar" />
      <img
        className="ml"
        src="https://reqres.in/img/faces/8-image.jpg"
        alt="avatar"
      />
      <img
        className="ml"
        src="https://reqres.in/img/faces/9-image.jpg"
        alt="avatar"
      />
      <img
        className="ml"
        src="https://reqres.in/img/faces/10-image.jpg"
        alt="avatar"
      />
      <img
        className="ml"
        src="https://reqres.in/img/faces/11-image.jpg"
        alt="avatar"
      />
    </div>
  );
};

export default SliderImage;
