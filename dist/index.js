'use strict';

var React = require('react');
var clsx = require('clsx');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return clsx.clsx(inputs);
}
var variantStyles = {
  primary: "bg-brand text-white hover:bg-brand-600 active:bg-brand-700 shadow-sm",
  secondary: "bg-surface-2 text-ink border border-surface-3 hover:bg-surface-3 active:bg-surface-3",
  ghost: "bg-transparent text-ink-secondary hover:bg-surface-2 active:bg-surface-3",
  danger: "bg-danger text-white hover:bg-red-600 active:bg-red-700 shadow-sm"
};
var sizeStyles = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded",
  md: "h-9 px-4 text-sm gap-2 rounded-md",
  lg: "h-11 px-6 text-sm gap-2.5 rounded-lg"
};
function Spinner({ className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      className: cn("animate-spin", className),
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          }
        )
      ]
    }
  );
}
var Button = React__default.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      variant = "primary",
      size = "md",
      loading = false,
      leadingIcon,
      trailingIcon,
      fullWidth = false,
      disabled,
      children,
      className
    } = _b, props = __objRest(_b, [
      "variant",
      "size",
      "loading",
      "leadingIcon",
      "trailingIcon",
      "fullWidth",
      "disabled",
      "children",
      "className"
    ]);
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      __spreadProps(__spreadValues({
        ref,
        disabled: isDisabled,
        "aria-busy": loading,
        className: cn(
          "inline-flex items-center justify-center font-sans font-medium",
          "transition-all duration-150 ease-in-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1",
          "disabled:opacity-50 disabled:pointer-events-none",
          "select-none whitespace-nowrap",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )
      }, props), {
        children: [
          loading ? /* @__PURE__ */ jsxRuntime.jsx(
            Spinner,
            {
              className: cn(size === "sm" ? "h-3 w-3" : size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5")
            }
          ) : leadingIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", "aria-hidden": "true", children: leadingIcon }),
          children && /* @__PURE__ */ jsxRuntime.jsx("span", { children }),
          !loading && trailingIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", "aria-hidden": "true", children: trailingIcon })
        ]
      })
    );
  }
);
Button.displayName = "Button";
var DEFAULT_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
var tokens = {
  dark: {
    nav: {
      base: "bg-transparent",
      scrolled: "bg-[#060912]/80 backdrop-blur-md border-b border-white/5"
    },
    logo: "text-[#6366f1]",
    logoAccent: "text-white/20",
    link: "text-[#64748b] hover:text-[#e2e8f0]",
    cta: "bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1] hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1]",
    menuToggle: "text-[#64748b] hover:text-[#e2e8f0]",
    mobileMenu: "bg-[#060912]/95 backdrop-blur-md border-t border-white/5",
    mobileLink: "text-[#64748b] hover:text-[#e2e8f0]",
    mobileCta: "bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1]"
  },
  light: {
    nav: {
      base: "bg-transparent",
      scrolled: "bg-[#f8f7f4]/90 backdrop-blur-md shadow-sm"
    },
    logo: "text-[#0f0f0f]",
    logoAccent: "text-[#5b50f0]",
    link: "text-[#6b7280] hover:bg-black/5 hover:text-[#0f0f0f]",
    cta: "[background:linear-gradient(135deg,#5b50f0,#7c3aed)] text-white shadow-lg shadow-[#5b50f0]/25 hover:shadow-[#5b50f0]/40 hover:scale-[1.03]",
    menuToggle: "text-[#6b7280] hover:text-[#0f0f0f]",
    mobileMenu: "bg-[#f8f7f4]/95 backdrop-blur-md border-t border-black/5",
    mobileLink: "text-[#6b7280] hover:text-[#0f0f0f]",
    mobileCta: "[background:linear-gradient(135deg,#5b50f0,#7c3aed)] text-white"
  }
};
function NavBar({
  theme = "light",
  logo = "Fariha",
  logoAccent = ".",
  links = DEFAULT_LINKS,
  ctaLabel = "Hire me",
  ctaHref = "#contact",
  scrollEffect = true,
  scrollThreshold = 50
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const t = tokens[theme];
  React.useEffect(() => {
    if (!scrollEffect) return;
    const handler = () => setScrolled(window.scrollY > scrollThreshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [scrollEffect, scrollThreshold]);
  const navPy = scrolled ? "py-3" : "py-5";
  const navBg = scrolled ? t.nav.scrolled : t.nav.base;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "nav",
    {
      role: "navigation",
      "aria-label": "Main navigation",
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${navPy} ${navBg}`,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntime.jsxs("a", { href: "#", className: `font-sans font-extrabold text-lg tracking-tight ${t.logo}`, children: [
            logo,
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: t.logoAccent, children: logoAccent })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "hidden md:flex items-center gap-1", role: "list", children: links.map((link) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(
            "a",
            {
              href: link.href,
              className: `font-sans font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${t.link}`,
              children: link.label
            }
          ) }, link.label)) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "a",
            {
              href: ctaHref,
              className: `hidden md:inline-flex items-center px-5 py-2.5 rounded-full font-sans font-bold text-sm transition-all duration-200 ${t.cta}`,
              children: ctaLabel
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              className: `md:hidden transition-colors ${t.menuToggle}`,
              onClick: () => setMenuOpen((prev) => !prev),
              "aria-expanded": menuOpen,
              "aria-label": menuOpen ? "Close menu" : "Open menu",
              children: /* @__PURE__ */ jsxRuntime.jsx(
                "svg",
                {
                  width: "22",
                  height: "22",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: menuOpen ? /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) : /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 12h18M3 6h18M3 18h18" })
                }
              )
            }
          )
        ] }),
        menuOpen && /* @__PURE__ */ jsxRuntime.jsx("div", { className: `md:hidden mt-3 ${t.mobileMenu}`, children: /* @__PURE__ */ jsxRuntime.jsxs("ul", { className: "max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4", role: "list", children: [
          links.map((link) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(
            "a",
            {
              href: link.href,
              onClick: () => setMenuOpen(false),
              className: `font-sans font-medium text-base transition-colors ${t.mobileLink}`,
              children: link.label
            }
          ) }, link.label)),
          /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsx(
            "a",
            {
              href: ctaHref,
              onClick: () => setMenuOpen(false),
              className: `inline-block px-5 py-2.5 rounded-full font-sans font-bold text-sm ${t.mobileCta}`,
              children: ctaLabel
            }
          ) })
        ] }) })
      ]
    }
  );
}

exports.Button = Button;
exports.NavBar = NavBar;
exports.cn = cn;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map