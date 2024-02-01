import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Book Tickets</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal3() {
  const [open, setOpen] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpen = () => {
    setSelectedMovie(content.show.id)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [content, setContent] = useState([]);
  useEffect(() => {
    const fetchFromApi = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchFromApi();
  }, []);

  function displayModalContent (item) {
    if (item.show) {
      return (
         <h2 id="parent-modal-title">{item.show.name}</h2>
      )
  } else {
      return (
         <h2 id="parent-modal-title">Name not found.</h2>
      )

  }
  }

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: 'black', backgroundColor: '#D3D3D3' }}>More Information</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          {content[1].show.name}
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}