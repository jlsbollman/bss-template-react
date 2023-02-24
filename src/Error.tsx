import "./Error.css";

function Error() {
  return (
    <div className="error-body">
      <header className="error-header">
        <p>Whatever you want isn't here</p>
      </header>
      <div className="img-container">
        {/* <img
          src={`${"BaseUrl"}/images/frida-a.jpg`}
          alt="cat 404"
          className="img-404"
        /> */}
      </div>
        <header className="error-header">
          <p>
            <a href="/">return</a>
          </p>
        </header>
    </div>
  );
}

export default Error;

