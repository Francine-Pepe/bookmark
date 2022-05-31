export default function Buttons(props) {
  const { title } = props;
  const { style } = props;

  return (
    <>
      <div className="button_content" style={style}>
        <button className="button_chrome" >{title}</button>
      </div>
    </>
  );
}
