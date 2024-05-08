import React from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';
import Grid from '@mui/material/Grid';

const ExerciseModal = ({
    open,
    handleClose,
    value,
    handleChange,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    exercises,
    addRow,
    getChestExercises,
    getArmExercises,
    getLegExercises,
    getCoreExercises,
    getShoulderExercises,
    getBackExercises,
    exerciseEmptyRows
}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Paper sx={{ padding: 5, width: "60%" }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>SELECT EXERCISES</b>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Browse through the list of exercises displayed in the below table and click on ADD button to add the exercise to the workout plan.
                    </Typography><br />

                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList sx={{ paddingBottom: 1 }} onChange={handleChange} aria-label="lab API tabs example">
                                <Tab
                                    label="CHEST"
                                    value="1"
                                    sx={{ color: 'black', fontWeight: 700 }}
                                    onClick={getChestExercises}
                                />
                                <Tab
                                    label="ARMS"
                                    value="2"
                                    sx={{ color: 'black', fontWeight: 700 }}
                                    onClick={getArmExercises}
                                />
                                <Tab
                                    label="LEGS"
                                    value="3"
                                    sx={{ color: 'black', fontWeight: 700 }}
                                    onClick={getLegExercises}
                                />
                                <Tab
                                    label="CORE"
                                    value="4"
                                    sx={{ color: 'black', fontWeight: 700 }}
                                    onClick={getCoreExercises}
                                />
                                <Tab
                                    label="SHOULDERS"
                                    value="5"
                                    sx={{ color: 'black', fontWeight: 700 }}
                                    onClick={getShoulderExercises}
                                />
                                <Tab
                                    label="BACK"
                                    value="6"
                                    sx={{ color: 'black', fontWeight: 700 }}
                                    onClick={getBackExercises}
                                />
                            </TabList>
                        </Box>
                    </TabContext>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"><b>ID</b></TableCell>
                                    <TableCell align="left"><b>Exercise</b></TableCell>
                                    <TableCell align="left"><b>Actions</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {exercises.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow
                                        key={row.exerciseId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{row.exerciseId}</TableCell>
                                        <TableCell align="left">{row.exercise}</TableCell>
                                        <TableCell align="left">
                                            <Button variant='outlined' color="primary" onClick={() => addRow(row)}>ADD</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {exerciseEmptyRows > 0 && (
                                    <TableRow style={{ height: 89 * exerciseEmptyRows }}>
                                    <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        <TablePagination
                            page={page}
                            rowsPerPageOptions={[5, 10, 15]}
                            count={exercises.length}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                    <Grid sx={{ textAlign: 'right', paddingTop: '15px' }}>
                        <Button variant='contained' color='primary' onClick={handleClose}>CLOSE</Button>
                    </Grid>
                </Paper>
            </Box>
        </Modal>
    );
}

export default ExerciseModal;
