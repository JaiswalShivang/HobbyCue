import React, { useState } from "react";
import GroupImage from "../assets/Group.png";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Sign In");
  return (
    <section
      style={{
        backgroundColor: "#F7F5F9",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        padding: "20px 0"
      }}
    >
      <div className="container-fluid px-3 px-sm-4">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <h1
              className="mb-3"
              style={{
                fontFamily: "Poppins",
                fontSize: "clamp(24px, 6vw, 40px)",
                fontWeight: "700",
                fontStyle: "italic",
                lineHeight: "1.5",
              }}
            >
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
              <span style={{ color: "#8064A2" }}>passion</span>
            </h1>
            <p
              className="mb-2"
              style={{
                fontFamily: "Poppins",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                fontWeight: "400",
                lineHeight: "1.7",
                color: "#000000",
              }}
            >
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p
              className="mb-4"
              style={{
                fontFamily: "Poppins",
                fontSize: "clamp(12px, 2.5vw, 14px)",
                fontWeight: "400",
                lineHeight: "1.7",
                color: "#000000",
              }}
            >
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <div className="d-none d-lg-block">
              <img
                src={GroupImage}
                alt="People with hobbies"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div
              style={{
                padding: "clamp(20px, 4vw, 40px)",
              }}
            >
              <div className="d-flex gap-3 gap-sm-5 align-items-center mb-4">
                <div
                  style={{ position: "relative", cursor: "pointer", flex: 1 }}
                  onClick={() => setActiveTab("Sign In")}
                >
                  <h3
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "clamp(18px, 4vw, 24px)",
                      fontWeight: "600",
                      color: activeTab === "Sign In" ? "#8064A2" : "#939CA3",
                      marginBottom: "8px",
                      textAlign: "center"
                    }}
                  >
                    Sign In
                  </h3>
                  {activeTab === "Sign In" && (
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "#8064A2",
                        borderRadius: "2px",
                      }}
                    ></div>
                  )}
                </div>
                <div
                  style={{ position: "relative", cursor: "pointer", flex: 1 }}
                  onClick={() => setActiveTab("Join In")}
                >
                  <h3
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "clamp(18px, 4vw, 24px)",
                      fontWeight: "600",
                      color: activeTab === "Join In" ? "#8064A2" : "#939CA3",
                      marginBottom: "8px",
                      textAlign: "center"
                    }}
                  >
                    Join In
                  </h3>
                  {activeTab === "Join In" && (
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "#8064A2",
                        borderRadius: "2px",
                      }}
                    ></div>
                  )}
                </div>
              </div>

              <div
                className="btn btn-light w-100 mb-3 d-flex align-items-center justify-content-center position-relative"
                style={{
                  border: "1px solid #000000",
                  borderRadius: "8px",
                  padding: "12px",
                  fontFamily: "Poppins",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                  fontWeight: "500",
                }}
              >
                <img src={google} alt="Google" style={{ position: "absolute", left: "12px", width: "16px", height: "16px" }} />
                <span>Continue with Google</span>
              </div>
              <div
                className="btn btn-light w-100 mb-3 d-flex align-items-center justify-content-center position-relative"
                style={{
                  border: "1px solid #000000",
                  borderRadius: "8px",
                  padding: "12px",
                  fontFamily: "Poppins",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                  fontWeight: "500",
                }}
              >
                <img src={facebook} alt="Facebook" style={{ position: "absolute", left: "12px", width: "16px", height: "16px" }} />
                <span>Continue with Facebook</span>
              </div>

              <div className="position-relative text-center my-4">
                <hr style={{ borderTop: "1px solid #000" }} />
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#FFFFFF",
                    padding: "0 10px",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "600",
                  }}
                >
                  Or connect with
                </span>
              </div>

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                style={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  padding: "12px",
                  fontFamily: "Poppins",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                }}
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                style={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  padding: "12px",
                  fontFamily: "Poppins",
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                }}
              />
              {activeTab === "Sign In" ? (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        style={{ borderColor: "#000" }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberMe"
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "12px",
                          color: "#000",
                        }}
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        color: "#000",
                      }}
                    >
                      <i className="bi bi-lock me-1"></i>
                      Forgot password?
                    </a>
                  </div>
                  <button
                    className="btn w-100"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#000",
                      borderRadius: "8px",
                      padding: "12px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "600",
                      border: "1px solid #000000",
                    }}
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      color: "#6D747A",
                      marginBottom: "15px",
                      textAlign: "left",
                    }}
                  >
                    By continuing, you agree to our{" "}
                    <a
                      href="#"
                      style={{
                        color: "#000",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      style={{
                        color: "#000",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <button
                    className="btn w-100"
                    style={{
                      backgroundColor: "#8064A2",
                      color: "#FFFFFF",
                      borderRadius: "8px",
                      padding: "12px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "600",
                      border: "none",
                    }}
                  >
                    Agree and Continue
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
