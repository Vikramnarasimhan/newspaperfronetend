import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "./SubscriptionForm.css";

function SubscriptionForm() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan"); // "free" | "monthly" | "yearly"
  const navigate = useNavigate();

  const categoriesList = [
    "Politics",
    "Sports",
    "Entertainment",
    "Finance",
    "Defence",
    "Regional",
    "Main Page"
    
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Pricing logic
  useEffect(() => {
    let price = 0;
    if (plan === "monthly") {
      price = selectedCategories.length * 99;
    } else if (plan === "yearly") {
      price = selectedCategories.length * 379;
    } else {
      price = 0; // Free Trial is always ₹0
    }
    setTotalPrice(price);
  }, [selectedCategories, plan]);

  // Handle category selection
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
      setSelectAll(false);
    } else {
      const updated = [...selectedCategories, category];
      setSelectedCategories(updated);
      if (updated.length === categoriesList.length) {
        setSelectAll(true);
      }
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCategories([]);
      setSelectAll(false);
    } else {
      setSelectedCategories(categoriesList);
      setSelectAll(true);
    }
  };

  // Handle form submit (now with toast)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Only show category validation for non-free plan
    if (plan !== "free" && selectedCategories.length === 0) {
      toast.warning("Please select at least one category 🧐");
      return;
    }

    if (plan === "free") {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 15);

      toast.success(
        `🎉 Free Trial Activated! Expires on ${expiryDate.toDateString()}`,
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    } else {
      toast.success(
        ` ${plan.toUpperCase()} Plan Subscribed! Total ₹${totalPrice}`,
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }

    // Navigate after short delay (so user can see toast)
    setTimeout(() => navigate("/"), 1800);
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <h1>Subscription</h1>
      <h3>
        Selected Plan: <span className="plan-type">{plan?.toUpperCase()}</span>
      </h3>

      <form onSubmit={handleSubmit} className="subscription-form">
        {/* ===== Category Section (Hide for Free plan) ===== */}
        {plan !== "free" && (
          <div className="category-section">
            <h3>Select Categories</h3>
            <div className="category-grid">
              {categoriesList.map((category) => (
                <label key={category} className="category-option">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </div>

            <label className="category-option select-all">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              Select All Categories
            </label>
          </div>
        )}

        <div className="price-box">
          {plan === "free" ? (
            <p className="free-note">Free Trial – ₹0 (No Payment Required)</p>
          ) : (
            <p>
              <strong>Total Price:</strong> ₹{totalPrice}
            </p>
          )}
        </div>

        <button type="submit" className="subscribe-btn">
          Confirm Subscription
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;
