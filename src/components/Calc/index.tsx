import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import "./calc.scss";

const Calc = () => {
  const output = useSelector((state: RootStateOrAny) => state.output);
  const dispatch = useDispatch();

  const onNumberClick = (num: string) => () => dispatch({ type: "CLICK_NUMBER", value: num });
  const onOperationClick = (name: string) => () => dispatch({ type: "CLICK_OPERATION", value: name });

  return (
    <div className="calc__wrapper">
      <div className="row">
        <div className="cel-4 calc__screen">{output}</div>
      </div>
      <div className="row">
        <div className="calc__button cel-1"
          onClick={onNumberClick('7')}>7</div>
        <div className="calc__button cel-1"
          onClick={onNumberClick('8')}>8</div>
        <div className="calc__button cel-1"
          onClick={onNumberClick('9')}>9</div>
        <div className="calc__button cel-1"
          onClick={onOperationClick('INCREMENT')}>+</div>
      </div>
      <div className="row">
        <div className="calc__button cel-1"
          onClick={onNumberClick('4')}>4</div>
        <div className="calc__button cel-1"
          onClick={onNumberClick('5')}>5</div>
        <div className="calc__button cel-1"
          onClick={onNumberClick('6')}>6</div>
        <div className="calc__button cel-1"
          onClick={onOperationClick('DECREMENT')}>-</div>
      </div>
      <div className="row">
        <div className="calc__button cel-1"
          onClick={onNumberClick('1')}>1</div>
        <div className="calc__button cel-1"
          onClick={onNumberClick('2')}>2</div>
        <div className="calc__button cel-1"
          onClick={onNumberClick('3')}>3</div>
        <div className="calc__button cel-1"
          onClick={onOperationClick('MULTIPLY')}>*</div>
      </div>
      <div className="row">
        <div className="calc__button cel-1"
          onClick={() => dispatch({ type: "CLICK_CANCEL", value: '0' })}>C</div>
        <div className="calc__button cel-1"
          onClick={onNumberClick('0')}>0</div>
        <div className="calc__button cel-1"
          onClick={() => dispatch({ type: "CLICK_EQUAL" })}>=</div>
        <div className="calc__button cel-1"
          onClick={onOperationClick('DIVIDE')}>/</div>
      </div>
    </div>
  );
};

export default Calc;
