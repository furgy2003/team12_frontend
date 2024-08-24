import { DialogContent, useMediaQuery, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import IconButton from '@mui/material/IconButton';
import AccessTime from '@mui/icons-material/AccessTime';
import LocationOn from '@mui/icons-material/LocationOn';
import styles from '../../css/EventPreview.module.css'
import img1 from '../../../../public/images/kayaking.jpg';
import Image from 'next/image';


export const EventDialog = ({open, handleClose, eventData}) => {

    if (eventData == null) return;
    
    return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
            <div className='mb-7 text-black p-4'>
                <div className='flex justify-center'>
                <Image src={eventData.image} width={'100%'} height={250} />
                    
                </div>
                <div className='flex flex-col justify-start gap-3 mt-4'>
                    <h1 className='text-md font-bold'>{eventData.title}</h1>
                    <div className='flex flex-col gap-1'>
                        <span className='text-xs font-bold flex items-center gap-3 '><CalendarMonth fontSize='small' /> {eventData.date} </span>
                        <span className='text-xs font-bold flex items-center gap-3 '><AccessTime fontSize='small' /> {eventData.time}</span>
                        <span className='text-xs font-bold flex items-center gap-3 '><LocationOn fontSize='small' /> {eventData.location}</span>
                    
                    </div>
                    <div className='bg-gray-200 rounded-md p-4 text-sm'>
                        {eventData.description}
                    </div>
                    <div>
                    <button className={styles.registerButton} onClick={()=> console.log('Registered')}>
            Register
          </button>
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>);
}