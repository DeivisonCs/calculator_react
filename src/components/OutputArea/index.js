import {ViewArea} from './styles'

export default function OutputText({currentContent}) {
    
    return <ViewArea disabled type='text' value={currentContent}/>;

}