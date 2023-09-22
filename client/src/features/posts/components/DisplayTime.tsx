import { parseISO, formatDistanceToNow } from "date-fns";
import { History } from "lucide-react";

type Props = {
  timestamp: string;
};

const DisplayTime = ({ timestamp }: Props) => {
  return (
    <div className="flex items-center gap-1 text-slate-500 font-bold">
      <span>
        <History size={16} />
      </span>
      <span className="text-sm">
        {formatDistanceToNow(parseISO(timestamp))}
      </span>
    </div>
  );
};

export default DisplayTime;
