import slackCommunities from './slack_communities.json'
import './App.css';
import type { CommunityProps } from './components/SlackCommunity';
import type { CommunityListProps } from './components/SlackCommunityList';
import SlackCommunityList from './components/SlackCommunityList';


const communities = slackCommunities as CommunityProps[]
const communityList = { communities: communities } as CommunityListProps


function App() {
  return (
    <body>
      <div>
        <div className="logo-row">
          <img src="./logo.png" className="logo" />
        </div>
        <div>
          <SlackCommunityList  { ...communityList }/>
        </div>
      </div>
    </body>
  );
}

export default App;
