import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { OrderCard } from "../../../lib/types";

export default function Order({ orderId, orderDate, orderState }: OrderCard) {
  return (
    <Card className="py-4 max-w-sm">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Order Id</p>
        <p className="font-bold text-large">{orderId}</p>
      </CardHeader>
      <CardBody>{orderDate.toDateString()}</CardBody>
    </Card>
  );
}
