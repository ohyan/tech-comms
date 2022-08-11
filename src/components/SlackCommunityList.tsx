import slackCommunities from '../slack_communities.json'
import type { CommunityProps } from './SlackCommunity'
import SlackCommunity from './SlackCommunity'

const SlackCommunityList = () => {
    const communities = slackCommunities as CommunityProps[]
    return (
        <div>
        { communities.map((community: CommunityProps) => <SlackCommunity { ...community } />) }
        </div>
    )
}

export default SlackCommunityList
