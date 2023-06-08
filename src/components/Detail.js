import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AddLocationIcon from '@mui/icons-material/AddLocation';



function Details() {
    return (
        <div className='container mt-3'>
            <h2 style={{ fontWeight: 400 }}>Welcome Vikas Pandey</h2>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                <div className='add_btn '>
                                <button className='btn btn-primary mx-2'><CreateIcon /> </button>
                                <button className='btn btn-warning'><DeleteIcon /></button>
                            </div>
                    <div className='row'>
                    
                        <div className='left_view col-lg-6 col-md-6 col-12' >
                            <img src="/profile.png" style={{ width: 50 }} alt='profile' />
                            <h3 className='mt-3'>Name : <span >Shikhar Pratap</span></h3>
                            <h3 className='mt-3'>Age : <span  > 20 </span></h3>
                            <p className='mt-3'> <MailOutlineIcon />Email : <span>vikaspandey42@gmail.com</span></p>
                            <p className='mt-3'><WorkIcon />Occupation : <span>web developer </span></p>
                        </div>
                        <div className='right_view col-lg-6 col-md-6 col-12'>
                           
                            <p className='mt-5'><SmartphoneIcon />mobile :<span>8596325869</span></p>
                            <p className='mt-3'><AddLocationIcon />location :<span>Allahabad</span></p>
                            <p className='mt-3'>Description: <span>lorem allahabad is also known as prayagraj this city is in Uttar Pradesh </span></p>

                        </div>
                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default Details