import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  disabled?: undefined;
  onClick?: undefined;
  type?: undefined;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  external?: undefined;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent/90 active:bg-accent/85 shadow-sm",
  secondary:
    "border border-accent text-accent hover:bg-accent-soft active:bg-accent-soft/80",
  ghost: "text-accent hover:bg-accent-soft active:bg-accent-soft/80",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5 rounded-md",
  md: "px-6 py-2.5 text-base gap-2 rounded-md",
  lg: "px-8 py-3 text-lg gap-2.5 rounded-md",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center font-medium font-body transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    iconLeading,
    iconTrailing,
    className = "",
    children,
  } = props;

  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  const content = (
    <>
      {iconLeading}
      {children}
      {iconTrailing}
    </>
  );

  // Link variant
  if (props.href) {
    const { external, href } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  // Button variant
  const { disabled, onClick, type = "button" } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}