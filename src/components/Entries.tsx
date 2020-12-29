import { Row } from "../types";
import classnames from "classnames";

type Props = {
  entries: Row[];
};

const rowClass = classnames("table");
const cellClass = classnames("bt pv2 b--black-10 v-top");
const badgeClass = classnames("dib bg-black-10 ph2 br-pill");

export default function Entries({ entries }: Props) {
  return (
    <>
      {entries.map((r, i) => {
        return (
          <tr className={rowClass}>
            <td className={classnames(cellClass, "w5")}>
              {i === 0 && r.category}
            </td>
            <td className={classnames(cellClass, "w3")}>{r.time_of_day}</td>
            <td className={classnames(cellClass, "w3 tc")}>
              {r.rating_or_amount !== "" && (
                <span className={badgeClass}>{r.rating_or_amount}</span>
              )}
            </td>
            <td className={classnames(cellClass)}>
              {r.detail}
              <br />
              {r.notes}
            </td>
          </tr>
        );
      })}
    </>
  );
}
