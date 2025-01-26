import React, { useState } from "react";

const GoalInput = ({ addGoal }) => {
  const [goal, setGoal] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleChange = (e) => {
    setGoal(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim()) {
      addGoal(goal, priority, dueDate);
      setGoal("");
      setPriority("Medium");
      setDueDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={goal}
        onChange={handleChange}
        placeholder="Add a new goal"
      />
      <select value={priority} onChange={handlePriorityChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="date" value={dueDate} onChange={handleDueDateChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalInput;
