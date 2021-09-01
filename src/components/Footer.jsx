import "../style/style.css";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "rgba(0, 0, 0, 0.445)", marginTop: "2rem" }}
    >
      <div className="container">
        <div className="social">
          <i
            className="fa fa-facebook-f icon"
            style={{ fontSize: "1.5rem", color: "rgba(245, 245, 245, 0.431)" }}
          ></i>
          <i
            className="fa fa-instagram"
            style={{ fontSize: "1.5rem", color: "rgba(245, 245, 245, 0.431)" }}
          ></i>
          <i
            className="fa fa-twitter icon"
            style={{ fontSize: "1.5rem", color: "rgba(245, 245, 245, 0.431)" }}
          ></i>
          <i
            className="fa fa-youtube-square icon"
            style={{ fontSize: "1.5rem", color: "rgba(245, 245, 245, 0.431)" }}
          ></i>
        </div>
        <div className="row">
          <div className="col">
            <p
              style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.795)" }}
            >
              audio and subscribe
            </p>
            <p style={{ fontSize: "12px", color: "white" }}>Media center</p>
            <p style={{ fontSize: "12px", color: "white" }}>privacy</p>
            <p style={{ fontSize: "12px", color: "white" }}>contact us</p>
            <button
              type="button"
              style={{
                padding: "4px",
                backgroundColor: "rgba(63, 58, 58, 0.123)",
                color: "rgba(246, 244, 240, 0.247)",
                opacity: "0.7",
              }}
            >
              Service code
            </button>
          </div>
          <div className="col">
            <p style={{ fontSize: "12px", color: "white" }}>
              audio description
            </p>
            <p style={{ fontSize: "12px", color: "white" }}>
              investor relations
            </p>
            <p style={{ fontSize: "12px", color: "white" }}>legal notices</p>
          </div>
          <div className="col">
            <p style={{ fontSize: "12px", color: "white" }}>help center</p>
            <p style={{ fontSize: "12px", color: "white" }}>jobs</p>
          </div>
          <div className="col">
            <p style={{ fontSize: "12px", color: "white" }}>gift card</p>
            <p style={{ fontSize: "12px", color: "white" }}>Terms use</p>
            <p style={{ fontSize: "12px", color: "white" }}>
              corporate information
            </p>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "12px", color: "white", textAlign: "center" }}>
        &copy; all rights resreved by netflix 2021 /4184128818
      </p>
    </footer>
  );
};

export default Footer;
