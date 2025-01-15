export interface StockYieldProps {
  stockName: string;
  rate: number;
  rank: number;
}

const StockYield: React.FC<StockYieldProps> = ({ stockName, rate, rank }) => {
  return (
    <div className="stock-yield">
      <h3>{stockName}</h3>
      <p>수익률: {rate.toFixed(2)}%</p>
    </div>
  );
};

export default StockYield;
