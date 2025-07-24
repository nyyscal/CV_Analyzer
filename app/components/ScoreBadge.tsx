import React from "react";

interface ScoreBadgeProps {
  score: number;
}
 
const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeColor = ""
  let badgeText =""

  if(score > 70) {
    badgeColor = "bg-green-500 text-white"
    badgeText = "Excellent"
  } else if(score > 49) {
    badgeColor = "bg-yellow-500 text-white"
    badgeText = "Good Start"
  } else {
    badgeColor = "bg-red-500 text-white"
    badgeText = "Needs Improvement"
  }

  return (
    <div className={`px3 py-1 rounded-full ${badgeColor}`}>
      <p className="text-sm font-medium">${badgeText}</p>
    </div>
  )
}

export default ScoreBadge;