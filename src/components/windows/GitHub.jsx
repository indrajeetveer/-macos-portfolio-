import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import './github.scss'

const GitCard = ({
  data = {
    id: 1,
    image: "",
    titel: "",
    Description: "",
    tags: [],
    repolink: "",
    demolink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="img" />
      <h1>{data.title}</h1>
      <p className="description">{data.Description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repolink}>Repository</a>
        {data.demolink && <a href={data.demolink}>Demolink</a>}
      </div>
    </div>
  );
};

const GitHub = () => {
  return (
    <div>
      <MacWindow>
        <div className="cards">
          {githubData.map((project) => {
            return <GitCard data={project} />;
          })}
        </div>
      </MacWindow>
    </div>
  );
};

export default GitHub;
