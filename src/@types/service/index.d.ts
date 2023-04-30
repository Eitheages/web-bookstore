interface UserInfo {
  readonly userId: number;
  orderId: number;
}

interface OrderInfo {
  readonly id: number;
  readonly time: Date;
  readonly bookOrderedList: BookOrdered[];
}

interface BookOrdered {
  readonly uuid: string;
  quantity: number;
}
