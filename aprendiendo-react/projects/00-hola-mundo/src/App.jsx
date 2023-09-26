import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {
    const formatUserName = (userName) => `@${userName}`;
    return(
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing={true} 
                userName="carloscuevas" 
            >Carlos Cuevas</TwitterFollowCard>
            
            <TwitterFollowCard 
                formatUserName={formatUserName}
                isFollowing={false}
                userName="pablojara"
                
            >Pablo Jara</TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                userName="midudev"
                name="pedrohernandez"
            >Pedro Hernandez</TwitterFollowCard>
        </section>
    )
}