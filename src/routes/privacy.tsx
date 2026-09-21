import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero, Prose } from "@/components/site/sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — AMMP Technologies B.V." },
    { name: "description", content: "How AMMP Technologies B.V. collects, uses and protects personal data across ammp.io and the AMMP platform." },
    { property: "og:title", content: "Privacy Policy — AMMP Technologies B.V." },
    { property: "og:description", content: "AMMP Technologies B.V.'s privacy policy, covering data collection, cookies, and your rights under the GDPR." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        highlight="Policy."
        intro="AMMP Technologies B.V. Privacy Policy."
      />

      <Band tone="white">
        <Prose>
          <h2>Introduction</h2>
          <p>At AMMP, data protection is a priority. We take the privacy of all users of AMMP very seriously. We process personal data only in accordance with the applicable data protection laws, including the General Data Protection Regulation (GDPR).</p>
          <p>This privacy policy applies to AMMP Technologies B.V. and personal data processed by us through the website ammp.io and associated websites, subdomains, and the AMMP platform.</p>

          <h2>Definitions</h2>
          <ul>
            <li><strong>Personal data:</strong> Any information relating to an identified or identifiable natural person.</li>
            <li><strong>Data subject:</strong> Any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing.</li>
            <li><strong>Processing:</strong> Any operation or set of operations which is performed on personal data, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</li>
            <li><strong>Restriction of processing:</strong> The marking of stored personal data with the aim of limiting their processing in the future.</li>
            <li><strong>Controller:</strong> The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data.</li>
            <li><strong>Processor:</strong> A natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller.</li>
            <li><strong>Recipient:</strong> A natural or legal person, public authority, agency or another body, to which the personal data are disclosed.</li>
            <li><strong>Third party:</strong> A natural or legal person, public authority, agency or body other than the data subject, controller, processor and persons who, under the direct authority of the controller or processor, are authorised to process personal data.</li>
            <li><strong>Consent:</strong> Any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.</li>
          </ul>

          <h2>Name and Address of the Controller</h2>
          <p>Controller for the purposes of the General Data Protection Regulation (GDPR):</p>
          <address className="not-italic">
            AMMP Technologies B.V.<br />
            Weesperstraat 61<br />
            1018 VN Amsterdam<br />
            The Netherlands<br />
            Email: info@ammp.io
          </address>

          <h2>Cookies</h2>
          <p>The AMMP websites use cookies. Cookies are text files that are stored in a computer system via an Internet browser. We use cookies to make our website more user-friendly, effective and secure. Some cookies may remain stored on your device until you delete them. They enable us to recognize your browser the next time you visit.</p>

          <h2>Collection of General Data and Information</h2>
          <p>Our websites collect general data and information when you visit. This includes browser type and version, operating system, referring website, sub-pages visited, date and time of access, IP address, and similar data. This information is used for delivering content correctly, optimizing our website, ensuring security of our systems, and for law enforcement purposes if necessary.</p>

          <h2>Contact and Newsletter</h2>
          <p>If you contact us via our website or sign up to our newsletter, we will collect personal data you provide (such as name, email address, company name). This data is processed to respond to your inquiry or provide you with our newsletter. We will not share this data with third parties without your consent.</p>

          <h2>Rights of the Data Subject</h2>
          <p>Under the GDPR, you have the following rights:</p>
          <ul>
            <li><strong>Right of confirmation:</strong> You have the right to obtain confirmation as to whether or not personal data concerning you is being processed.</li>
            <li><strong>Right of access:</strong> You have the right to obtain information about your personal data stored by us.</li>
            <li><strong>Right to rectification:</strong> You have the right to request correction of inaccurate personal data.</li>
            <li><strong>Right to erasure:</strong> You have the right to request deletion of your personal data under certain conditions.</li>
            <li><strong>Right to restriction of processing:</strong> You have the right to request restriction of processing under certain conditions.</li>
            <li><strong>Right to data portability:</strong> You have the right to receive your personal data in a structured, commonly used format.</li>
            <li><strong>Right to object:</strong> You have the right to object to processing of your personal data under certain conditions.</li>
            <li><strong>Right to withdraw consent:</strong> You have the right to withdraw your consent at any time.</li>
          </ul>

          <h2>Contact for Privacy Matters</h2>
          <p>If you have any questions about this privacy policy or wish to exercise your rights, please contact us at <a href="mailto:info@ammp.io" className="text-primary underline underline-offset-2 hover:text-primary/80">info@ammp.io</a>.</p>
        </Prose>
      </Band>
    </>
  );
}
