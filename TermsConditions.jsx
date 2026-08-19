function TermsConditions() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  const sections = [
    {
      title: "Website",
      body: [
        "• The website is governed by the laws of the United Arab Emirates, our country of domicile.",
        "• We take appropriate measures to ensure data privacy and security; however, healthykitchen.delivery cannot guarantee the security of any information disclosed online.",
        "• Customers using the website who are minors/under the age of 18 shall not register as users of the website and shall not transact on or use the website.",
      ],
    },
    {
      title: "Ordering",
      body: [
        "If you place an order through the site, you are responsible for ensuring the accuracy of your order and the correct delivery address. Terms and conditions apply.",
      ],
    },
    {
      title: "Payment",
      body: [
        "• If you make a payment for our products or services on our website, the details you submit will be provided directly to our payment provider via a secure connection.",
        "• When you register for a subscription plan, you agree that Healthy Kitchen or its third-party payment processor is authorized to charge you in advance for your subscription plan, plus any applicable taxes or other charges.",
        "• We accept payments online using Visa and MasterCard credit/debit cards in AED.",
        "• All credit/debit card details and personally identifiable information will NOT be stored, sold, shared, rented, or leased to any third parties.",
        "• Multiple transactions may result in multiple postings to the cardholder’s monthly statement.",
      ],
    },
    {
      title: "Delivery policy",
      body: [
        "• We deliver to Dubai free of charge.",
        "• You will be able to choose a time slot for your delivery once you create your address.",
        "• Orders placed before 1:00 PM will be delivered the next day. Orders placed after 1:00 PM will be delivered in two days.",
        "• We will deliver as per the agreed schedule. We reserve the right not to deliver outside our designated delivery times or areas. If we are unable to deliver due to an inaccurate address provided by you, we will not be responsible. If you request that your order be left at your door, we will have no further liability for loss, spoilage, or damage caused by others.",
        "• We need 48 hours’ notice to process any change of delivery address.",
        "• Proof of delivery receipt signed/confirmed by the registered customer is required.",
      ],
    },
    {
      title: "Cancellation",
      body: ["After the order is confirmed, the meal plan cannot be canceled."],
    },
    {
      title: "Refunds",
      body: [
        "After acceptance of the order by our manager, Healthy Kitchen has no obligation to refund any amount paid. In other cases, refunds will be done only through the original mode of payment and will be processed within 10 to 45 days, depending on the issuing bank of the credit card.",
      ],
    },
    {
      title: "Pausing",
      body: [
        "You can temporarily pause your plan if you are subscribed to our 1, 2, or 3-month plans. You are allowed up to 5 pauses per month, but please note that pause requests need to be made at least 48 working hours in advance to be effective. Otherwise, same-day or next-day pause requests may result in charges.",
      ],
    },
    {
      title: "Prices",
      body: [
        "All prices shown on the site are subject to change at any time without notice. The price available through the site reflects the current price and supersedes any and all prior prices for any plan. We may offer promotional pricing, incentive pricing, loyalty discounts, and other alternative pricing structures for some or all of our subscription plans at our discretion. We reserve the right to discontinue, modify, or extend such pricing without prior notice.",
      ],
    },
    {
      title: "Chiller bag",
      body: [
        "Healthy Kitchen charges a refundable deposit of AED 160 per cooler bag. After returning the chiller bag to the company, the deposit is refunded to the bank card from which the payment was made. Payment and will be processed within 10 – 14 days, depending on the issuing bank of the credit card.",
      ],
    },
  ];

  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "72px 32px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>
            Legal
          </span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.05, fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-strong)" }}>
            Terms &amp; Conditions
          </h1>
        </div>
        <p style={{ margin: "0 0 40px", fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "var(--text-body)" }}>
          By using this site, you agree to these terms and conditions of use. Healthy Kitchen may revise and update these terms and conditions anytime, without any prior notice. Review the terms and conditions periodically. These are posted on the website. Your continued usage of the healthykitchen.delivery website will mean that you accept the revisions.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {sections.map((s) => (
            <div key={s.title} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "24px", color: "var(--green-700)" }}>
                {s.title}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7, color: "var(--text-body)" }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.TermsConditions = TermsConditions;
