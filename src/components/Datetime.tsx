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

  const day = myDatetime.getDate().toString().padStart(2, "0")
  const year = myDatetime.getFullYear()
  const month = (myDatetime.getMonth() + 1).toString().padStart(2, "0")

  return (
    <div className="flex-col font-noto">
      <span className="text-base">{year}-{month}-{day}</span>
    </div>
  );
};
