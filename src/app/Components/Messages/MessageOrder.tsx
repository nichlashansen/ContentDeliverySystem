import React from "react";
import { OrderState } from "../../../../lib/types";

type MessageOrder = {
  title: String;
  date: Date;
  orderStatus: OrderState;
};

function MessageOrder({ title, date, orderStatus }: MessageOrder) {
  return (
    <div className="flex border px-4 py-2 mt-4">
      <p className="text-medium font-semibold">{title}</p>
      <p className="text-small">{date.toLocaleDateString()}</p>
      <p className="">{orderStatus}</p>
    </div>
  );
}

export default MessageOrder;
