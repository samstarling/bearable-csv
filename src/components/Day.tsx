import { Row } from "../types";
import Entries from "./Entries";
import { groupBy } from "lodash";
import classnames from "classnames";

type Props = {
  day: string;
  entries: Row[];
};

const tableClass = classnames("w-100 collapse bb b--black-10");

export default function Day({ day, entries }: Props) {
  const byCategory = groupBy(entries, (d: Row) => d.category);

  return (
    <section key={day}>
      <h2>{day}</h2>
      <table className={tableClass}>
        {Object.keys(byCategory).map((category) => (
          <Entries entries={byCategory[category]} />
        ))}
      </table>
    </section>
  );
}
