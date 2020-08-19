import React from 'react';
import './Sidebar.css';
import SidebarOption from './SIdebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import { useStateProviderValue } from './StateProvider';


function Sidebar() {
  const [{ playlists }, dispatch] = useStateProviderValue();


  return (
    <div className="sidebar">
    <img 
      className="sidebar__logo"
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
      alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={VerticalSplitIcon} />

      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}

    </div> 
  )
}

export default Sidebar;
