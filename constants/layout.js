import { Columns2, Columns3, Columns4, LucideProps, RectangleVertical } from "lucide-react";

export const LAYOUTS = [
  {
    label: "Column",
    type: "column",
    numOfCol: 1,
    icon: RectangleVertical,
  },
  {
    label: "Column 2",
    type: "column-2",
    numOfCol: 2,
    icon: Columns2,
  },
  {
    label: "Column 3",
    type: "column-3",
    numOfCol: 3,
    icon: Columns3,
  },
  {
    label: "Column 4",
    type: "column-4",
    numOfCol: 4,
    icon: Columns4,
  },
];
