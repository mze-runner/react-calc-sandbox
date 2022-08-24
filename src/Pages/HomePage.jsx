import { Button, Grid } from '@mui/material';
import { useState } from 'react';

function HomePage() {
    const [count, setCount] = useState(0);

    // this is function to add your own logic
    const handleCount = (prev) => {
        // here you can add your logic(!)
        console.log(prev);
        // return a new value
        return prev + 1;
    };

    // const tt = 'this text is coming from a variable...';
    return (
        <Grid>
            <h1>THIS IS YOUR = {count}</h1>
            <Button onClick={() => setCount(handleCount)}>Click ME</Button>
        </Grid>
    );
}

export default HomePage;
