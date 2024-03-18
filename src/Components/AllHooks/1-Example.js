import React, { useState } from "react";

const ExampleOne = () => {
  const [count, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  const handleResset = () => {
    setCounter(0);
  };

  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    setActive(id);
  };

  const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);
  const [nextId, setNextId] = useState(2);

  const handleInputNameIncrement = () => {
    setInputFields([...inputFields, { id: nextId, value: "" }]);
    setNextId(nextId + 1);
  };

  const handleInputChange = (id, value) => {
    const updatedInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value };
      }
      return field;
    });
    setInputFields(updatedInputFields);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const metaData = [
    {
      name: "John Doe",
      id: 101,
      subjects: [
        { subjectName: "Mathematics", totalMarks: 95, grade: "A" },
        { subjectName: "Science", totalMarks: 90, grade: "A" },
        { subjectName: "History", totalMarks: 88, grade: "B+" },
      ],
    },
    {
      name: "Jane Smith",
      id: 102,
      subjects: [
        { subjectName: "Mathematics", totalMarks: 85, grade: "B" },
        { subjectName: "Science", totalMarks: 88, grade: "B+" },
        { subjectName: "History", totalMarks: 92, grade: "A" },
      ],
    },
    {
      name: "Alice Johnson",
      id: 103,
      subjects: [
        { subjectName: "Mathematics", totalMarks: 78, grade: "C+" },
        { subjectName: "Science", totalMarks: 82, grade: "B-" },
        { subjectName: "History", totalMarks: 85, grade: "B" },
      ],
    },
    {
      name: "Bob Brown",
      id: 104,
      subjects: [
        { subjectName: "Mathematics", totalMarks: 88, grade: "B+" },
        { subjectName: "Science", totalMarks: 94, grade: "A" },
        { subjectName: "History", totalMarks: 90, grade: "A-" },
      ],
    },
    {
      name: "Charlie Davis",
      id: 105,
      subjects: [
        { subjectName: "Mathematics", totalMarks: 92, grade: "A-" },
        { subjectName: "Science", totalMarks: 85, grade: "B" },
        { subjectName: "History", totalMarks: 88, grade: "B+" },
      ],
    },
    {
      name: "Daisy Hill",
      id: 106,
      subjects: [
        { subjectName: "Mathematics", totalMarks: 75, grade: "C" },
        { subjectName: "Science", totalMarks: 78, grade: "C+" },
        { subjectName: "History", totalMarks: 80, grade: "B-" },
      ],
    },
    {
      name: "Ethan Hunt",
      id: 107,
      subjects: [
        { subjectName: "Mathematics", totalMarks: 98, grade: "A+" },
        { subjectName: "Science", totalMarks: 95, grade: "A" },
        { subjectName: "History", totalMarks: 94, grade: "A" },
      ],
    },
  ];

  return (
    <>
      <div>
        <h1>
          Implement Hook counter if button click than counter increment and
          decrement{" "}
        </h1>
        <h4>count : {count}</h4>
        <button onClick={handleIncrement}>Add+</button>
        <button onClick={handleDecrement}>Sub-</button>
        <button onClick={handleResset}>Reset</button>
      </div>

      <div>
        <h1>
          Implement Hook to check active link using useState (create a object
          and list one by one detail )
        </h1>
        <ul>
          {metaData.map((d) => (
            <li
              key={d.id}
              style={{ color: active === d.id ? "green" : "black" }}
              onClick={() => handleActive(d.id)}
            >
              {d.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Increment input value if button clicked</h1>
        {inputFields.map((field) => (
          <input
            key={field.id}
            type="text"
            placeholder="Enter name"
            value={field.value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            style={{ background: active === field.id ? "green" : "white" }}
            onClick={() => handleActive(field.id)}
          />
        ))}
        <button onClick={handleInputNameIncrement}>Add +</button>
      </div>

      <div>
        <h1>
          Implement Progress Bar  with 2 buttons that increase the progress bar 
          when click on them
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index + 1}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: currentStep >= index + 1 ? "green" : "gray",
                margin: "0 5px",
              }}
            ></div>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={handlePreviousStep} disabled={currentStep === 1}>
            Previous
          </button>
          <button onClick={handleNextStep} disabled={currentStep === 5}>
            Next
          </button>
        </div>
        
      </div>
    </>
  );
};

export default ExampleOne;
