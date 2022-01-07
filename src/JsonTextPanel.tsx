import React from 'react';
import { PanelData, PanelProps } from '@grafana/data';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export const JsonTextPanel: React.FC<PanelProps> = ({ data, width, height }) => {
     
  let value: string = findData(data);
  return (
    <div style={{ overflow: 'auto', width, height }}>
      <div><JSONPretty data={value}></JSONPretty></div>
    </div>
  )
};

function findData(data: PanelData): string {
  try {
    return data.series[0].fields[0].values.get(0);
  } catch (error) {
    return "some errors happened...";
  }
}