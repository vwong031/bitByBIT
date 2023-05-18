import Problems from "@/components/Problems";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "@/components/Filter";
import { useState } from "react";

const dummyProgrammingProblems = [
  {
    title: `Problem 1`,
    tags: ["arrays", "functions"],
    difficulty: "easy",
    description: "HELLO THIS IS A V HARD QUESTION",
    constraints: ["INPUT MUST BE INT", "POGGERS CONSTRAINT"],
    example: "THIS IS AN EXAMPLE",
  },
  {
    title: `Problem 2`,
    tags: ["loops", "conditionals"],
    difficulty: "medium",
    description: "HELLO THIS IS A V HARD QUESTION",
    constraints: ["INPUT MUST BE INT", "POGGERS CONSTRAINT"],
    example: "THIS IS AN EXAMPLE",
  },
  {
    title: `Problem 3`,
    tags: ["variables", "functions"],
    difficulty: "hard",
    description: "HELLO THIS IS A V HARD QUESTION",
    constraints: ["INPUT MUST BE INT", "POGGERS CONSTRAINT"],
    example: "THIS IS AN EXAMPLE",
  },
];

const tags = [
  {
    name: "variables",
    color: "bg-code-yellow",
  },
  {
    name: "arrays",
    color: "bg-code-lime",
  },
  {
    name: "conditionals",
    color: "bg-code-lightpink",
  },
  {
    name: "loops",
    color: "bg-code-yellow",
  },
  {
    name: "functions",
    color: "bg-code-blue",
  },
];

const difficulties = [
  {
    name: "easy",
    color: "bg-code-lightgreen",
  },
  {
    name: "medium",
    color: "bg-code-yellow",
  },
  {
    name: "hard",
    color: "bg-code-lightpink",
  },
];

const Dashboard = () => {
  const [filtered, setFiltered] = useState([]);
  const [filteredProblems, setFilteredProblems] = useState(
    dummyProgrammingProblems
  );

  const clearAll = () => {
    setFiltered([]);
    setFilteredProblems(dummyProgrammingProblems);
  };

  const apply = () => {
    // console.log(filtered);
    if (filtered === []) {
      setFilteredProblems(dummyProgrammingProblems);
    } else {
      setFilteredProblems(
        dummyProgrammingProblems.filter(
          (a) =>
            filtered.includes(a.difficulty) ||
            a.tags.some((r) => filtered.indexOf(r) >= 0)
        )
      );
    }
  };

  return (
    <div className="bg-code-black flex justify-center items-center">
      <Row className="mb-0 flex items-cetner justify-center w-11/12">
        <Col xl={4} className=" flex justify-start items-center flex-col">
          <div className="rounded-2xl p-4 pt-3 w-full font-readex text-code-white bg-code-darkerpurple">
            <div className="flex text-lg justify-between mb-2 mr-0">
              <div className="text-3xl">Filters</div>
              <button className="text-2xl font-extralight" onClick={clearAll}>
                clear all
              </button>
            </div>
            <div className="flex flex-col">
              <div className="mb-1 text-2xl">Tags</div>
              <div className="flex flex-wrap gap-1 pb-2 font-light">
                {tags.map((tag, index) => (
                  <Filter
                    setFiltered={setFiltered}
                    filtered={filtered}
                    color={tag.color}
                    name={tag.name}
                    key={index}
                  />
                ))}
              </div>
              <div className="mb-1 text-2xl">Difficulty</div>
              <div className="flex flex-wrap gap-1 font-light">
                {difficulties.map((difficulty, index) => (
                  <Filter
                    setFiltered={setFiltered}
                    filtered={filtered}
                    color={difficulty.color}
                    name={difficulty.name}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="flex text-lg justify-end mb-2 mr-0">
              <button className="text-2xl font-extralight" onClick={apply}>
                Apply
              </button>
            </div>
          </div>
        </Col>
        <Col xl={8} className="flex justify-center items-left flex-col">
          <Problems problems={filteredProblems} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
