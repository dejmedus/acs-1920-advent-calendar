export default function Form() {
  return (
    <form className="gap-4 center-grid wide">
      <FormEl name="title">
        <input
          id="title"
          type="text"
          placeholder="Type here"
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
    </form>
  );
}

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
        <span>{desc}</span>
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
