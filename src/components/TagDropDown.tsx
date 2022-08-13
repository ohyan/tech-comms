import Communities from '../community_list.json'
import type { CommunityProps } from './Community';
import Dropdown from 'react-bootstrap/Dropdown';

type DropDownProps = {
  items: string[]
  onTagSelect: (tag: string) => void
  selectedTag: string
}

const communities = Communities as CommunityProps[]
const communityTags = communities.map((community) => community.tags).flat()

const TagCounter = (tags: string[]) => {
  const tagCount = {} as { [key: string]: number }
  tags.forEach((tag) => {
    tagCount[tag] = tagCount[tag] ? tagCount[tag] + 1 : 1
  })
  return tagCount
}
const tagCountResult = TagCounter(communityTags)
const sortedTagKeys = Object.keys(tagCountResult).sort((a, b) => tagCountResult[b] - tagCountResult[a])
const sortedTagItems = sortedTagKeys.map((key) => ({ tag: key, count: tagCountResult[key] }))

const TagDropDown = (props: DropDownProps) => {
  return (
    <Dropdown className='dropdown-row'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        { (props.selectedTag === '')? 'Expolore': props.selectedTag }
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          sortedTagItems.map(
            (item) => (
              <div onClick= {() => props.onTagSelect(item.tag)}>
                <Dropdown.Item> {item.tag} ({item.count}) </Dropdown.Item>
              </div>
            )
          )
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TagDropDown;
export type { DropDownProps }
