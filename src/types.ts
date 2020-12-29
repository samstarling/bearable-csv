export type Row = {
  date: string;
  weekday: string;
  time_of_day: string;
  category: string;
  rating_or_amount: string;
  detail: string;
  notes: string;
};

export type CsvRow = {
  data: string[];
};
