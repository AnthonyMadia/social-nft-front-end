import OurProfilePage from "./OurProfilePage"
import OthersProfilePage from "./OthersProfilePage"

const LoadedProfilePage = ({loggedInUser, profToRender, ourProfile, handleFollow, handleUnfollow}) => {

    return (
        <div>

            {
                
                loggedInUser.email === profToRender.email ?

                <OurProfilePage 
                loggedInUser={loggedInUser} 
                profToRender={profToRender} 
                ourProfile={ourProfile}
                />
                
                :

                
                <OthersProfilePage 
                loggedInUser={loggedInUser} 
                ourProfile={ourProfile}
                profToRender={profToRender} 
                handleUnfollow={handleUnfollow} 
                handleFollow={handleFollow}
                />
            }

        </div>
    )
}

export default LoadedProfilePage