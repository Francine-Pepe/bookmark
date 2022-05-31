import './Buttons.css';

export default function MoreInfoButton () {

    const moreInfo = {
        text: "More Info"
    }

    return (
        <>
        <div className="button_content">
                <button className="button_chrome" style={{width: "10em"}}>
                  {moreInfo.text}
                </button>
              </div>
        </>

    );
}