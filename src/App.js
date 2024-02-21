
import {Main, GlobalStyle, CalculatorBody, ButtonsArea} from './style';
import OutputText from './components/OutputArea';
import Button from './components/Button'

import { useState } from 'react'; 

function App() {

    const [currentNumber, setCurrentNumber] = useState('0');
    const ERROR_INVALID = 'Invalid Operation!';

    const updateCurrentNumber = (number) => {
        if(currentNumber == ERROR_INVALID)
            setCurrentNumber(`${number}`);
        else
            setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    };

    const clearOutput = () => {
        setCurrentNumber('0');
    };

    const backOneLetter = () => {
        if(currentNumber == ERROR_INVALID)  setCurrentNumber('0');

        else{
            let newCurrent = currentNumber.substring(0, currentNumber.length -1);
   
            setCurrentNumber( newCurrent === '' ? '0' : newCurrent);
        }
    }

    const calcResult = () => {
        
        let operation = currentNumber.replace(/[x^√]/g, (letter) => {
            return letter === 'x' ? '*' : letter === '^' ? '**' : 'sqrt';
        });

        try{
            // const result = eval(operation);
            const result = eval?.(`with (Math) ${operation}`);
            
            setCurrentNumber(`${result}`);
        }
        catch{
            setCurrentNumber(ERROR_INVALID);
        }
    }

    return (
        <Main>
            <GlobalStyle/>

            <CalculatorBody>
                <OutputText currentContent={currentNumber}/>

                <ButtonsArea>
                    <Button content='Clear' grid='clear' classButton='clear' onClick={() => clearOutput()}/>
                    <Button content='(' grid='open_paren' onClick={() => updateCurrentNumber('(')}/>
                    <Button content=')' grid='close_paren' onClick={() => updateCurrentNumber(')')}/>

                    <Button content='<' grid='erase' classButton='erase' onClick={() => backOneLetter()}/>
                    <Button content='^' grid='pot' onClick={() => updateCurrentNumber('^')}/>
                    <Button content='√' grid='raiz' onClick={() => updateCurrentNumber('√(')}/>
                    <Button content='/' grid='divisor' onClick={() => updateCurrentNumber('/')}/>

                    <Button content='9' grid='nine' onClick={() => updateCurrentNumber('9')}/>
                    <Button content='8' grid='eight' onClick={() => updateCurrentNumber('8')}/>
                    <Button content='7' grid='seven' onClick={() => updateCurrentNumber('7')}/>
                    <Button content='6' grid='six' onClick={() => updateCurrentNumber('6')}/>
                    <Button content='5' grid='five' onClick={() => updateCurrentNumber('5')}/>
                    <Button content='4' grid='four' onClick={() => updateCurrentNumber('4')}/>
                    <Button content='3' grid='three' onClick={() => updateCurrentNumber('3')}/>
                    <Button content='2' grid='two' onClick={() => updateCurrentNumber('2')}/>
                    <Button content='1' grid='one' onClick={() => updateCurrentNumber('1')}/>
                    <Button content='0' grid='zero' onClick={() => updateCurrentNumber('0')}/>

                    <Button content='x' grid='times'  onClick={() => updateCurrentNumber('x')}/>
                    <Button content='-' grid='minus'  onClick={() => updateCurrentNumber('-')}/>
                    <Button content='+' grid='plus' classButton='plus' onClick={() => updateCurrentNumber('+')}/>
                    <Button content='.' grid='dot' onClick={() => updateCurrentNumber('.')}/>
                    <Button content='=' grid='equal' onClick={() => calcResult()}/>
                </ButtonsArea>
            </CalculatorBody>

        </Main>
    );
}

export default App;
