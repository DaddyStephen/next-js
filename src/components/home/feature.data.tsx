import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy To Join',
    description: 'Simple partnership process for easy joining in our company.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Affordable homes for sale to help people achieve homeownership dreams.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Time Strategies',
    description: 'Implementing flexible work schedules can increase profit in a company.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultation With Experts',
    description: 'Get professional advice from industry specialists to improve decision-making.',
    icon: <ContactSupportIcon />,
  },
]
