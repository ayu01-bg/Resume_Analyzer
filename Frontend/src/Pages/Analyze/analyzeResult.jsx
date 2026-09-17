import AtsCompatibility from './components/ATSAnalysis/AtsCompatibility'
import ContentAnalysis from './components/ContentAnalysis/ContentAnalysis'
import ResultHeader from './components/ResultHeader/ResultHeader'
import OverallScore from './components/ScoreOverview/OverallScore'
import SkillsAnalysis from './components/SkillsAnalysis/SkillsAnalysis'

const AnalyzeResult = () => {
  return (
    <>
      <ResultHeader />

      <OverallScore />

      <AtsCompatibility />

      <ContentAnalysis />

      <SkillsAnalysis />
    </>
  )
}

export default AnalyzeResult