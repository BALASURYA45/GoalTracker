import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [filter, setFilter] = useState("All");

 
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem('goals'));
    if (savedGoals) {
      setGoals(savedGoals);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = (text, priority, dueDate) => {
    const newGoal = { text, completed: false, priority, dueDate };
    setGoals([...goals, newGoal]);
  };

  const removeGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  const markComplete = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = true;
    setGoals(updatedGoals);
  };

  const filteredGoals = goals.filter(goal => {
    if (filter === "All") return true;
    if (filter === "Completed") return goal.completed;
    if (filter === "Pending") return !goal.completed;
    return true;
  });

  return (
    <div className="container">
      <div className="left-column">
        <Header />
        <GoalInput addGoal={addGoal} />
        <div>
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Completed")}>Completed</button>
          <button onClick={() => setFilter("Pending")}>Pending</button>
        </div>
      </div>
      <div className="right-column">
        <GoalList goals={filteredGoals} removeGoal={removeGoal} markComplete={markComplete} />
      </div>
    </div>
  );
};

export default App;
