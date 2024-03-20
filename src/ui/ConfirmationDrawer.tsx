import React from "react"
import { Drawer, Button, DrawerProps, Box } from "@mui/material"
import IconModalSeason from "../../assets/icons/season.svg"
import { BodyText, Display } from "ui/Typography"

interface ConfirmationDrawerProps extends DrawerProps {
  image?: string
  title: string
  message: string | React.ReactNode
  backButtonTitle: string
  onClose: () => void
}

const ConfirmationDrawer: React.FC<ConfirmationDrawerProps> = ({
  image = IconModalSeason,
  title,
  message,
  backButtonTitle,
  ...rest
}) => {
  return (
    <Drawer anchor="right" {...rest}>
      <Box
        width={600}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        gap="2.81rem"
      >
        <img
          src={image}
          alt="Icon Picker"
          style={{
            width: "221px",
            height: "229px",
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="1.5rem"
          textAlign="center"
        >
          <Display color="grey-800" size="sm" fontWeight="SemiBold">
            {title}
          </Display>
          <BodyText
            size="md"
            color="grey-800"
            fontWeight="Medium"
            width="16rem"
          >
            {message}
          </BodyText>
        </Box>
        <Box paddingTop="1.19rem">
          <Button
            onClick={rest.onClose}
            variant="contained"
            color="primary"
            autoFocus
          >
            {backButtonTitle}
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default ConfirmationDrawer
