
import {ButtonStyle} from './styles';

export default function Button({content, classButton, grid, onClick}) {
    return (
    <ButtonStyle className={classButton} onClick={onClick} style={{gridArea: grid}}>
        <span>{content}</span>
    </ButtonStyle>
    );
}