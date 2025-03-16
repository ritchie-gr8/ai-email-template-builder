import {
  AArrowUp,
  AlignCenter,
  AlignLeft,
  AlignRight,
  CaseLower,
  CaseUpper,
  Columns2,
  Facebook,
  Frame,
  Framer,
  Image,
  Link2,
  PanelTop,
  Projector,
  RectangleEllipsis,
  SquareSplitVertical,
  Text,
  TextSelectionIcon,
  Twitter,
} from "lucide-react";

export const ELEMENTS = [
  {
    icon: RectangleEllipsis,
    label: "Button",
    type: "Button",
    content: "Sample Button",
    url: "#",
    style: {
      textAlign: "center",
      backgroundColor: "#007bff",
      color: "#ffffff",
      padding: "10px",
      width: "auto",
      fontSize: "16px",
      borderRadius: "0px",
      fontWeight: "normal",
      objectFit: "contain",
      margin: '0px',
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  {
    icon: TextSelectionIcon,
    type: "Text",
    label: "Text",
    content: "Sample Text",
    textarea: "Sample Text",
    style: {
      backgroundColor: "",
      color: "#000000",
      padding: "10px",
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "normal",
      textTransform: "uppercase", //lowercase , capitilized
      margin: '0px',
    },
    outerStyle: {
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: Image,
    type: "Image",
    label: "Image",
    imageUrl: "/image.png",
    alt: "Image",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "50%",
      width: "70%",
      margin: "0px",
      borderRadius: "0px",
      margin: '0px',
    },
    outerStyle: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  },
  {
    icon: Frame,
    type: "Logo",
    label: "Logo",
    imageUrl: "/logo.svg",
    alt: "logo",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "30%",
      width: "100%",
      margin: '0px',
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: PanelTop,
    type: "LogoHeader",
    label: "Logo Header",
    imageUrl: "/logo.svg",
    alt: "logo",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "40%",
      width: "40%",
      margin: '0px',
    },
    outerStyle: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: SquareSplitVertical,
    type: "Divider",
    label: "Divider",
    content: "",
    style: {
      color: "#000000",
      padding: "10px",
      width: "100%",
      margin: '0px',
    },
  },
  {
    type: "SocialIcons",
    icon: Twitter,
    label: "Social Icons",
    socialIcons: [
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
        url: "",
      },
    ],
    options: [
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
        url: "",
      },
    ],
    style: {
      width: 40,
      height: 40,
    },
    outerStyle: {
      display: "flex",
      gap: 15,
    },
  },
];

export const TextAlignOptions = [
  {
    value: "left",
    icon: AlignLeft,
  },
  {
    value: "center",
    icon: AlignCenter,
  },
  {
    value: "right",
    icon: AlignRight,
  },
];

export const TextTransformOptions = [
  {
    value: "uppercase",
    icon: CaseUpper,
  },
  {
    value: "lowercase",
    icon: CaseLower,
  },
  {
    value: "capitalize",
    icon: AArrowUp,
  },
];
