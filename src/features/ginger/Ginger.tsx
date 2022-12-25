import ControlledNumberInput from "@/components/ControlledNumberInput";
import { useState } from "react";

type GingerProps = {};

const Ginger = (props: GingerProps) => {
  const {} = props;
  const [ginger, setGinger] = useState(5000);
  const [gingerPricePrKg, setGingerPricePrKg] = useState(90);
  const [sugarPricePrKg, setSugarPricePrKg] = useState(25);

  const juice = Math.round(ginger * 0.66);

  const waterToAdd = juice;

  const liquidVolume = juice + waterToAdd;

  const sugarVolume = juice;

  const estimatedFinalVolume = Math.round(liquidVolume + sugarVolume / 2);

  const gingerPrice = Math.round(ginger * (gingerPricePrKg / 1000));

  const sugarPrice = Math.round(sugarVolume * (sugarPricePrKg / 1000));

  return (
    <div className="w-1/2 mx-auto py-4">
      <ControlledNumberInput
        label="How much ginger do you have? (in g)"
        name="ginger"
        value={ginger}
        onChange={(e) => setGinger(Number(e.target.value))}
      />
      <div className="py-4" />

      <ul className="flex flex-col gap-3">
        <li>
          With {ginger}g of ginger you should get {juice}ml ginger juice.
        </li>
        <li>
          To this you should add {waterToAdd}ml of water for a liquid volume of{" "}
          {liquidVolume}ml
        </li>
        <li>To this you should add {sugarVolume}g of sugar.</li>
        <li>
          You should end up with an estimated volume of {estimatedFinalVolume}
          ml.
        </li>
      </ul>
      <div className="py-4" />
      <ControlledNumberInput
        label="What is the price of ginger? (per kg)"
        name="gingerPricePrKg"
        value={gingerPricePrKg}
        onChange={(e) => setGingerPricePrKg(Number(e.target.value))}
      />
      <ControlledNumberInput
        label="What is the price of sugar? (per kg)"
        name="sugarPricePrKg"
        value={sugarPricePrKg}
        onChange={(e) => setSugarPricePrKg(Number(e.target.value))}
      />
      <div className="py-4" />
      <ul className="flex flex-col gap-3">
        <li>
          If ginger costs {gingerPricePrKg}kr per kg your total ginger cost will
          be {gingerPrice}kr.
        </li>
        <li>
          If sugar costs {sugarPricePrKg}kr per kg your total sugar cost will be{" "}
          {sugarPrice}kr.
        </li>
        <li>Your total cost should be {gingerPrice + sugarPrice}kr</li>
      </ul>
    </div>
  );
};

export default Ginger;
