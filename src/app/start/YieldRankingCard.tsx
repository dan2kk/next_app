"use client"
import React, { useState } from 'react';
import StockYield, { StockYieldProps } from './StockYield';
// import './YieldRankingCard.css';

export interface YieldRankingCardProps {
  thisRank: number;
  top1: StockYieldProps;
  top2: StockYieldProps;
  top3: StockYieldProps;
  width: number;
  height: number;
}

const YieldRankingCard: React.FC<YieldRankingCardProps> = ({ width, height,thisRank, top1, top2, top3 }) => {
  const [isFront, setIsFront] = useState(true);
  const cardStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    padding: '10px',
    width: `${width}px`,
    height: `${height}px`,
    boxSizing: 'border-box' as const,
  };
  const handleFlip = () => {
    setIsFront(!isFront);
  };
  return (
    <div style={cardStyle}>
    {isFront ? (
      <div className="frontCard">
        <button onClick={handleFlip}>종목보기</button>
        {/* frontCard 내용 */}
      </div>
    ) : (
      <div className="backCard">
        <button onClick={handleFlip}>돌아가기</button>
        <StockYield {...top1} rank={1}></StockYield>
        <StockYield {...top2} rank={2}></StockYield>
        <StockYield {...top3} rank={3}></StockYield>
      </div>
    )}
  </div>
  );
};

export default YieldRankingCard;
