/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Buttons = ({ categorys, tmkc }) => {
  return (
    <div className="btn_container">
      {categorys.map((a, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              tmkc(a);
            }}
          >
            {a}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
