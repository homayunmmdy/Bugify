import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

interface Expense {
  id: number;
  name: string;
  price: number;
}

const ExpensesTracker: React.FC = () => {
  const [cookies, setCookie] = useCookies(["expenses"]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (cookies.expenses) {
      setExpenses(cookies.expenses);
    }
  }, [cookies.expenses]);

  const handleAddExpense = () => {
    if (name && price > 0) {
      const newExpense: Expense = {
        id: expenses.length + 1,
        name: name,
        price: price,
      };
      setExpenses([...expenses, newExpense]);
      setCookie("expenses", [...expenses, newExpense], { path: "/" });
      setName("");
      setPrice(0);
    }
  };

  const handleDeleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    setCookie("expenses", updatedExpenses, { path: "/" });
  };

  const handleEditExpense = (id: number, newName: string, newPrice: number) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? { ...expense, name: newName, price: newPrice } : expense
    );
    setExpenses(updatedExpenses);
    setCookie("expenses", updatedExpenses, { path: "/" });
  };

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      <h1 className="text-xl font-bold mb-4">Expenses Tracker</h1>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          placeholder="Enter price"
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
      <button
        onClick={handleAddExpense}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Add Expense
      </button>
      <div className="mt-4">
        {expenses.map((expense) => (
          <div key={expense.id} className="flex justify-between mb-2">
            <p>{expense.name}</p>
            <p>${expense.price}</p>
            <button
              onClick={() => handleEditExpense(expense.id, prompt("Enter new name", expense.name) || expense.name, parseFloat(prompt("Enter new price", expense.price.toString()) || expense.price.toString()))}
              className="text-green-500 hover:text-green-600 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteExpense(expense.id)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <p className="font-bold">Total:</p>
        <p className="font-bold">${totalExpenses}</p>
      </div>
    </div>
  );
};

export default ExpensesTracker;
