import React from "react";
import GoalItem from "./GoalItem";

const GoalList = ({ goals, removeGoal, markComplete }) => {
  return (
    <div>
      {goals.length === 0 ? (
        <p>No goals added yet!</p>
      ) : (
        <ul>
          {goals.map((goal, index) => (
            <GoalItem
              key={index}
              goal={goal}
              removeGoal={() => removeGoal(index)}
              markComplete={() => markComplete(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalList;
