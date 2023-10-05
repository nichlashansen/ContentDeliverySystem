export type Message = {
  id: String;
  senderId: String;
  recieverId: String;
  sentDate: Date;
  title: String;
  content: String;
  attachment: String[];
};

export type OrderCard = {
  orderId: String;
  orderDate: Date;
  orderState: OrderState;
};

export enum OrderState {
  Processing,
  OnHold,
  Completed,
  Deleted,
  Cancelled,
}
