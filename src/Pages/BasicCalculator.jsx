import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function BasicCalculatorPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                    xsOffset={0}
                    smOffset={0}
                    mdOffset={0}
                    lgOffset={4}
                    xlOffset={4}
                >
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Item>xs=4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default BasicCalculatorPage;
