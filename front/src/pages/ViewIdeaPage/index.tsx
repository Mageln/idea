import { useParams } from 'react-router-dom'
import { ViewIdeaRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'
import { format } from 'date-fns'

const ViewIdeaPage = () => {
  const { idea } = useParams() as ViewIdeaRouteParams
  const { data, error, isLoading, isFetched, isError } = trpc.getIdea.useQuery({
    idea,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error:{error.message}</span>
  }

  if (!data.idea) {
    return <span>Idea not found</span>
  }

  return (
    <Segment title={data.idea.name} description={data.idea.description}>
      <div className={css.createdAt}>Created At: {format(data.idea.createdAt, 'yyyy-MM-dd')}</div>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  )
}

export default ViewIdeaPage
