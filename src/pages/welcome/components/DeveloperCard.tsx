import ExpandMore from '@/components/cardActions/ExpandMore.tsx/ExpandMore';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import {
  GitHub,
  Email,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
} from '@mui/material';
import { useContext, useState } from 'react';
import { DeveloperData } from '../data/types';

interface PropType {
  data: DeveloperData;
}

function DeveloperCard({ data }: PropType) {
  const { localeData } = useContext(LocalizationContext);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 320 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={localeData[data.image.src]}
        title={localeData[data.image.altLocaleIndex]}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary.main"
        >
          {localeData[data.nameLocaleIndex]}
        </Typography>
        <Typography gutterBottom variant="h6" paragraph>
          {localeData.position}:
          <Typography color="text.primary">
            {localeData[data.positionLocaleIndex]}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton href={data.contacts.gitHub} color="inherit">
          <GitHub />
        </IconButton>
        <IconButton href={data.contacts.email} color="inherit">
          <Email />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{localeData.bioTitle}:</Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            {localeData[data.quickBioLocaleIndex]}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default DeveloperCard;
