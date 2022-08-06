import { theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const Button = {
  ...base.components.Button,
  // 1. Update the base styles
  baseStyle: {
    fontWeight: "medium", // Normally, it's "semibold"
    _hover: { scale: "1.05", bg: "background.50" },
  },
  // 2. Add a new button size or extend existing
  sizes: {},
  // 3. Add a new visual variant
  variants: {
    primary: {
      color: "white",
      bg: "primary.400",
      _hover: { bg: "primary.500" },
    },
    barcelona: {
      height: "50px",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      background: "rgb(53, 75, 55) none repeat scroll 0% 0%",
      fontFamily: "NeuePixelGrotesk",
      fontWeight: "700",
      _hover: {
        transition: "all 0s",
        transform: "rotate(-6.41deg)",
        color: "white",
        scale: "1",
      },
      transform: "rotate(6.41deg)",
      width: "122px",
    },
    ethLatamPurple: {
      color: "#E573E5",
      justifyContent: "center",
      borderRadius: 0,
      alignItems: "center",
      background: "#1A1A1A",
      fontWeight: 400,
      fontFamily: "NeuePixelGrotesk",
      border: "1.79753px solid #E573E5",
      boxShadow: "-4.49382px 4.49382px 0px #E573E5",
      _hover: {
        transition: "all 0s",
        color: "#E573E5",
        scale: "1",
        background: "#282828",
      },
    },
    ethLatamBlack: {
      height: "50px",
      color: "#80FF9F",
      justifyContent: "center",
      padding: "0 36px",
      borderRadius: 0,
      alignItems: "center",
      background: "#0B0C0D",
      fontWeight: 400,
      fontFamily: "NeuePixelGrotesk",
      border: "1.79753px solid #80FF9F",
      boxShadow: "-4.49382px 4.49382px 0px #80FF9F",
      _hover: {
        transition: "all 0s",
        color: "#80FF9F",
        scale: "1",
        background: "#282828",
      },
      _focus: {
        transition: "all 0s",
        color: "#80FF9F",
        scale: "1",
        background: "#3D3D3D",
      },
    },
    ethLatamWhite: {
      height: "50px",
      color: "#FAF7F5",
      justifyContent: "center",
      padding: "0 36px",
      borderRadius: 0,
      alignItems: "center",
      background: "#1A1A1A",
      fontWeight: 400,
      fontFamily: "NeuePixelGrotesk",
      border: "1.79753px solid #FAF7F5",
      boxShadow: "-4.49382px 4.49382px 0px #FAF7F5",
      _hover: {
        transition: "all 0s",
        color: "#FAF7F5",
        scale: "1",
        background: "#282828",
      },
    },
    ethLatamDisabled: {
      color: "#949494",
      justifyContent: "center",
      borderRadius: 0,
      alignItems: "center",
      background: "#1A1A1A",
      fontWeight: 400,
      fontFamily: "NeuePixelGrotesk",
      border: "1.79753px solid #949494",
      boxShadow: "-4.49382px 4.49382px 0px #949494",
      _hover: { transition: "all 0s", color: "white", scale: "1" },
      _disabled: {
        border: "1.79753px solid #949494",
        boxShadow: "-4.49382px 4.49382px 0px #949494",
      },
    },
    sideNav: {
      bg: "transparent",
      color: "whiteAlpha.900",
      borderRadius: "9999px",
      height: "56px",
      alignItems: "center",
      justifyContent: "flex-start",
      _hover: { bg: "transparent", color: "secondary.500", scale: "1" },
      _active: {
        boxShadow: "none",
        borderColor: "transparent",
        outline: "none",
        backgroundColor: "white",
      },
      _focus: {
        boxShadow: "none",
        borderColor: "transparent",
        outline: "none",
      },
    },
    magik: (props: any) => ({
      ...base.components.Button.variants.solid(props),
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
    }),
    // 4. Override existing variants
    outline: (props: any) => ({
      ...base.components.Button.variants.outline(props),
      bg: "transparent",
      _active: { bg: "inherit" },
    }),
  },
};

export default Button;
