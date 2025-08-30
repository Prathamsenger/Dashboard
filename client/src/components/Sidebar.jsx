import React, { act } from 'react'
import{
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme

} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  Groups2Outlined,
} from "@mui/icons-material"
import { useEffect ,useState} from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from '../assets/profile.jpeg'

const navItems = [
{
  text:" Dashboard",
  icon:<HomeOutlined/>
},
{
  text:" Client facing",
  icon:null,

},
{
  text:" Products",
  icon:<ShoppingCartOutlined/>
},
{
  text:" Customers",
  icon:<Groups2Outlined/>
},
{
  text:" Transcation",
  icon:<ReceiptLongOutlined/>
},
{
  text:" Geography",
  icon:<PublicOutlined/>
},
{
  text:" Sales",
  icon:null,
},
{
  text:" Overview",
  icon:<PointOfSaleOutlined/>
},
{
  text:" Daily",
  icon:<TodayOutlined/>
},
{
  text:" Monthly",
  icon:<CalendarMonthOutlined/>
},
{
  text:" Breakdown",
  icon:<PieChartOutlined/>
},
{
  text:" Management",
  icon:null,
},
{
  text:" Daily",
  icon:<TodayOutlined/>
},
{
  text:" Admin",
  icon:<AdminPanelSettingsOutlined/>
},
{
  text:" Performance",
  icon:<TrendingUpOutlined/>
},
]


const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,

}) => {
  
  const { pathname } = useLocation();
const navigate = useNavigate();
const theme = useTheme();

// 👇 fix here
const [active, setActive] = useState("");

useEffect(() => {
  setActive(pathname.substring(1));
}, [pathname]);

  return <Box component="nav">
    {isSidebarOpen && (
      <Drawer
      open={isSidebarOpen}
      onClose={()=>setIsSidebarOpen(false)}
      varient="persistent"
      anchor="left"
      sx={{
        width:drawerWidth,
        "& .MuiDrawer-paper":{
          color: theme.palette.secondary[200],
          backgroundColor:theme.palette.background.alt,
          boxSizing: "border-box",
          borderWidth: isNonMobile ? 0 : "2px",
          width: drawerWidth
        }
    }}
      >
        <Box width="100%">
          < Box m="1.5rem 2rem 2rem 3rem">
          <FlexBetween color={theme.palette.secondary.main}>
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Typography varient="h4" fontWeight="bold">
                ECOMVISION
              </Typography>
            </Box>
            {!isNonMobile && (
              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <ChevronLeft/>
              </IconButton>
            )}
          </FlexBetween>
          </Box>
        </Box>
        <List>
          {navItems.map(({text, icon}) => {
            if (!icon){
              return(
                <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem"}}>
                  {text}
                </Typography>
              )
            }
            const LcText = text.toLocaleLowerCase();

            return(
              <ListItem key={text} disablePadding>
                <ListItemButton
                onClick={() => {
                  navigate(`/${LcText}`);
                setActive(LcText)
                }}
                sx ={{
                  backgroundColor:active === LcText? theme.palette.secondary[300] : "transparent",
                   color: active === LcText ? theme.palette.primary[600]
                    : theme.palette.secondary[100],
                                }}
                >
                  <ListItemIcon
                  sx={{
                    ml:"2rem",
                    color: active === LcText ? theme.palette.primary[600]
                    : theme.palette.secondary[200],
                  }}
                  >
                   {icon}
                    
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                  {active === LcText && (
                    <ChevronRightOutlined sx={{ ml: "auto"}}/>
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    )}

  </Box>
};
export default Sidebar          