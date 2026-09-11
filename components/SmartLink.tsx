import IconArrow from "./IconArrow";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  style?: React.CSSProperties;
  target?: React.HTMLAttributeAnchorTarget;
};

export default function SmartLink({ href, children, className = "btn", external, style, target }: Props) {
  return (
    <a
      className={className}
      href={href}
      style={style}
      target={target ?? (external ? "_blank" : undefined)}
      rel={external || target === "_blank" ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <IconArrow />
    </a>
  );
}
