import { Link } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import { getViewIdeaRoute } from '../../lib/routes'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'
const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery()

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error:{error.message}</span>
  }

  return (
    <Segment title="All ideas">
      <div className={css.ideas}>
        {data.ideas.map((idea) => (
          <div className={css.idea} key={idea.nick}>
            <Segment
              size={2}
              title={
                <Link className={css.ideaLink} to={getViewIdeaRoute({ idea: idea.nick })}>
                  {idea.name}
                </Link>
              }
              description={idea.description}
            />
   
          </div>
        ))}
      </div>
    </Segment>
  )
}

export default AllIdeasPage
