import YieldRankingCard, { YieldRankingCardProps } from './YieldRankingCard';

export interface CurrentRankingProps {
    no1: YieldRankingCardProps;
    no2: YieldRankingCardProps;
    no3: YieldRankingCardProps;
  }
  
  const CurrentRankingView: React.FC<CurrentRankingProps> = ({ no1, no2, no3 }) => {
    return (
      <div>
        <YieldRankingCard {...no1} thisRank={1}></YieldRankingCard>
        <br/>
        <YieldRankingCard {...no2} thisRank={2}></YieldRankingCard>
        <br/>
        <YieldRankingCard {...no3} thisRank={3}></YieldRankingCard>
      </div>
    );
  };
  
  export default CurrentRankingView;
  