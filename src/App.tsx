import {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Communities from './community_list.json'
import './App.css';
import type { CommunityProps } from './components/Community';
import type { CommunityListProps } from './components/CommunityList';
import type {DropDownProps} from './components/TagDropDown'
import CommunityList from './components/CommunityList';
import GithubCorner from './components/GithubCorner';
import TagDropDown from './components/TagDropDown';


const communities = Communities as CommunityProps[]
const communityList = { communities } as CommunityListProps


function App() {
  const [selectedTag, setSelectedTag] = useState('');

  const dropDownProps: DropDownProps = {
    items: ['mlops', 'data engineering'],
    onTagSelect: (tag: string) => {
      setSelectedTag(tag)
    },
    selectedTag: selectedTag
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <body>
        <div>
            <GithubCorner />
            <div className="logo-row">
              <img src="./logo.png" className="logo" />
            </div>
            <div>
              <TagDropDown {...dropDownProps} selectedTag={selectedTag}/>
            </div>
            <div>
              <CommunityList  { ...communityList } selectedTag={selectedTag}/>
            </div>
        </div>
      </body>
    </Router>
  );
}

export default App;
