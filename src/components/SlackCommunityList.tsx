import type { CommunityProps } from './SlackCommunity'
import SlackCommunity from './SlackCommunity'
import { useState } from 'react'

type CommunityListProps = {
    selectedTag: string;
    communities: CommunityProps[]
}

function shuffle<T>(array: T[]) {
    const out = Array.from(array);
    for (let i = out.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = out[i];
        out[i] = out[r];
        out[r] = tmp;
    }
    return out;
}


const SlackCommunityList = (props: CommunityListProps) => {
    const [tag, setTag] = useState('');
    const filter = (tag: string) => {
        setTag(tag)
    }

    const filteredCommunitiesWithTag = tag === '' ? props.communities : props.communities.filter((community) => community.tags.includes(tag))
    const filteredCommunitiesWithDropDownSelect = props.selectedTag === '' ? filteredCommunitiesWithTag : filteredCommunitiesWithTag.filter((community) => community.tags.includes(props.selectedTag))
    const shuffledCommunities = shuffle(filteredCommunitiesWithDropDownSelect)
    return (
        <div className='card-rows'>
            <div className='card-group'>
                { shuffledCommunities.map((community: CommunityProps) => <SlackCommunity {...community} onTagClick={filter}/>) }
            </div>
        </div>
    )
}

export default SlackCommunityList
export type {CommunityListProps}
