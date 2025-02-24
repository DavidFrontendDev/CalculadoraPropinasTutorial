import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            className="flex justify-between border-t items-center py-5 border-gray-200 last-of-type:border-b"
            key={item.id}
          >
            <div>
              <p className="text-lg">
                {" "}
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderContents;
