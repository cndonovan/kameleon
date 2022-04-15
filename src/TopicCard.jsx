import React from "react";
import "./App.css";

const NUM_ROWS = 4;
const NUM_COLUMNS = 4;

const TopicCard = ({ topicCard, secretWord }) => {
  let { name, examples } = topicCard;
  let rowIndices = [...Array(NUM_ROWS).keys()];

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={NUM_COLUMNS}>{name}</th>
        </tr>
      </thead>
      <tbody>
        {rowIndices.map((rowIndex) => {
          const startIndex = rowIndex * NUM_COLUMNS;
          const examplesForRow = examples.slice(
            startIndex,
            startIndex + NUM_COLUMNS
          );
          return (
            <tr key={rowIndex}>
              {examplesForRow.map((example) => {
                if (example === secretWord) {
                  return (
                    <td key={example} className="SecretWord">
                      {example}
                    </td>
                  );
                } else {
                  return <td key={example}>{example}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TopicCard;
