import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>DeV</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <a
            href=""
            style={{
              marginRight: "80px",
              color: "#3E3E3E",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            About us
          </a>
          <a
            href=""
            style={{
              marginRight: "80px",
              color: "#3E3E3E",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Pricing
          </a>
          <a
            href=""
            style={{
              color: "#3E3E3E",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Documentation
          </a>
        </div>
        <button
          style={{
            padding: "8px 15px",
            background: "none",
            border: "none",
            borderRadius: "7px",
            backgroundColor: "#E1E1E1",
            cursor: "pointer",
          }}
        >
          Sign up
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          padding: "40px",
          borderRadius: "8px",
          marginTop: "100px",
        }}
      >
        <span
          style={{
            fontSize: "29px",
            fontWeight: "500",
            color: "#3E3E3E",
            alignSelf: "center",
          }}
        >
          Welcome Back!
        </span>

        <label
          htmlFor="username"
          style={{
            marginTop: "36px",
            marginBottom: "5px",
            fontSize: "18px",
            fontWeight: "normal",
          }}
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          style={{
            borderWidth: "1px",
            borderColor: "#D0DBE2",
            borderRadius: "8px",
            width: "450px",
            height: "50px",
          }}
        />

        <label
          htmlFor="password"
          style={{
            marginTop: "10px",
            marginBottom: "5px",
            fontSize: "18px",
            fontWeight: "normal",
          }}
        >
          Password
        </label>
        <input
          type="text"
          name="password"
          style={{
            borderWidth: "1px",
            borderColor: "#D0DBE2",
            borderRadius: "8px",
            width: "450px",
            height: "50px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <input
            type="checkbox"
            style={{
              borderWidth: "1px",
              borderColor: "#D0DBE2",
              borderRadius: "7px",
              marginRight: "10px",
              height: "24px",
              width: "24px",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: "normal",
            }}
          >
            Remember me
          </span>
          <div style={{ flexGrow: 1 }} />
          <span
            style={{
              color: "#3E3E3E",
              fontSize: "18px",
              fontWeight: "normal",
            }}
          >
            Forgot your password?
          </span>
        </div>

        <button
          style={{
            border: "none",
            borderRadius: "8px",
            marginTop: "30px",
            backgroundColor: "#035884",
            color: "white",
            padding: "20px",
          }}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
}

export default App;
