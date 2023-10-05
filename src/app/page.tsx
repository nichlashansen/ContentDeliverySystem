"use client";
import Image from "next/image";
import Nav from "./Components/Nav";
import Order from "./Components/Order";
import { OrderState } from "../../lib/types";

export default function Home() {
  return (
    <main className="">
      <Nav />

      <div className="ml-[250px]">
        <div className="flex">
          <Order
            orderId={"9999"}
            orderDate={new Date("August 19, 1975 23:15:30")}
            orderState={OrderState.Processing}
          ></Order>
        </div>
      </div>
    </main>
  );
}
