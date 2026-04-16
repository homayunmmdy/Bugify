import type { BudgetType, ExpenseType } from "./types";

export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// colors
const generateRandomColor = () => {
  // @ts-ignore
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
};

// load the username 
export function loadUserName() {
  const userName = fetchData("userName");
  return { userName }
}

// delete item from local storage
export const deleteItem = ({ key, id } : {key : string , id?: unknown}) => {
  const existingData = fetchData(key);
  if (id) {
    //@ts-ignore
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

// check if budget name exists
export const checkBudgetNameExists = (name: string): boolean => {
  const existingBudgets: BudgetType[] = fetchData("budgets") ?? [];
  return existingBudgets.some(
    (budget) => budget.name.toLowerCase() === name.toLowerCase()
  );
};

// create budget
export const createBudget = ({ name, amount }: {name : FormDataEntryValue, amount : FormDataEntryValue}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    // @ts-ignore
    JSON.stringify([...existingBudgets, newItem])
  );
};



// total spent by budget
export const calculateSpentByBudget = (budgetId: string) => {
  const expenses: BudgetType[] = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc : number, expense: BudgetType) => {
    // check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc;

    // add the current amount to my total
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// Format currency
export const formatCurrency = (amt: number) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};

// Formating percentages
export const formatPercentage = (amt: number) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// Get all items from local storage
export const getAllMatchingItems = ({ category, key, value }: {category : string , key : string , value : string}) => {
  const data = fetchData(category) ?? [];
  // @ts-ignore
  return data.filter((item) => item[key] === value);
};

// create expense
export const createExpense = ({ name, amount, budgetId } : ExpenseType) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    // @ts-ignore
    JSON.stringify([...existingExpenses, newItem])
  );
};

// FORMATTING
export const formatDateToLocaleString = (epoch : string) =>
  new Date(epoch).toLocaleDateString();

