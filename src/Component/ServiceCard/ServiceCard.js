import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, image, navigateTo }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                maxWidth: 200, // Smaller width
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 6, // Adjust the shadow depth
                borderRadius: 25, // Rounded corners
                height: '200px', // Adjusted height
                flex: '0 0 auto', // Ensure cards don't shrink or grow
                margin: '0 10px', // Add spacing between cards
            }}
            className="wow fadeIn"
            data-wow-delay="0.3s"
        >
            <CardActionArea onClick={() => navigate(navigateTo)} sx={{ cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}
                    sx={{
                        objectFit: 'cover', // Ensure the image covers the area
                        filter: 'brightness(0.7)', // Darken the image for better text visibility
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        // backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        padding: '16px', // Add padding for better spacing
                    }}
                >
                    <Typography variant="h5" color="inherit" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="inherit" paragraph sx={{ textAlign: 'center' }}>
                        {description}
                    </Typography>
                    <Typography
                        variant="button"
                        color="inherit"
                        display="block"
                        sx={{
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: 'red', // Change to red on hover
                            }
                        }}
                    >
                        READ MORE <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                    </Typography>
                </div>
            </CardActionArea>
        </Card>
    );
};

export default ServiceCard;