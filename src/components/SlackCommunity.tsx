import slackCommunities from '../slack_communities.json'

type CommunityProps = {
    name: string,
    homepage?: string
    slackLink?: string,
    tags?: string[],
}

const SlackCommunity = (props: CommunityProps) => {
    return (
        <div className='card'>
            {props.name}
        </div>
    )
}


const SlackCommunityList = () => {
    const communities = slackCommunities as CommunityProps[]
    return (
        <div>
            {communities.map((community) => <SlackCommunity {...community} />)}
        </div>
    )
}

export default SlackCommunityList
