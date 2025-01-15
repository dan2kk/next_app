import React from 'react';
import CurrentRankingView from '../../start/CurrentRankingView';
import { YieldRankingCardProps } from '../../start/YieldRankingCard';
import { StockYieldProps } from '../../start/StockYield';

const Page: React.FC = () => {
  const no1: YieldRankingCardProps = {
    thisRank: 1,
    top1: { stockName: 'Stock A', rate: 5.67, rank: 1 },
    top2: { stockName: 'Stock B', rate: 4.23, rank: 2 },
    top3: { stockName: 'Stock C', rate: 3.89, rank: 3 },
    width: 300,
    height: 400,
  };

  const no2: YieldRankingCardProps = {
    thisRank: 2,
    top1: { stockName: 'Stock D', rate: 6.12, rank: 1 },
    top2: { stockName: 'Stock E', rate: 4.56, rank: 2 },
    top3: { stockName: 'Stock F', rate: 3.78, rank: 3 },
    width: 300,
    height: 400,
  };

  const no3: YieldRankingCardProps = {
    thisRank: 3,
    top1: { stockName: 'Stock G', rate: 7.89, rank: 1 },
    top2: { stockName: 'Stock H', rate: 5.34, rank: 2 },
    top3: { stockName: 'Stock I', rate: 4.12, rank: 3 },
    width: 300,
    height: 400,
  };

  const rankingData = { no1, no2, no3 };

  return (
    <div>
      <CurrentRankingView {...rankingData} />
    </div>
  );
};

export default Page;