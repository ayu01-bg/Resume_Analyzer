import AtsCompatibility from './components/ATSAnalysis/AtsCompatibility'
import ContentAnalysis from './components/ContentAnalysis/ContentAnalysis'
import JobRoles from './components/JobRoles/JobRoles'
import JobMatch from './components/JobSection/JobMatch'
import MatchingSkills from './components/MatchSkills/MatchingHardSkills'
import Qualities from './components/Qualities/Qualities'
import ResultHeader from './components/ResultHeader/ResultHeader'
import OverallScore from './components/ScoreOverview/OverallScore'
import SkillsAnalysis from './components/SkillsAnalysis/SkillsAnalysis'
import FinalSummary from './components/FinalSummary/FinalSummary'

const AnalyzeResult = () => {
  return (
    <>
      <ResultHeader />

      <OverallScore />

      <AtsCompatibility />

      <ContentAnalysis />

      <SkillsAnalysis />

      <JobMatch />

      <MatchingSkills />

      <JobRoles />

      <Qualities />

      <FinalSummary />

    </>
  )
}

export default AnalyzeResult