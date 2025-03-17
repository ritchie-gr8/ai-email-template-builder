import {
  Columns2,
  Columns3,
  Columns4,
  RectangleVertical,
} from "lucide-react";

export const LAYOUTS = [
  {
    label: "Column",
    type: "column",
    numOfCol: 1,
    icon: 'RectangleVertical',
  },
  {
    label: "Column 2",
    type: "column",
    numOfCol: 2,
    icon: 'Columns2',
  },
  {
    label: "Column 3",
    type: "column",
    numOfCol: 3,
    icon: 'Columns3',
  },
  {
    label: "Column 4",
    type: "column",
    numOfCol: 4,
    icon: 'Columns4',
  },
];

export const LAYOUT_ICONS = {
  RectangleVertical: RectangleVertical,
  Columns2: Columns2,
  Columns3: Columns3,
  Columns4: Columns4,
};
