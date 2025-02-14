import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledDialogTitle = styled(DialogTitle)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background for title
    borderBottom: '1px solid #ccc', // Subtle border
});

const StyledTextField = styled(TextField)({
    marginBottom: '20px',
});

const StyledButton = styled(Button)({
    marginTop: '20px',
    backgroundColor: '#3f51b5',
    color: 'white',
    '&:hover': {
        backgroundColor: '#303f9f',
    },
});

const JobApplication = ({ open, setOpen }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState(''); // New state for cover letter
    const [linkedin, setLinkedIn] = useState(''); // New state for LinkedIn profile

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, phone, resume, coverLetter, linkedin });
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setResume(null);
        setCoverLetter(''); // Reset cover letter
        setLinkedIn(''); // Reset LinkedIn profile
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <StyledDialogTitle>
                Apply for the Job
                <IconButton aria-label="close" onClick={handleClose} style={{ color: '#333' }}>
                    <CloseIcon />
                </IconButton>
            </StyledDialogTitle>
            <DialogContent>
                <Typography variant="h6" gutterBottom>
                    We’re excited to learn more about you! Please fill in the details below to submit your application.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <StyledTextField
                        autoFocus
                        label="Full Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <StyledTextField
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <StyledTextField
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <StyledTextField
                        label="LinkedIn Profile (optional)"
                        type="url"
                        fullWidth
                        variant="outlined"
                        value={linkedin}
                        onChange={(e) => setLinkedIn(e.target.value)}
                    />
                    <StyledTextField
                        label="Cover Letter (optional)"
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                    />
                    <input
                        type="file"
                        accept=".pdf, .doc, .docx"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                        style={{ marginTop: '10px' }}
                    />
                    <br/>
                    <StyledButton style={{backgroundColor:'#bd0505',color:'white'}} type="submit" variant="contained">
                        Submit Application
                    </StyledButton>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" style={{backgroundColor:'#bd0505',color:'white'}} >Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default JobApplication;
