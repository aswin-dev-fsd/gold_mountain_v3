import SmartLink from "./SmartLink";

export default function EnquiryActions({ label = "WhatsApp Us" }: { label?: string }) {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_ENQUIRY_EMAIL;
  const phone = process.env.NEXT_PUBLIC_PHONE;
  const cleanPhone = phone?.replace(/[^+\d]/g, "");

  return (
    <div className="btn-row">
      {whatsapp ? (
        <SmartLink href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} external>{label}</SmartLink>
      ) : (
        <span className="btn btn-disabled" role="status">WhatsApp number to be provided</span>
      )}
      {email ? (
        <SmartLink href={`mailto:${email}`} className="btn secondary">Send an Enquiry</SmartLink>
      ) : (
        <span className="btn secondary btn-disabled" role="status">Email address to be provided</span>
      )}
      {cleanPhone ? <SmartLink href={`tel:${cleanPhone}`} className="btn ghost">Call us</SmartLink> : null}
    </div>
  );
}
