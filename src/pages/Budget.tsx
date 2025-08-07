import React from 'react'
import { useLoaderData } from 'react-router-dom';

const BudgetPage = () => {
  const { budget } = useLoaderData();
  return (
        <div
      className="grid-lg"
      style={{
        "--accent": budget.color,
      } as React.CSSProperties}
    >BudgetPage</div>
  )
}

export default BudgetPage