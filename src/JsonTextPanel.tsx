import React from 'react';
import { LoadingState, PanelData, PanelProps } from '@grafana/data';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export const JsonTextPanel: React.FC<PanelProps> = ({ data, width, height }) => {  
  let value: string|undefined = findData(data);
  return (
    <div style={{ overflow: 'auto', width, height }}>
      <div><JSONPretty data={value}></JSONPretty></div>
    </div>
  )
};

function findData(data: PanelData): string | undefined {
  try {
    if(data.state == LoadingState.Error){
      throw new Error(data.error?.message)
    }
    
    return data.series[0].fields[0].values.get(0);
  } catch (error) {
    console.log(error);
    return data.error?.message
  }
}

