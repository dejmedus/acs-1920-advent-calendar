import { useState } from "react";

export default function Form() {
  const [step, setStep] = useState(0);

  const formSteps = [
    <StepOne key={0} />,
    <StepTwo key={1} />,
    <StepThree key={2} />,
  ];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <form className="gap-4 bg-white mx-auto p-8 rounded w-[500px] text-black">
      {formSteps[step]}
      <div className="flex justify-between mt-12">
        {step > 0 ? (
          <button className="btn btn-neutral" type="button" onClick={prevStep}>
            Back
          </button>
        ) : (
          <div />
        )}
        {step < formSteps.length - 1 && (
          <button type="button" className="btn btn-neutral" onClick={nextStep}>
            Next
          </button>
        )}
      </div>
    </form>
  );
}

const StepOne = () => (
  <>
    <FormEl name="title">
      <input
        id="title"
        type="text"
        className="input-bordered w-full max-w-xs input"
      />
    </FormEl>
    <FormEl name="message">
      <textarea className="textarea-bordered textarea" />
    </FormEl>
    <FormEl name="theme">
      <select className="w-full max-w-xs select-bordered select">
        <option>Santa</option>
        <option>Christmas Trees</option>
      </select>
    </FormEl>
    <ToggleEl name="unlock-days" desc="Allow days to be opened anytime">
      <input type="checkbox" className="toggle" defaultChecked />
    </ToggleEl>
    <ToggleEl name="unlock-order" desc="Allow days to opened in any order">
      <input type="checkbox" className="toggle" defaultChecked />
    </ToggleEl>
  </>
);

const StepTwo = () => (
  <>
    <div className="w-full max-w-lg">
      <h4>Added Tiles</h4>
      <div className="flex flex-wrap gap-2 my-4">
        <Day day={1} />
        <Day day={2} />

        <AddMore />
      </div>
      <hr />
      <FormEl name="Add New Tile">
        <input type="text" className="input-bordered w-full max-w-xs input" />
      </FormEl>
      <FormEl name="message">
        <textarea className="textarea-bordered textarea" />
      </FormEl>
      <FormEl name="add-media">
        <input type="file" className="w-full max-w-xs" />
      </FormEl>
    </div>
  </>
);
const StepThree = () => <p>preview of super cool calendar :)</p>;

const Day = ({ day }: { day: number }) => (
  <div className="flex items-center gap-2 border-neutral-200 px-2 py-1 border rounded-full">
    Day {day} <XIcon />
  </div>
);

const AddMore = () => (
  <div className="flex items-center gap-2 border-neutral-200 px-2 py-1 border rounded-full">
    Add more <XIcon />
  </div>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function FormEl({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-control w-full max-w-lg">
      <label htmlFor={name} className="label">
        {formatTitle(name)}
      </label>
      {children}
    </div>
  );
}

function ToggleEl({
  name,
  children,
  desc,
}: {
  name: string;
  children: React.ReactNode;
  desc: string;
}) {
  return (
    <div className="flex justify-between items-center w-full max-w-lg">
      <label htmlFor={name} className="grid label">
        {formatTitle(name)}
        <span className="opacity-75">{desc}</span>
      </label>
      {children}
    </div>
  );
}

function formatTitle(title: string) {
  return title
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
