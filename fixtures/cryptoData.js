import { subDays } from "date-fns";

export const data = [];
for (let num = 60; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}
