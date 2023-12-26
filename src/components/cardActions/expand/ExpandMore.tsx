import dataTestId from '@/tests/data-test';
import { IconButtonProps, IconButton, styled, Theme } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const handleExpandClick = ({
  theme,
  expand,
}: {
  theme: Theme;
  expand: boolean;
}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
});

const createStyledComponent = styled(
  ({ expand, ...other }: ExpandMoreProps) => {
    return <IconButton {...other} data-testid={dataTestId.expandMore} />;
  }
);

const ExpandMore = createStyledComponent(handleExpandClick);

export default ExpandMore;
