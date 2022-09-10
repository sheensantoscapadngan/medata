import MediaItem from "./MediaItem"
import TypeTitle from "./TypeTitle"

function MediaList() {
    return (
        <div className="h-full w-2/5 bg-green-500 ">
            <TypeTitle />
            <div className="flex flex-col">
                <MediaItem />
                <MediaItem />
                <MediaItem />
                <MediaItem />
                <MediaItem />
                <MediaItem />
                <MediaItem />
            </div>
        </div>
    )
}

export default MediaList