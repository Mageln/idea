import { useParams } from "react-router-dom"
import { ViewIdeaRouteParams } from "../../lib/routes"
import { trpc } from "../../lib/trpc"
import css from "./index.module.scss"

const ViewIdeaPage = () => {
    const {idea} = useParams() as ViewIdeaRouteParams
    const {data,error,isLoading,isFetched,isError} = trpc.getIdea.useQuery({
        idea
    })

    if(isLoading){
      return <span>Loading...</span>
      
    }
  
    if(isError){
      return <span>Error:{error.message}</span>
    }

    if(!data.idea){
        return <span>Idea not found</span>
    }
  
  return (
    <div>
      <h1 className={css.title}>{data.idea.name}</h1>
      <p className={css.description}>{data.idea.description}</p>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </div>
  )
}

export default ViewIdeaPage