import { site } from "@/content/site";

export type LegalSection = {
  id: string;
  number: string;
  heading: string;
  intro?: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
};

export type LegalDocumentData = {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export const legalDocuments: {
  terms: LegalDocumentData;
  privacy: LegalDocumentData;
  refund: LegalDocumentData;
} = {
  terms: {
    eyebrow: "Legal",
    title: "Terms & Conditions",
    intro: "These Terms and Conditions govern your use of the FreeKit Media website and, alongside a separate client agreement, the provision of our digital marketing and creative services. They are intended to be clear, fair and easy to follow.",
    effectiveDate: "[TBD: effective date - DD/MM/YYYY]",
    sections: [
      {
        id: "introduction-and-acceptance-of-terms",
        number: "01",
        heading: "Introduction and acceptance of terms",
        paragraphs: [
          "These Terms and Conditions apply to anyone who accesses or uses the FreeKit Media website at https://freekitmedia.com (the Website) and to anyone who engages FreeKit Media for digital marketing, content or creative services described on or through the Website (the Services).",
          "By accessing or using the Website, submitting an enquiry through the contact form, or accepting a project proposal, you confirm that you have read and accept these Terms. If you use the Website on behalf of an organisation, you confirm that you have the authority to accept these Terms on its behalf.",
          "Website-use provisions in these Terms and the commercial terms in a client agreement are separate. For a specific project, the client agreement, including scope, fees, payment obligations, ownership and termination provisions, takes precedence and should be read together with these Terms.",
        ],
      },
      {
        id: "website-use-and-eligibility",
        number: "02",
        heading: "Website use and eligibility",
        paragraphs: [
          "You may use the Website for lawful purposes and in accordance with these Terms. You agree not to interfere with the operation of the Website, attempt to gain unauthorised access, scrape or copy content, or use the Website in any unlawful or harmful manner.",
          "You must be at least 18 years of age, or use the Website with the consent of your parent or legal guardian, to be eligible to use it.",
          "FreeKit Media may update, suspend or discontinue any part of the Website at any time, including before an enquiry response or project engagement is completed.",
        ],
      },
      {
        id: "description-of-agency-services",
        number: "03",
        heading: "Description of agency services",
        paragraphs: [
          "FreeKit Media is a digital marketing agency offering content creation and branding, Meta and Google advertising, website management and personal branding services.",
          "The service descriptions, case studies and proposals shown on the Website are indicative of the kind of work the Agency undertakes. They do not, by themselves, create a contract. A specific scope of work is set out in a proposal or client agreement.",
        ],
      },
      {
        id: "proposals-quotations-and-scope-of-work",
        number: "04",
        heading: "Proposals, quotations, and scope of work",
        paragraphs: [
          "Project proposals and quotations are prepared for specific engagements and are valid only as stated in the proposal. A proposal or quotation does not create a binding agreement until it is accepted in writing by the client.",
          "The scope of work, deliverables, exclusions, assumptions and out-of-scope items are documented in the proposal or a related statement of work. Changes to scope require a written change order or amendment.",
        ],
      },
      {
        id: "client-responsibilities-and-approvals",
        number: "05",
        heading: "Client responsibilities and approvals",
        paragraphs: [
          "The client is responsible for providing timely feedback, approvals, brand assets, content, access and decisions required for the Agency to deliver the project.",
        ],
        list: [
          "Providing brand guidelines, creative assets and content in usable condition.",
          "Reviewing deliverables and providing consolidated feedback within the review windows agreed in the proposal.",
          "Approving final deliverables and authorising additional work where required.",
        ],
        ordered: false,
      },
      {
        id: "payment-terms-and-applicable-taxes",
        number: "06",
        heading: "Payment terms and applicable taxes",
        paragraphs: [
          "The fees for a project are described in the applicable proposal or quotation. The specific payment terms, deposit requirements and tax treatment are set out in the proposal or client agreement: [TBD: payment terms, deposit and tax treatment].",
        ],
      },
      {
        id: "project-timelines-and-dependencies",
        number: "07",
        heading: "Project timelines and dependencies",
        paragraphs: [
          "Project timelines are estimates and may change due to scope, dependencies, client feedback cycles, approvals or third-party integrations.",
        ],
      },
      {
        id: "revisions-additional-work-and-scope-changes",
        number: "08",
        heading: "Revisions, additional work, and scope changes",
        paragraphs: [
          "The number of revision rounds included in a proposal is stated in that proposal: [TBD: included revisions]. Additional work beyond the agreed scope or further revisions require a change order and may affect fees and timelines.",
        ],
      },
      {
        id: "ownership-and-intellectual-property-rights",
        number: "09",
        heading: "Ownership and intellectual property rights",
        paragraphs: [
          "FreeKit Media retains ownership of pre-existing intellectual property, frameworks, templates and working methods used in delivery. Ownership and transfer of final deliverables are governed by the client agreement: [TBD: ownership terms].",
        ],
      },
      {
        id: "third-party-platforms-tools-and-advertising-services",
        number: "10",
        heading: "Third-party platforms, tools, and advertising services",
        list: [
          "Services rely on third-party platforms such as Meta, Google, Instagram, hosting providers and analytics or creative tools.",
          "FreeKit Media does not control third-party platforms and is not responsible for platform policies, availability or performance.",
          "Advertising budgets paid to third parties are separate from agency service fees and are subject to the terms of those platforms.",
        ],
        ordered: false,
      },
      {
        id: "confidentiality",
        number: "11",
        heading: "Confidentiality",
        paragraphs: [
          "The parties agree to keep confidential information disclosed during an engagement confidential and to use it only for the project. The detailed confidentiality obligations are set out in the client agreement: [TBD: confidentiality terms].",
        ],
      },
      {
        id: "service-limitations-and-disclaimers",
        number: "12",
        heading: "Service limitations and disclaimers",
        paragraphs: [
          "Services are delivered on existing platforms and through existing tools. FreeKit Media does not guarantee uninterrupted service or specific business results. Any limitation or disclaimer is subject to the client agreement and applicable law: [TBD: limitations].",
        ],
      },
      {
        id: "limitation-of-liability",
        number: "13",
        heading: "Limitation of liability, to the extent legally permitted",
        paragraphs: [
          "To the extent permitted by applicable law, the Agency liability for services is limited as set out in the client agreement: [TBD: liability cap or exclusions].",
        ],
      },
      {
        id: "suspension-or-termination-of-services",
        number: "14",
        heading: "Suspension or termination of services",
        paragraphs: [
          "Either party may suspend or terminate an engagement in accordance with the client agreement and these Terms. The consequences of suspension or termination are described in the client agreement: [TBD: termination terms].",
        ],
      },
      {
        id: "dispute-resolution-and-governing-law",
        number: "15",
        heading: "Dispute resolution and governing law",
        paragraphs: [
          "These Terms and any client agreement are governed by the laws of [TBD: governing jurisdiction]. The process for dispute resolution is set out in the client agreement: [TBD: dispute resolution terms].",
        ],
      },
      {
        id: "changes-to-these-terms",
        number: "16",
        heading: "Changes to these terms",
        paragraphs: [
          "These Terms may be updated from time to time. The effective date shown on this page applies to the version in use. Continued use of the Website or acceptance of a project proposal after an update constitutes acceptance of the updated Terms.",
        ],
      },
      {
        id: "contact-information",
        number: "17",
        heading: "Contact information",
        paragraphs: [
          "For any question about these Terms, contact us at hello@freekitmedia.com, by phone at +91 88398 01546, or through WhatsApp on the Website.",
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro: "This Privacy Policy explains how FreeKit Media handles personal information submitted through the contact and inquiry forms on the FreeKit Media website, together with limited technical information generated when the Website is used. It is intended to be transparent about what we collect, why we collect it, and how we handle it.",
    effectiveDate: "[TBD: effective date - DD/MM/YYYY]",
    sections: [
      {
        id: "information-submitted-through-contact-and-inquiry-forms",
        number: "01",
        heading: "Information submitted through contact and inquiry forms",
        paragraphs: [
          "When you submit the contact or free audit request form on the Website, we collect the following information: your name, mobile number, and the business type you select. A hidden honeypot field is used to filter automated or spam submissions.",
          "The information is collected only for the purpose of responding to your enquiry, preparing or managing your audit request, and following up about a possible engagement.",
          "This policy currently covers only the personal information collected for contact purposes. Where the Website later collects additional data, this policy will be updated.",
        ],
      },
      {
        id: "purposes-of-processing",
        number: "02",
        heading: "Purposes of processing",
        paragraphs: [
          "The personal information collected through the contact form is processed to respond to enquiries, coordinate free audit requests, communicate about services, and maintain records where an engagement proceeds.",
        ],
      },
      {
        id: "how-inquiry-data-is-stored-and-accessed",
        number: "03",
        heading: "How inquiry data is stored and accessed",
        paragraphs: [
          "Submitted enquiries are routed to the Agency through an email service provider. The Agency does not operate a public customer database. Access to enquiry data is limited to the team members responsible for responding to enquiries.",
          "Inquiry data is retained only for as long as necessary for the purposes described and the legitimate interests of the Agency, and is then deleted or anonymised according to the retention process: temporary hold and then deletion where no engagement continues. The retention period is: [TBD: retention period].",
        ],
      },
      {
        id: "technical-information-and-server-logs",
        number: "04",
        heading: "Technical information and server logs",
        paragraphs: [
          "Like most websites, the Website may generate technical and server logs, including IP address, browser user agent, timestamps and pages requested, for security and operational purposes.",
        ],
      },
      {
        id: "cookies-analytics-and-advertising-technologies",
        number: "05",
        heading: "Cookies, analytics, and advertising technologies",
        paragraphs: [
          "The Website currently does not load third party analytics or advertising cookies or tracking scripts. A browser storage preference is used for the optional sound setting. [TBD: confirm current cookie and tracking behaviour and update this section if anything changes].",
        ],
      },
      {
        id: "service-providers-and-third-party-integrations",
        number: "06",
        heading: "Service providers and third party integrations",
        paragraphs: [
          "Enquiry data may be processed through service providers such as an email delivery provider and the hosting provider. These providers are used only to operate and support the Website and the enquiry process.",
        ],
      },
      {
        id: "data-retention",
        number: "07",
        heading: "Data retention",
        paragraphs: [
          "Inquiry data is retained only as long as necessary for the purposes described and the legitimate interests of the Agency, and is then deleted or anonymised according to the retention process: temporary hold and then deletion where no engagement continues. The retention period is: [TBD: retention period].",
        ],
      },
      {
        id: "reasonable-security-practices",
        number: "08",
        heading: "Reasonable security practices",
        paragraphs: [
          "The Agency applies reasonable technical and organisational measures to protect personal information. No method of transmission or storage is completely secure, and the Agency cannot guarantee absolute security.",
        ],
      },
      {
        id: "data-sharing-and-disclosure",
        number: "09",
        heading: "Data sharing and disclosure",
        paragraphs: [
          "The Agency does not sell personal information. Personal information may be shared with service providers or disclosed where required by law or to protect rights.",
        ],
      },
      {
        id: "your-privacy-rights",
        number: "10",
        heading: "Your privacy rights and requests",
        paragraphs: [
          "Depending on applicable law, you may have rights to access, correct, delete or object to the processing of your personal information. To submit a request, write to the privacy contact at hello@freekitmedia.com with the subject Privacy request.",
        ],
      },
      {
        id: "international-transfers",
        number: "11",
        heading: "International transfers",
        paragraphs: [
          "Where personal information is transferred outside the country or region where you or the Agency are located, such transfers are subject to the safeguards described in the client agreement or policy: [TBD].",
        ],
      },
      {
        id: "childrens-privacy",
        number: "12",
        heading: "Childrens privacy",
        paragraphs: [
          "The Website is not directed at children and the Agency does not knowingly collect personal information from children. Details: [TBD].",
        ],
      },
      {
        id: "policy-updates",
        number: "13",
        heading: "Policy updates",
        paragraphs: [
          "This policy may be updated from time to time. The effective date shown on this page applies to the version in use.",
        ],
      },
      {
        id: "contact-information",
        number: "14",
        heading: "Contact information",
        paragraphs: [
          "For privacy related questions or requests, contact the privacy contact at hello@freekitmedia.com, by phone at +91 88398 01546, or through WhatsApp.",
        ],
      },
    ],
  },
  refund: {
    eyebrow: "Legal",
    title: "Refund and Cancellation Policy",
    intro: "This Refund and Cancellation Policy explains how refunds and cancellations apply to marketing and creative services delivered by FreeKit Media. It should be read together with the Terms and Conditions and the client agreement for each project.",
    effectiveDate: "[TBD: effective date - DD/MM/YYYY]",
    sections: [
      {
        id: "approval-of-proposals-and-project-scopes",
        number: "01",
        heading: "How clients approve proposals and project scopes",
        paragraphs: [
          "A project begins with a proposal or quotation that documents the scope of work, deliverables, timelines and fees. Client approval of that scope is required before the Agency commences delivery.",
        ],
      },
      {
        id: "advance-payments-and-project-commencement",
        number: "02",
        heading: "Advance payments and project commencement",
        paragraphs: [
          "An advance payment may be required to commence a project. Whether an advance is refundable, and how much, is determined by the proposal or client agreement and applicable law: [TBD].",
        ],
      },
      {
        id: "cancellation-requests",
        number: "03",
        heading: "Cancellation requests",
        paragraphs: [
          "Cancellation requests should be sent to the Agency using the contact details on the Website. The Agency will review the request against the project status and the client agreement.",
        ],
      },
      {
        id: "work-completed-before-cancellation",
        number: "04",
        heading: "Work completed before cancellation",
        paragraphs: [
          "Where work has already been delivered before a cancellation, the Agency may invoice for the work performed, and refunds for that work may be limited or declined according to the client agreement: [TBD].",
        ],
      },
      {
        id: "approved-expenses-and-non-recoverable-third-party-costs",
        number: "05",
        heading: "Approved expenses and non-recoverable third party costs",
        paragraphs: [
          "Approved advertising budgets and third party expenses are generally non recoverable once committed or spent. Agency fees for work performed are not refundable.",
        ],
      },
      {
        id: "refund-eligibility-for-undelivered-work",
        number: "06",
        heading: "Refund eligibility for undelivered work",
        paragraphs: [
          "Refund eligibility for undelivered work depends on the agreed proposal, the scope, the work completed, the client agreement and applicable law. Full or partial refunds are decided on a case by case basis: [TBD].",
        ],
      },
      {
        id: "deposits-and-treatment",
        number: "07",
        heading: "Deposits and their treatment",
        paragraphs: [
          "Deposit treatment and refund outcomes are set out in the client agreement and applicable law: [TBD].",
        ],
      },
      {
        id: "delays-caused-by-missing-client-materials",
        number: "08",
        heading: "Delays caused by missing client materials or approvals",
        paragraphs: [
          "Delays caused by missing client materials or pending approvals may affect delivery. Refund outcomes in such cases are assessed according to the client agreement and applicable law: [TBD].",
        ],
      },
      {
        id: "revision-rounds-and-additional-scope",
        number: "09",
        heading: "Revision rounds and additional scope",
        paragraphs: [
          "Revision rounds and additional scope are defined in the proposal. Additional scope may lead to a change order and separate fees. Refunds for additional scope are subject to the client agreement: [TBD].",
        ],
      },
      {
        id: "third-party-advertising-spend-and-platform-fees",
        number: "10",
        heading: "Third party advertising spend and platform fees",
        paragraphs: [
          "Advertising budgets paid to third parties such as Meta or Google are separate from agency service fees and are generally not refundable once committed. Platform fees and ad spend are subject to third party terms.",
        ],
      },
      {
        id: "advertising-performance-guarantees",
        number: "11",
        heading: "Advertising performance, leads, reach, and results",
        paragraphs: [
          "Advertising performance, leads, reach and other business results cannot be guaranteed. Refunds or credits are not provided for performance that falls short of expectations.",
        ],
      },
      {
        id: "refund-request-procedure",
        number: "12",
        heading: "Refund request procedure",
        paragraphs: [
          "To request a refund or cancellation related resolution, contact hello@freekitmedia.com or WhatsApp with the project name, dates and details of the request.",
        ],
      },
      {
        id: "expected-response-process",
        number: "13",
        heading: "Expected response process",
        paragraphs: [
          "The Agency aims to respond to refund and cancellation requests within [TBD: response period]. Responses are handled through the contact and dispute channels.",
        ],
      },
      {
        id: "dispute-handling-and-contact-information",
        number: "14",
        heading: "Dispute handling and contact information",
        paragraphs: [
          "Disputes are handled through the contact details on the Website. Governing law and dispute terms: [TBD: governing jurisdiction].",
        ],
      },
    ],
  },
};

export const legalConfig = {
  governingJurisdiction: "[TBD: governing jurisdiction - e.g. Chhattisgarh, India]",
  privacyContactEmail: site.email,
  refundContactEmail: site.email,
  enquiryRetentionPeriod: "[TBD: retention period for contact enquiries]",
} as const;