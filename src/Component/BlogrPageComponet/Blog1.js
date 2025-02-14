import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

// Styled components for animations
const AnimatedTitle = styled('h2')({
    fontWeight: 'bold',
    color: '#333',
    opacity: 0,
    animation: 'fadeIn 0.5s forwards', // Fade-in animation
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
});

const AnimatedButton = styled(Button)({
    padding: '10px 30px',
    fontSize: '1rem',
    transition: 'background-color 0.3s, transform 0.3s',
    '&:hover': {
        backgroundColor: '#5c6bc0', // Darker shade on hover
        transform: 'scale(1.05)', // Slightly enlarge on hover
    },
});

const Blog1 = ({ open, setOpen, selectedBlog }) => {
    const handleClose = () => {
        setOpen(false);
    };
    React.useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    console.log("selectedBlog===>", selectedBlog)

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="blog-dialog-title"
            aria-describedby="blog-dialog-description"
            maxWidth="md"
            fullWidth
            PaperProps={{
                style: {
                    borderRadius: '15px',
                    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    animation: 'slideIn 0.5s forwards', // Slide-in animation
                    '@keyframes slideIn': {
                        '0%': { transform: 'translateY(-20px)', opacity: 0 },
                        '100%': { transform: 'translateY(0)', opacity: 1 },
                    },
                },
            }}
        >
            <DialogTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                <AnimatedTitle>
                    {selectedBlog?.title}
                </AnimatedTitle>
                <IconButton aria-label="close" onClick={handleClose} style={{ color: '#333' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent style={{ padding: '20px 40px', fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
                <div style={{ marginBottom: '15px' }}>
                    {/* <span style={{ color: '#888', fontSize: '0.9rem' }}>April 14th, 2022</span> */}
                </div>
                <section className="blog-post" style={{ marginBottom: '20px', }}>
                    <img
                        src={selectedBlog?.image}
                        alt="Blog Thumbnail"
                        style={{ width: '60%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}

                    />
                    {/* <div style={{ borderLeft: '4px solid #3f51b5', paddingLeft: '15px', marginBottom: '20px' }}>
                        <p style={{ fontStyle: 'italic', color: '#3f51b5', fontWeight: '500' }}>
                            "Rust is a game-changer for system-level programming. It brings safety, speed, and memory management to the forefront—an absolute delight for developers!"
                        </p>
                    </div> */}
                    <p>
                        {/* Rust is an exciting new programming language that combines the performance of low-level languages with the safety and ease of higher-level languages.
                        In recent years, it has become a strong alternative to Python in performance-sensitive applications. */}
                       {selectedBlog?.excerpt}
                    </p>
                    {/* <p>
                        One of the main reasons developers are switching to Rust is its memory safety without a garbage collector. This allows Rust to deliver high-performance
                        applications that are safe from memory-related bugs.
                    </p>
                    <h3 style={{ margin: '20px 0 10px', fontWeight: 'bold' }}>Why Rust over Python?</h3>
                    <ul style={{ paddingLeft: '20px', color: '#555' }}>
                        <li>Memory safety without a garbage collector</li>
                        <li>Faster execution in system-level applications</li>
                        <li>Strong concurrency support</li>
                        <li>Growing ecosystem and community support</li>
                    </ul>
                    <p>
                        Despite its advantages, Rust does come with a learning curve. However, for developers working in areas requiring high performance and low-level access,
                        Rust is worth the effort. It's especially beneficial in applications like game engines, operating systems, and other performance-critical software.
                    </p> */}
                </section>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <AnimatedButton variant="contained" style={{ background: '#bd0505' }} onClick={handleClose}>
                        Back to Blog
                    </AnimatedButton>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Blog1;
