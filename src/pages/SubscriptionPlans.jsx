import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubscriptionPlans.css";

function PricingPlans() {
  const navigate = useNavigate();

  const goToSubscribe = (plan) => {
    navigate(`/subscribe?plan=${plan}`);
  };

  return (
    <div className="plans-container">
      <h1>Choose Your Subscription Plan</h1>

      <div className="plans-grid">
        {/* ===== Free Plan ===== */}
        

        {/* ===== Monthly Plan ===== */}
        <div className="plan-card monthly">
          <h2>Monthly Plan</h2>
          <p className="price">₹94 / category / month</p>
          <ul>
            <li>✔ Full access to all selected categories</li>
            <li>✔ Offline downloads</li>
            <li>✔ Ad-free reading experience</li>
            <li>❌ No early access to new reports</li>
            <li>❌ No exclusive yearly analytics</li>
          </ul>
          <button
            onClick={() => goToSubscribe("monthly")}
            className="btn-monthly"
          >
            Subscribe Monthly
          </button>
        </div>

        {/* ===== Yearly Plan ===== */}
        <div className="plan-card yearly highlight">
          <div className="badge">🔥 Best Value</div>
          <h2>Yearly Plan</h2>
          <p className="price">₹442 / category / year</p>
          <ul>
            <li>✔ Unlimited category access</li>
            <li>✔ Offline downloads + Analytics</li>
            <li>✔ Ad-free + Priority updates</li>
            <li>✔ Early access to reports</li>
            <li>✔ 24×7 Priority Support</li>
          </ul>
          <button
            onClick={() => goToSubscribe("yearly")}
            className="btn-yearly"
          >
            Subscribe Yearly
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;