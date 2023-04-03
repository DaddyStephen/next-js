import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Logo } from '@/components/logo'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '25rem',
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          background: '-webkit-linear-gradient(45deg, #085078 10%, #85d8ce 90%)',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 200,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={570} height={427} alt={'Mentor ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'black' }}>{item.category}</Typography>
          <Typography sx={{ mb: 2, color: 'black' }} variant="subtitle1">
            {item.description}
          </Typography>
          <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
            <Logo />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
