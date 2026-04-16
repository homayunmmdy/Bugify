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

// create budget
export const createBudget = ({ name, amount }: {name : FormDataEntryValue, amount : FormDataEntryValue}): boolean => {
  const existingBudgets = fetchData<BudgetType[]>("budgets") ?? [];
  
  // Check if budget name already exists (case-insensitive)
  const budgetNameExists = existingBudgets.some(
    (budget) => budget.name.toString().toLowerCase().trim() === name.toString().toLowerCase().trim()
  );
  
  if (budgetNameExists) {
    return false;
  }
  
  const newItem: BudgetType = {
    id: crypto.randomUUID(),
    name: name.toString().trim(),
    createdAt: Date.now(),
    amount: Number(amount),
    color: generateRandomColor(),
  };
  
  localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
  
  return true;
};



// total spent by budget
export const calculateSpentByBudget = (budgetId: string) => {
  const expenses = fetchData<ExpenseType[]>("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc : number, expense: ExpenseType) => {
    // check if expense.budgetId === budgetId I passed in
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
export const getAllMatchingItems = <T extends Record<string, unknown>>({ category, key, value }: {category : string , key : string , value : string}): T[] => {
  const data = fetchData<T[]>(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// create expense
export const createExpense = ({ name, amount, budgetId }: {name: FormDataEntryValue, amount: FormDataEntryValue, budgetId: FormDataEntryValue}) => {
  const newItem: ExpenseType = {
    id: crypto.randomUUID(),
    name: name.toString().trim(),
    createdAt: Date.now(),
    amount: Number(amount),
    budgetId: budgetId.toString(),
  };
  const existingExpenses = fetchData<ExpenseType[]>("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

// FORMATTING
export const formatDateToLocaleString = (epoch : string) =>
  new Date(epoch).toLocaleDateString();

