import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum voluptate nostrum, numquam blanditiis, ut corporis eos nisi dolorum, temporibus alias dolore ducimus quod harum! Laborum blanditiis consectetur nihil sint?
        Deleniti, illo voluptates id at beatae rerum necessitatibus mollitia debitis quo cum vel iure sit commodi officiis laboriosam nesciunt minima accusantium cumque optio ipsa eligendi, ea laborum. Maiores, voluptate voluptatibus.
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          "&:hover": {
            backgroundColor: 'error.main',
            opacity: 0.9
          },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined
          sx={{ fontSize: 30 }}
        />
      </IconButton>
    </JournalLayout>
  )
}
