import {
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';
import LocalizationContext from '@/contexts/localization/LocalizationContext';
import Routes from '@/router/routes';
import dataTestId from '@/tests/data-test';

interface Page {
  href: string;
  title: string;
}

function BurgerMenu() {
  const { localeData } = useContext(LocalizationContext);

  const pages: Page[] = [{ href: Routes.Home, title: localeData.welcomePage }];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          data-testid={dataTestId.burgerMenuMobile}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          data-testid={dataTestId.burgerMenuMobileItems}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.href}
              onClick={handleCloseNavMenu}
              data-testid={dataTestId.burgerMenuMobileItem}
            >
              <Link href={page.href}>
                <Typography textAlign="center">{page.title}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box
        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
        data-testid={dataTestId.burgerMenuDesktop}
      >
        {pages.map((page) => (
          <Link
            href={page.href}
            color="inherit"
            underline="none"
            variant="h4"
            key={page.href}
          >
            {page.title}
          </Link>
        ))}
      </Box>
    </>
  );
}

export default BurgerMenu;
