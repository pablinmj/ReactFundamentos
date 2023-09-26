export function TwitterFollowCard ({children , formatUserName,userName , name , isFollowing}) {
    console.log(isFollowing);
    return(
        <article className='tw-follow-card'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/sindresorhus@gmail.com`} alt="el avatar" />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>        
        </header>
        <aside>
            <button className='tw-followCard-button'>Seguir</button>
        </aside>
       </article>
    )
}