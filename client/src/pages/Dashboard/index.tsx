import Profile from "./Profile"
import MediaList from "./MediaList"
import MediaInfo from "./MediaInfo"
import MediaFilter from "./MediaFilter"

function Dashboard() {
    return (
        <div className="h-screen w-screen flex">
            <Profile />
            <div className="h-full w-9/12 flex flex-col">
                <MediaFilter />
                <div className="flex w-full grow">
                    <MediaList />
                    <MediaInfo />
                </div>
            </div>

        </div>
    )
}

export default Dashboard