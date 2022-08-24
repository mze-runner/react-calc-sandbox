import { Button, Grid, TextField, Container } from '@mui/material';
import { useState } from 'react';

function AddUpPage() {
    const [count, setCount] = useState(0);
    const [valueOne, setValueOne] = useState('');

    // this is function to add your own logic
    const handleCount = (prev) => {
        // here you can add your logic(!)
        console.log(prev);
        // return a new value
        return prev + 1;
    };

    const handleChange = (event) => {
        setValueOne(event.target.value);
    };

    const showNumber = (val) => {
        const number = parseFloat(val);
        console.log(number);
        return isNaN(number) ? 'Not a Number' : number;
    };
    const showResult = (val) => {
        const number = parseFloat(val);
        if (isNaN(number)) {
            return <>please ensure your input a number</>;
        }
        return <>{number * number}</>;
    };
    // const tt = 'this text is coming from a variable...';
    return (
        <Container>
            <Grid>
                <h1>THIS IS YOUR = {count}</h1>
                <Button onClick={() => setCount(handleCount)}>Click ME</Button>
                <br />
                <TextField
                    id="standard-basic"
                    label="First variable"
                    variant="standard"
                    value={valueOne}
                    onChange={handleChange}
                />
                <div></div>
                <h1>Val one = {showNumber(valueOne)}</h1>
                <br />
                <h2>{showResult(valueOne)}</h2>
            </Grid>
        </Container>
    );
}

export default AddUpPage;
