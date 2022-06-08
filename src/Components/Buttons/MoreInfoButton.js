import Buttons from "./Buttons";

export default function MoreInfoButton(props) {
  const buttonStyle = {
    width: "10em",
  };

  const buttonTitle = {
    button: "More Info",
  };

  return (
    <>
      <div className="button_container">
        <Buttons title={buttonTitle.button} style={buttonStyle} />
      </div>
    </>
  );
}
