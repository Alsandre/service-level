import React, {useState}from 'react';

export default function ReportTypeOptions(props: {reportTypeHandler: (type:string) => void }): JSX.Element {
  
  return (
    <div>
      <div>
        <input type="radio" name="report-type" onChange={() => props.reportTypeHandler('item')}/>
        <label htmlFor="by-item">By item</label>
      </div>
      <div>
        <input type="radio" name="report-type" onChange={() => props.reportTypeHandler('shop')}/>
        <label htmlFor="by-shop">By shop</label>
      </div>
    </div>
  );
}
