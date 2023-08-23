import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App (){
  return (
    <>
    <TwitterFollowCard  userName='avarusjose' name='Jose Alberto Izaguirre Perez' />
    <TwitterFollowCard  userName='pheralb' name='Pablo Hernandez' />
    <TwitterFollowCard  userName='elonmusk' name='Elon Musk' />
    </>
  )
}