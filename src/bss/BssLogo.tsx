import "./BssLogo.scss";

function BssLogo() {
  return (
    <div className="bss-logo" id="bsslogo">
      <div className="logo">
        <div className="rectangle letter-b"></div>
        <div>
          <div className="circle backward letter-b"></div>
          <div className="circle bottom letter-b"></div>
        </div>
        <div>
          <div className="circle top middle-s"></div>
          <div className="circle bottom middle-s"></div>
        </div>
        <div>
          <div className="circle top last-s"></div>
          <div className="circle bottom last-s"></div>
        </div>
      </div>
    </div>
  );
}

export default BssLogo;
