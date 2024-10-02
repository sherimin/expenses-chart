import React, { useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Cell, LabelList } from 'recharts';
import data from '../data.json';

const CustomLabel = (props) => {
  const { x, y, width, value, isHoveredOrActive } = props;
  const labelWidth = 55;
  const labelHeight = 30;

  // Only show the label if the bar is hovered or active
  if (!isHoveredOrActive) return null;

  return (
    <g>
      <rect 
        x={x + width / 2 - labelWidth / 2} 
        y={y - labelHeight - 10} 
        width={labelWidth} 
        height={labelHeight} 
        fill="hsl(25, 47%, 15%)" 
        rx={5} ry={5} 
      />
      <text 
        x={x + width / 2} 
        y={y - labelHeight / 2 - 10} 
        fill="hsl(27, 66%, 92%)" 
        textAnchor="middle" 
        dominantBaseline="middle"
        style={{ fontSize: '13px' }}
      >
        ${value}
      </text>
    </g>
  );
};

const ChartDetail = () => {
  const defaultActiveDay = new Date().getDay();

  const [activeDay, setActiveDay] = useState(defaultActiveDay);
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  const handleClick = (data, index) => {
    setActiveDay(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={data} 
        margin={{ top: 30, right: 0, left: -60, bottom: 0 }}
      >
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tick={false} />

        <Bar
          dataKey="amount"
          radius={[5, 5, 5, 5]}
          onClick={handleClick}
        >
          <LabelList 
            dataKey="amount" 
            content={(props) => (
              <CustomLabel 
                {...props} 
                isHoveredOrActive={props.index === activeDay || props.index === hoveredIndex} // Hover or active
              />
            )}
          />
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              cursor="pointer" 
              fill={
                hoveredIndex === index 
                  ? (index === activeDay ? "#B4DFE5" : "#FF9B87") // Hover state based on activeDay
                  : (index === activeDay ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)") // Default fill
              }
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartDetail;
