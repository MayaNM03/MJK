// Key for storing playlists in localStorage
const PLAYLIST_STORAGE_KEY = 'mjk_playlists';

// Initialize playlists if they don't exist
function initializePlaylists() {
    if (!localStorage.getItem(PLAYLIST_STORAGE_KEY)) {
        const defaultPlaylists = [
            {
                id: '1',
                title: 'Chill Vibes',
                description: 'Relax and unwind with this mellow playlist of chill tracks.',
                cover: 'https://th.bing.com/th/id/OIP.NSAlKp_q9AdU8RKVxATwQwHaHa?w=183&h=183&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3',
                songs: []
            },
            {
                id: '2',
                title: 'Workout Hits',
                description: 'Get pumped with energetic songs perfect for your workout session.',
                cover: 'https://th.bing.com/th/id/OIP.NSAlKp_q9AdU8RKVxATwQwHaHa?w=183&h=183&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3',
                songs: []
            },
            {
                id: '3',
                title: 'Top 40',
                description: 'Stay up to date with the latest chart-topping hits.',
                cover: 'https://th.bing.com/th/id/OIP.NJE_nNNZeU4juC5a5NOaUgHaHa?w=173&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3',
                songs: []
            },
            {
                id: '4',
                title: 'Throwback',
                description: 'A nostalgic collection of your favorite classics from the past.',
                cover: 'https://th.bing.com/th/id/OIP.03liFcUd7xFraoguys8kbwHaGU?w=237&h=204&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3',
                songs: []
            }
        ];
        localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(defaultPlaylists));
    }
}

// Get all playlists
function getPlaylists() {
    const playlists = localStorage.getItem(PLAYLIST_STORAGE_KEY);
    return playlists ? JSON.parse(playlists) : [];
}

// Save playlists
function savePlaylists(playlists) {
    localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(playlists));
}

// Add a new playlist
function addPlaylist(title, description, cover) {
    const playlists = getPlaylists();
    const newPlaylist = {
        id: Date.now().toString(), // Generate unique ID using timestamp
        title,
        description,
        cover: cover || 'https://th.bing.com/th/id/OIP.NSAlKp_q9AdU8RKVxATwQwHaHa?w=183&h=183&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3', // Default cover if none provided
        songs: []
    };
    playlists.push(newPlaylist);
    savePlaylists(playlists);
    return newPlaylist;
}

// Delete a playlist
function deletePlaylist(playlistId) {
    const playlists = getPlaylists();
    const updatedPlaylists = playlists.filter(playlist => playlist.id !== playlistId);
    savePlaylists(updatedPlaylists);
}

// Get a specific playlist
function getPlaylist(playlistId) {
    const playlists = getPlaylists();
    return playlists.find(playlist => playlist.id === playlistId);
}

// Initialize playlists when the script loads
initializePlaylists(); 