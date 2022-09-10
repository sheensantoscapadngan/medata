import ProfileInfo from "./ProfileInfo"
import MediaTypes from "./MediaTypes"
import FriendList from "./FriendList"

function Profile() {
    return (
        <div className="h-full w-2/12 flex flex-col bg-green-600">
            <div className="w-full h-20 flex items-center justify-center">
                <h2>M E D A T A</h2>
            </div>
            <ProfileInfo />
            <MediaTypes />
            <FriendList />
        </div>
    )
}

export default Profile