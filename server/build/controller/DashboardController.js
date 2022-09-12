export function fetchMediaTypes(req, res) {
    res.send({ msg: 'media type list' });
}
export function fetchMediaItems(req, res) {
    res.send('media items');
}
export function addMediaItem(req, res) {
    res.send('media item');
}
export function fetchSingleMediaItem(req, res) {
    res.send('single media item');
}
export function updateMediaItem(req, res) {
    res.send('update media item');
}
export function deleteMediaItem(req, res) {
    res.send('delete media item');
}
