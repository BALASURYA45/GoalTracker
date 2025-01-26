import React from "react";

const GoalItem = ({ goal, removeGoal, markComplete }) => {
  return (
    <li style={{ textDecoration: goal.completed ? "line-through" : "none" }}>
      <div>
        <span>{goal.text}</span>
        <span>Priority: {goal.priority}</span>
        {goal.dueDate && <span>Due: {goal.dueDate}</span>}
      </div>
      <button onClick={markComplete}>Complete</button>
      <button onClick={removeGoal}>Delete</button>
    </li>
  );
};

export default GoalItem;
