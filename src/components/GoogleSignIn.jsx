import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleSignIn() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.google && window.google.accounts?.id) {
      window.google.accounts.id.initialize({
        client_id: "149556294799-0nrvpvjuud49tre74fd8upqe64glv7bo.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });
    }
  }, []);

  async function handleCredentialResponse(credentialResponse) {
    try {
      setStatus("loading");
      setMessage("Signing you in...");
      const idToken = credentialResponse.credential;

      // Your backend API call here
      const response = await fetch("https://nzr7umplye.execute-api.eu-central-1.amazonaws.com/firstgoogletoken/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      if (!response.ok) throw new Error("Backend error: " + response.statusText);

      const result = await response.json();
      setUser(result.user);
      setStatus("success");
      setMessage("🎉 Login successful!");

      // Redirect to home after a short delay
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setStatus("error");
      setMessage("❌ Login failed. Please try again.");
    }
  }

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h2>Google OAuth Login</h2>
      {!user && (
        <div>
          <div id="signInDiv"></div>
          {status === "loading" && <p>⏳ {message}</p>}
          {status === "error" && <p style={{ color: "red" }}>{message}</p>}
        </div>
      )}
      {user && (
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ color: "green" }}>{message}</h3>
          <p>Welcome, <strong>{user.name}</strong></p>
          <p>Email: {user.email}</p>
          <button
            onClick={() => {
              setUser(null);
              setStatus("idle");
              setMessage("");
              window.google.accounts.id.prompt();
            }}
            style={{
              marginTop: "15px",
              padding: "8px 16px",
              borderRadius: "6px",
              backgroundColor: "#4285F4",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
