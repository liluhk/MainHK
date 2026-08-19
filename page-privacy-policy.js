const { SectionHeading } = window.HealthyKitchenDesignSystem_f4c763;

const HK_PRIVACY_SECTIONS = [
  {
    title: "Copyright",
    body: [
      "The website and the mobile app are made available for information purposes only.",
      "You may display, reformat and print information from the website for your own personal, non-commercial use only.You may not sell, re-publish, distribute or display any content or other material from the website for any other purpose. All such uses are strictly prohibited without our express prior written consent, and such consent may be given or withheld in our discretion. You agree that you will not in any way modify, move, add to, delete from or tamper with any content or feature of the website or interfere with its proper functioning. We reserve the right to suspend or terminate access to the website by anyone who violates these Terms of Use or any applicable law or whose conduct is harmful to the interests of HealthyKitchen. We may take steps to prohibit access and/or use without prior notice to any such user.",
    ],
  },
  {
    title: "Restriction of liability",
    body: [
      "Healthy kitchen shall not be liable for any loss whether direct, indirect, incidental or consequential, arising out of access to, use of, or reliance upon any of the content on this website or sites to which this website is linked regardless of whether such content is accurate or complete and Healthy Kitchen will not pay any damages whether for loss or injury, punitive or otherwise because of any such access to, use of, or reliance upon any of the content on this website or sites to which this website is linked.",
    ],
  },
  {
    title: "Disclamer",
    body: [
      "The material in this site could include technical inaccuracies or typographical errors. Healthy Kitchen may make changes or improvements at any time. THE MATERIALS IN THIS SITE ARE PROVIDED “AS IS” AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESSED OR IMPLIED, TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW. KCAL HEALTHY FAST FOOD DISCLAIMS ALL WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Healthy Kitchen DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE MATERIAL WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. Healthy Kitchen DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OF OR THE RESULT OF THE USE OF THE MATERIAL IN THIS SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. YOU (AND NOT Healthy Kitchen ) ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. THE ABOVE EXCLUSION MAY NOT APPLY TO YOU, TO THE EXTENT THAT APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES.",
      "This website contains downloadable materials as well as links to external sites. Healthy Kitchen is not responsible for, and has no control over, the content of such downloadable materials or external sites. You understand that Healthy Kitchen cannot and does not guarantee or warrant that files or software of any kind, or from any source, available for downloading through this website, will be free of infection or viruses, worms, Trojan Horses or other code or defects that manifest contaminating or destructive properties.",
    ],
  },
  {
    title: "Submissions",
    body: [
      "All remarks, suggestions, ideas, graphics, or other information communicated to Healthy Kitchen through this site (together, the “Submission”) will forever be the property of Healthy Kitchen and may be used by Healthy Kitchen without any limitation and/or payment. Healthy Kitchen will not be required to treat any Submission as confidential. Without limitation, Healthy Kitchen will have exclusive ownership of all present and future existing rights to any Submission of every kind and nature and will be entitled to use the Submission for any commercial or other purpose whatsoever without compensation to you or any other person sending the Submission. Personally identifiable information that may be received at this site is provided voluntarily by a visitor to this site.",
    ],
  },
];

function PrivacyPolicy() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "72px 32px 100px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>
            Legal
          </span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.05, fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-strong)" }}>
            Privacy policy
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {HK_PRIVACY_SECTIONS.map((s) => (
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

window.PrivacyPolicy = PrivacyPolicy;
