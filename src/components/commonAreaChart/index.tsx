import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './styles.css';

interface CommonAreaChartProps {
  title: string;
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  yAxisTicks: number[];
  height?: number;
}

const CommonAreaChart: React.FC<CommonAreaChartProps> = ({
  title,
  data,
  dataKey,
  xAxisKey = 'name',
  yAxisTicks,
  height = 300
}) => {
  const actualDataKey = (data && data[0] && dataKey in data[0]) ? dataKey :
    (data && data[0] && 'count' in data[0]) ? 'count' :
      (data && data[0] && 'visits' in data[0]) ? 'visits' : dataKey;

  const safeDataKey = String(actualDataKey);
  const gradientId = `color-${safeDataKey.replace(/\s+/g, '-')}`;

  return (
    <div className="common-chart-container">
      <div className="common-chart-header">
        <h3 className="common-chart-title">{title}</h3>
      </div>

      <div className="common-chart-wrapper" style={{ width: '100%', height: height, minHeight: height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey={xAxisKey} axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} ticks={yAxisTicks} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={safeDataKey}
              stroke="#8b5cf6"
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CommonAreaChart;
