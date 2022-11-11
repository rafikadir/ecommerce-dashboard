const data = [
    { name: "Shoes", value: 400 },
    { name: "Shirts", value: 300 },
    { name: "Hodies", value: 350 },
    { name: "Pants", value: 250 }
];
const COLORS = ["#6362e7", "#8f97b2", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  },) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
export {data, COLORS, RADIAN,renderCustomizedLabel}