import {trpc} from "../../lib/trpc"

const AllIdeasPage = () => {
  const {data,error,isLoading,isFetched,isError} = trpc.getIdeas.useQuery()

  if(isLoading){
    return <span>Loading...</span>
    
  }

  if(isError){
    return <span>Error:{error.message}</span>
  }


    return (
      <div>
        <h1>Idea</h1>
        {data?.ideas.map((idea) => {
          return(
            <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
          )
        })}
      </div>
    )
  }
  
  export default AllIdeasPage