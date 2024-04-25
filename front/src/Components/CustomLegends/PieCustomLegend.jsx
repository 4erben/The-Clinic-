import React from 'react'

 const PieCustomLegend = ({ payload }) => (
    <>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className='' style={{ color: entry.color }}>
          <span className='me-auto'> <i class="fa-solid fa-circle-dot mx-1"></i>{entry.value} :</span>  <span className='ms-auto'>Total {entry.payload.value}</span>
        </div>
      ))}
    </>
  );

  export default PieCustomLegend;