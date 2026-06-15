import { useState } from "react";
import { useCourse } from "../context/CourseContext";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const { enrollCourse } = useCourse();

  const courseId = localStorage.getItem("selectedCourseId");

  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setPaymentMethod("");
    setUpiId("");
    setCardName("");
    setCardNumber("");
    setExpiry("");
    setCvv("");
  };

  const handlePayment = async () => {
    setError("");

    if (!courseId) {
      setError("Course not selected");
      return;
    }

    if (!paymentMethod) {
      setError("Please select a payment method");
      return;
    }

    // UPI validation
    if (paymentMethod === "upi") {
      if (!upiId.includes("@") || upiId.length < 5) {
        setError("Enter a valid UPI ID");
        return;
      }
    }

    // Card validation
    if (paymentMethod === "credit" || paymentMethod === "debit") {
      if (!cardName.trim()) return setError("Enter card holder name");
      if (!/^\d{16}$/.test(cardNumber))
        return setError("Card number must be 16 digits");
      if (!/^\d{2}\/\d{2}$/.test(expiry))
        return setError("Expiry must be MM/YY");
      if (!/^\d{3}$/.test(cvv))
        return setError("CVV must be 3 digits");
    }

    setLoading(true);

    // Simulating real payment gateway delay
    setTimeout(() => {
      setLoading(false);

      enrollCourse(Number(courseId));

      alert("Payment Successful 🎉");

      resetForm();

      navigate(`/learn/${courseId}`);
    }, 2000);
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>Secure Checkout</h1>

        <p className="subtitle">
          Complete your payment to access the course
        </p>

        {error && <div className="error-box">⚠ {error}</div>}

        <h3>Choose Payment Method</h3>

        <div className="payment-methods">
          <button
            className={paymentMethod === "upi" ? "active" : ""}
            onClick={() => setPaymentMethod("upi")}
          >
            UPI
          </button>

          <button
            className={paymentMethod === "debit" ? "active" : ""}
            onClick={() => setPaymentMethod("debit")}
          >
            Debit Card
          </button>

          <button
            className={paymentMethod === "credit" ? "active" : ""}
            onClick={() => setPaymentMethod("credit")}
          >
            Credit Card
          </button>
        </div>

        {/* UPI */}
        {paymentMethod === "upi" && (
          <div className="payment-form">
            <input
              type="text"
              placeholder="name@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        )}

        {/* Card */}
        {(paymentMethod === "credit" ||
          paymentMethod === "debit") && (
          <div className="payment-form">
            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />

            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(e.target.value.replace(/\D/g, ""))
              }
            />

            <div className="row">
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />

              <input
                type="password"
                placeholder="CVV"
                maxLength="3"
                value={cvv}
                onChange={(e) =>
                  setCvv(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>
          </div>
        )}

        <button
          className="pay-btn"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing Payment..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

export default Payment;