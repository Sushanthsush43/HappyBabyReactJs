import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

// Styled components for newspaper layout
const NewspaperTitle = styled('h2')({
    fontWeight: 'bold',
    fontSize: '2.5rem',
    margin: '20px 0',
    borderBottom: '3px solid #333',
    paddingBottom: '10px',
});

const NewspaperDate = styled('span')({
    color: '#888',
    fontSize: '1rem',
    marginBottom: '20px',
    display: 'block',
});

const ArticleContent = styled('p')({
    marginBottom: '20px',
    lineHeight: '1.8',
    fontSize: '1rem',
    color: '#333',
});

const ImageContainer = styled('div')({
    flex: '1',
    margin: '0 20px',
});

const Image = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
});

const Separator = styled('div')({
    width: '100%',
    height: '1px',
    backgroundColor: '#ccc',
    margin: '20px 0',
});

const CaseStudy = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = "Thought you loved Python? Wait until you meet Rust";
    const date = "April 14th, 2022";
    const images = [
        { src: "images/img_1_sq.jpg" },
        { src: "images/img_2_sq.jpg" },
        { src: "images/img_3_sq.jpg" },
    ];
    const content = [
        "Rust is an exciting new programming language that combines the performance of low-level languages with the safety and ease of higher-level languages.",
        "One of the main reasons developers are switching to Rust is its memory safety without a garbage collector. This allows Rust to deliver high-performance applications that are safe from memory-related bugs.",
        "Despite its advantages, Rust does come with a learning curve. However, for developers working in areas requiring high performance and low-level access, Rust is worth the effort.",
    ];

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="case-study-dialog-title"
            aria-describedby="case-study-dialog-description"
            maxWidth="md"
            fullWidth
            PaperProps={{
                style: {
                    borderRadius: '15px',
                    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                },
            }}
        >
            <DialogTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                <NewspaperTitle>{title}</NewspaperTitle>
                <IconButton aria-label="close" onClick={handleClose} style={{ color: '#333' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent style={{ padding: '20px 40px', color: '#555' }}>
                <NewspaperDate>{date}</NewspaperDate>
                <Separator />
                <div style={{ flexWrap: 'wrap' }}>
                    {images.map((image, index) => (
                        <React.Fragment key={index}>
                            <ImageContainer style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <Image
                                    src={image.src}
                                    alt={`Case Study Image ${index + 1}`}
                                    style={{ width: '100%', height: 'auto', maxWidth: '500px' }} // Adjust size here
                                />
                            </ImageContainer>
                            <div style={{ flex: '2', paddingLeft: '20px', order: index % 2 === 0 ? 2 : 1 }}>
                                <ArticleContent>
                                    {content[index % content.length]} {/* Cycle through content */}
                                </ArticleContent>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                <Separator />
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <Button variant="contained" style={{ background: '#bd0505' }} onClick={handleClose}>
                        Back to Blog
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CaseStudy;
