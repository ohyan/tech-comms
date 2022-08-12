import type { CommunityProps } from './SlackCommunity'
import SlackCommunity from './SlackCommunity'
import { useState } from 'react'

type CommunityListProps = {
    communities: CommunityProps[]
}

const SlackCommunityList = (props: CommunityListProps) => {
    console.log(props.communities)
    const [tag, setTag] = useState('');
    const filter = (tag: string) => {
        setTag(tag)
    }

    const filteredCommunities = tag === '' ? props.communities : props.communities.filter((community) => community.tags.includes(tag))

    return (
        <div className='card-rows'>
            <div className='card-group'>
                { filteredCommunities.map((community: CommunityProps) => <SlackCommunity {...community} onTagClick={filter} />) }
            </div>
        </div>
    )
}

export default SlackCommunityList
export type {CommunityListProps}
