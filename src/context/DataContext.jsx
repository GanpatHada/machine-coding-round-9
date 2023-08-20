import { createContext, useState } from "react";
import { videos } from "../Data";
export const DataContext = createContext();
export function DataProvider({ children }) {
  //states here
  const getWatchLaterList = () => {
    const watchLaterList = localStorage.getItem("watchLater");
    if (watchLaterList) return JSON.parse(watchLaterList);
    return [];
  };

  const getMyNotes = () => {
    const notes = localStorage.getItem("notes");
    if (notes) return JSON.parse(notes);
    return [];
  };

  const getPlayLists = () => {
    const playlists = localStorage.getItem("playlists");
    if (playlists) return JSON.parse(playlists);
    return [];
  };

  const [search, setSearch] = useState("");
  const [watchLaterList, setWatchLaterList] = useState(getWatchLaterList());
  const [playlists, setPlaylists] = useState(getPlayLists());
  const [notes, setNotes] = useState(getMyNotes());

  const addToWatchLater = (videoId) => {
    let video = videos.find((video) => video._id === videoId);
    let newWatchLaterList = [...watchLaterList, video];
    localStorage.setItem("watchLater", JSON.stringify(newWatchLaterList));
    setWatchLaterList(newWatchLaterList);
  };

  const removeFromWatchLater = (videoId) => {
    let video = videos.find((video) => video._id === videoId);
    let newWatchLaterList = watchLaterList.filter(
      (eachVideo) => eachVideo._id !== video._id
    );
    localStorage.setItem("watchLater", JSON.stringify(newWatchLaterList));
    setWatchLaterList(newWatchLaterList);
  };

  const createNewPlaylist = (playlist) => {
    let tempPlaylists = [playlist, ...playlists];
    localStorage.setItem("playlists", JSON.stringify(tempPlaylists));
    setPlaylists(tempPlaylists);
  };

  const addNote = (noteObj) => {
    let newNotes = [...notes, noteObj];
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  const deleteNote = (noteId) => {
    let newNotes = notes.filter((note) => note.noteId !== noteId);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  const editNote = (noteId, value) => {
    let newNotes = notes;
    newNotes = notes.map((note) => {
      if (note.noteId === noteId) return { ...note, note: value };
      return { ...note };
    });
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  const addToPlaylist = (playlistId, videoId) => {
    let tempPlaylists = playlists.map((playlist) => {
      if (playlist._id === playlistId)
        return {
          ...playlist,
          videos: [...new Set([videoId, ...playlist.videos])],
        };
      return { ...playlist };
    });
    localStorage.setItem("playlists", JSON.stringify(tempPlaylists));
    setPlaylists(tempPlaylists);
  };

  const deleteVideoFromPlaylist=(playlistId,videoId)=>{
    let tempPlaylists=playlists.map(playlist=>{
      if(playlist._id===playlistId)
         return {...playlist,videos:playlist.videos.filter(video=>video!==videoId)}
      return {...playlist}   
    })
    localStorage.setItem("playlists", JSON.stringify(tempPlaylists));
    setPlaylists(tempPlaylists);
  }

  return (
    <DataContext.Provider
      value={{
        watchLaterList,
        addToWatchLater,
        removeFromWatchLater,
        addNote,
        notes,
        deleteNote,
        editNote,
        search,
        setSearch,
        createNewPlaylist,
        playlists,
        addToPlaylist,
        deleteVideoFromPlaylist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
