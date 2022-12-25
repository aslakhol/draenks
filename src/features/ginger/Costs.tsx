import ControlledNumberInput from "@/components/ControlledNumberInput";
import { useState } from "react";

type CostsProps = {
  ginger: number;
  sugar: number;
  lime: number;
  farris: number;
  vodka: number;
  ice: number;
  amountOfMules: number;
};

const Costs = (props: CostsProps) => {
  const { ginger, sugar, lime, farris, vodka, ice, amountOfMules } = props;
  const [gingerPricePrKg, setGingerPricePrKg] = useState(90);
  const [sugarPricePrKg, setSugarPricePrKg] = useState(25);
  const [limePricePrL, setLimePricePrL] = useState(200);
  const [farrisPricePrL, setFarrisPricePrL] = useState(15);
  const [vodkaPricePrL, setVodkaPricePrL] = useState(500);
  const [icePricePrKg, setIcePricePrKg] = useState(20);

  const gingerPrice = Math.round(ginger * (gingerPricePrKg / 1000));
  const sugarPrice = Math.round(sugar * (sugarPricePrKg / 1000));
  const limePrice = Math.round(lime * (limePricePrL / 1000));
  const farrisPrice = Math.round(farris * (farrisPricePrL / 1000));
  const vodkaPrice = Math.round(vodka * (vodkaPricePrL / 1000));
  const icePrice = Math.round(ice * (icePricePrKg / 1000));

  const totalCost =
    gingerPrice + sugarPrice + limePrice + farrisPrice + vodkaPrice + icePrice;

  return (
    <div className="flex flex-col gap-2">
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
      <ControlledNumberInput
        label="What is the price of citrus juice? (per l)"
        name="limePricePrL"
        value={limePricePrL}
        onChange={(e) => setLimePricePrL(Number(e.target.value))}
      />
      <ControlledNumberInput
        label="What is the price of farris? (per l)"
        name="farrisPricePrL"
        value={farrisPricePrL}
        onChange={(e) => setFarrisPricePrL(Number(e.target.value))}
      />
      <ControlledNumberInput
        label="What is the price of vodka? (per l)"
        name="vodkaPricePrL"
        value={vodkaPricePrL}
        onChange={(e) => setVodkaPricePrL(Number(e.target.value))}
      />
      <ControlledNumberInput
        label="What is the price of ice? (per kg)"
        name="icePricePrKg"
        value={icePricePrKg}
        onChange={(e) => setIcePricePrKg(Number(e.target.value))}
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
        <li>
          If citrus costs {limePricePrL}kr per L your total citrus cost will be{" "}
          {limePrice}kr.
        </li>
        <li>
          If farris costs {farrisPricePrL}kr per L your total farris cost will
          be {farrisPrice}kr.
        </li>
        <li>
          If vodka costs {vodkaPricePrL}kr per L your total vodka cost will be{" "}
          {vodkaPrice}kr.
        </li>
        <li>
          If ice costs {icePricePrKg}kr per kg your total ice cost will be{" "}
          {icePrice}kr.
        </li>

        <li>Your total cost should be {totalCost}kr</li>
      </ul>

      <p className="py-2">
        With {amountOfMules} glasses of mule the price per cocktail is{" "}
        {Math.round(totalCost / amountOfMules)}
      </p>
    </div>
  );
};

export default Costs;
