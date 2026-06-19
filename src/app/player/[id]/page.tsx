import Player from "./Player"

export default  async function page({params}:{params:Promise<{id:string}>}) {
    const {id}= await params;
  return (
    
    <Player id={id }/>
  )
}
