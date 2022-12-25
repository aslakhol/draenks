import ControlledNumberInput from "@/components/ControlledNumberInput";
import { useState } from "react";
import Costs from "./Costs";

type GingerProps = {};

const Ginger = (props: GingerProps) => {
  const {} = props;
  const [ginger, setGinger] = useState(1800);

  const juice = Math.round(ginger * 0.666667);
  const waterToAdd = juice;
  const liquidVolume = juice + waterToAdd;
  const sugarVolume = juice;
  const estimatedFinalVolume = Math.round(liquidVolume + sugarVolume / 2);

  const lime = Math.round(0.5 * estimatedFinalVolume);
  const farris = Math.round(0.83333 * estimatedFinalVolume);
  const vodka = Math.round(0.666667 * estimatedFinalVolume);
  const ice = Math.round(0.3333333 * estimatedFinalVolume);

  const totalMule = estimatedFinalVolume + lime + farris + vodka + ice;
  const glassSize = 250;
  const amountOfMules = totalMule / glassSize;

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
          With {ginger} g of ginger you should get {juice} ml ginger juice.
        </li>
        <li>
          To this you should add {waterToAdd} ml of water for a liquid volume of{" "}
          {liquidVolume} ml
        </li>
        <li>To this you should add {sugarVolume} g of sugar.</li>
        <li>
          You should end up with an estimated volume of {estimatedFinalVolume}{" "}
          ml.
        </li>
      </ul>
      <div className="py-4" />

      <p className="pb-3">
        {estimatedFinalVolume} ml ginger syrup will make in total{" "}
        {estimatedFinalVolume + lime + farris + vodka + ice} ml of mule. With a{" "}
        {glassSize} ml glass that makes {amountOfMules} cocktails. You will need
        some other ingredients, estimated amounts are found below.
      </p>
      <ul className="flex flex-col gap-3">
        <li>{lime} ml of lime and/or lemon juice.</li>
        <li>
          {farris} ml of Farris (or other sparkling water with a lot co2 and
          some salts).
        </li>
        <li>
          {vodka} ml vodka (or adjusted amount of stronger flavourless liqor).
        </li>
        <li>{ice} ml ice</li>
      </ul>

      <div className="py-4" />

      <Costs
        ginger={ginger}
        sugar={sugarVolume}
        lime={lime}
        farris={farris}
        vodka={vodka}
        ice={ice}
        amountOfMules={amountOfMules}
      />
    </div>
  );
};

export default Ginger;
