import Link from "next/link";
import IconArrow from "./IconArrow";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  style?: React.CSSProperties;
  target?: React.HTMLAttributeAnchorTarget;
  ariaLabel?: string;
};

export default function SmartLink({ href, children, className = "btn", external, style, target, ariaLabel }: Props) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  const content = <><span>{children}</span><IconArrow /></>;
  const common = { className, style, "aria-label": ariaLabel } as const;

  if (isExternal) {
    return <a {...common} href={href} target={target ?? (href.startsWith("http") ? "_blank" : undefined)} rel={href.startsWith("http") ? "noreferrer" : undefined}>{content}</a>;
  }

  return <Link {...common} href={href}>{content}</Link>;
}
