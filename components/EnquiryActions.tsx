import SmartLink from "./SmartLink";

export default function EnquiryActions({ label = "Enquire on WhatsApp" }: { label?: string }) {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_ENQUIRY_EMAIL;

  return (
    <div className="btn-row">
      {whatsapp ? (
        <SmartLink
          href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
          external
        >{label}</SmartLink>
      ) : (
        <span className="btn" role="status" aria-label="WhatsApp number is not configured">WhatsApp — number to be provided</span>
      )}
      {email ? (
        <SmartLink href={`mailto:${email}`} className="btn secondary">Send an Email</SmartLink>
      ) : (
        <span className="btn secondary" role="status">Email — address to be provided</span>
      )}
    </div>
  );
}
