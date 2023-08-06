//import { LOCALE } from "@config";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className={`${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);
  myDatetime.setTime(myDatetime.getTime() - 1000 * 60 * 60 * 9);

  /*
  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString(LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {date}
      <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      {time}
    </>
  );
  */
  const day = myDatetime.getDate().toString().padStart(2, "0")
  const year = myDatetime.getFullYear()
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = MONTHS[myDatetime.getMonth()]
  return (
    <div className="w-[80px] font-poppins flex flex-col text-center min-w-full border-r-[6px] border-[#ab1717] mr-6">
      <span className="text-4xl font-semibold">{day}</span>
      <span className="text-base">{month} {year}</span>
    </div>
  );
};
