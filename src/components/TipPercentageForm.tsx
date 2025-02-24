const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form>
        {tipOptions.map((item) => (
          <div key={item.id} className="flex gap-2">
            <label htmlFor={item.id}>{item.label}</label>
            <input
              id={item.id}
              type="radio"
              name="tip"
              value={item.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={item.value === tip}
            ></input>
          </div>
        ))}
      </form>
    </div>
  );
}

export default TipPercentageForm;
