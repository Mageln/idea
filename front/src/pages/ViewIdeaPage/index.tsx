import { useParams } from 'react-router-dom'
import { getEditIdeaRoute, ViewIdeaRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'
import { format } from 'date-fns'
import { LinkButton } from '../../components/Button'

const ViewIdeaPage = () => {
  const { idea } = useParams() as ViewIdeaRouteParams
  const getIdeaResult = trpc.getIdea.useQuery({
    idea,
  })

  const getMeResult = trpc.getMe.useQuery()

  if (getIdeaResult.isLoading || getIdeaResult.isFetching || getMeResult.isFetching || getMeResult.isLoading) {
    return <span>Loading...</span>
  }

  if (getIdeaResult.isError) {
    return <span>Error:{getIdeaResult.error.message}</span>
  }

  if (getMeResult.isError) {
    return <span>Error: {getMeResult.error.message}</span>
  }
  if(!getIdeaResult.data.idea){
    return <span>Idea not found</span>
  }
  const ideaNick = getIdeaResult.data.idea
const me = getMeResult.data.me
  return (
    <Segment title={ideaNick.name} description={ideaNick.description}>
      <div className={css.createdAt}>Created At: {format(ideaNick.createdAt, 'yyyy-MM-dd')}</div>
      <div className={css.author}>Author: {ideaNick.author.nick}</div>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: ideaNick.text }} />
      {me?.id === ideaNick.authorId && (
        <div className={css.editButton}>
          <LinkButton to={getEditIdeaRoute({idea: ideaNick.nick})}> Edit Idea</LinkButton>
        </div>
      )}
    </Segment>
  )
}

export default ViewIdeaPage
