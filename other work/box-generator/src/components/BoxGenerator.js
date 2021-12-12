import React, {useState} from "react";
import StyledBox from "./StyledBox";



const BoxGenerator=(props) => {
    const colorChoice = React.createRef();
    const widthSize = React.createRef();

    const [state, setState] = useState({
        boxes: [],
        newColor: '',
        newWidth: ''
    });
    const createBox = e => {
        try{
            e.preventDefault();
            setState({
                boxes: [...state.boxes,
                {
                    color: state.newColor,
                    width: state.newWidth
                }],
                newColor: '',
                newWidth: 0,
            });
        }
        catch{
            console.log('error');
        }
    };

    const onChangeColorHandler = e => {
        e.preventDefault();
        setState({
            ...state,
            newColor: colorChoice.current.value
        });
    };
    
    const onChangeWidthHandler = e => {
        e.preventDefault();
        setState({
            ...state,
            newWidth: widthSize.current.value
        });
    };


    return (
        <div>
        <h1>Add a New Box</h1>
            <div>
                <input type="text" 
                ref={colorChoice} 
                onChange={onChangeColorHandler} 
                value={state.newColor}
                placeholder="Enter a color"/>
            </div>
            <div>
                <input type="text" 
                ref={widthSize} 
                onChange={onChangeWidthHandler} 
                value={state.newWidth} 
                placeholder="width 10px, 20px. etc etc"/>
            </div>
            <button onClick={createBox}>Add Box</button>
            <div>
                {state.boxes.map((box, index) => (
                    <StyledBox
                    key={index}
                    bgColor={box.color}
                    width={box.width}
                    height={box.width}
                    ></StyledBox>
                ))}
            </div>    
        </div>
    );
};

export default BoxGenerator;