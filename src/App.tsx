import {useState} from 'react';
import slackCommunities from './slack_communities.json'
import './App.css';
import type { CommunityProps } from './components/SlackCommunity';
import type { CommunityListProps } from './components/SlackCommunityList';
import type {DropDownProps} from './components/TagDropDown'
import SlackCommunityList from './components/SlackCommunityList';
import GithubCorner from './components/GithubCorner';
import TagDropDown from './components/TagDropDown';


const communities = slackCommunities as CommunityProps[]
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
            <SlackCommunityList  { ...communityList } selectedTag={selectedTag}/>
          </div>
      </div>
    </body>
  );
}

export default App;
