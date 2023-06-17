/* eslint-disable react/prop-types */
import Tour from "./Tour";

// eslint-disable-next-line react/prop-types
const Tours = ({ abc, removeTour }) => {
  return (
    <section>
      <div className="main_heading">
        <h1>Our Tours</h1>
        <hr className="heading_underline"></hr>
      </div>
      <div className="tours">
        {abc.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
